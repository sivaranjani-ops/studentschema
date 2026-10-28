
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const Student = require("./Student");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET / - Student entry form
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "student.html"));
});

// POST /students - Add student
app.post("/students", async (req, res) => {
  try {
    const { name, registerNumber, department, year } = req.body;

    await Student.create({
      name,
      registerNumber,
      department,
      year: Number(year)
    });

    res.send(`
      <h2>Student added successfully</h2>
      <a href="/">Add another student</a><br><br>
      <a href="/students">View all students</a>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to add student");
  }
});

// GET /students - Display all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();

    const rows = students.map(student => `
      <tr>
        <td>${student.name}</td>
        <td>${student.registerNumber}</td>
        <td>${student.department}</td>
        <td>${student.year}</td>
      </tr>
    `).join("");

    res.send(`
      <h1>Student Records</h1>
      <table border="1" cellpadding="10">
        <tr>
          <th>Name</th>
          <th>Register Number</th>
          <th>Department</th>
          <th>Year</th>
        </tr>
        ${rows}
      </table>
      <br><a href="/">Back to Form</a>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch students");
  }
});

// Connect MongoDB and start server
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
}

startServer();
