const express = require("express");

const router = express.Router();

const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
  getStudentStats,
  getChartData,
  getRecentStudents
} = require("../controllers/studentController");

// GET all students
router.get("/", getAllStudents);


// GET student statistics
router.get("/stats", getStudentStats); 

router.get("/chart-data", getChartData);

// GET recent students
router.get("/recent", getRecentStudents);

// GET student by ID
router.get("/:id", getStudentById);

// POST new student
router.post("/", addStudent);

// PUT update student
router.put("/:id", updateStudent);

// DELETE student
router.delete("/:id", deleteStudent); 
   

module.exports = router;