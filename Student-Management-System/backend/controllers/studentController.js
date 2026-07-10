const pool = require("../config/db");

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM students ORDER BY id ASC"
    );

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching students"
    });
  }
};
// Get student by ID
const getStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM students WHERE id = $1",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(result.rows[0]);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching student"
    });
  }
};
  // Add new student
const addStudent = async (req, res) => {
  try {
    const {
      roll_no,
      name,
      gender,
      email,
      phone,
      department,
      year,
      semester,
      attendance_percentage,
      current_cgpa,
      admission_type,
      scholarship_slab,
      placement_status
    } = req.body;

    const result = await pool.query(
      `INSERT INTO students
      (
        roll_no,
        name,
        gender,
        email,
        phone,
        department,
        year,
        semester,
        attendance_percentage,
        current_cgpa,
        admission_type,
        scholarship_slab,
        placement_status
      )
      VALUES
      (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13
      )
      RETURNING *`,
      [
        roll_no,
        name,
        gender,
        email,
        phone,
        department,
        year,
        semester,
        attendance_percentage,
        current_cgpa,
        admission_type,
        scholarship_slab,
        placement_status
      ]
    );

    res.status(201).json({
      message: "Student Added Successfully",
      student: result.rows[0]
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error adding student"
    });
  }
};
// Update student
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      roll_no,
      name,
      gender,
      email,
      phone,
      department,
      year,
      semester,
      attendance_percentage,
      current_cgpa,
      admission_type,
      scholarship_slab,
      placement_status
    } = req.body;

    const result = await pool.query(
      `UPDATE students
       SET
         roll_no = $1,
         name = $2,
         gender = $3,
         email = $4,
         phone = $5,
         department = $6,
         year = $7,
         semester = $8,
         attendance_percentage = $9,
         current_cgpa = $10,
         admission_type = $11,
         scholarship_slab = $12,
         placement_status = $13
       WHERE id = $14
       RETURNING *`,
      [
        roll_no,
        name,
        gender,
        email,
        phone,
        department,
        year,
        semester,
        attendance_percentage,
        current_cgpa,
        admission_type,
        scholarship_slab,
        placement_status,
        id
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student Updated Successfully",
      student: result.rows[0]
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error updating student"
    });
  }
};
// Delete student
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM students WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student Deleted Successfully",
      student: result.rows[0]
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error deleting student"
    });
  }
};
// Get dashboard statistics
const getStudentStats = async (req, res) => {
  try {
    const totalStudentsQuery = await pool.query(
      "SELECT COUNT(*) FROM students"
    );

    const averageCgpaQuery = await pool.query(
      "SELECT ROUND(AVG(current_cgpa), 2) AS average_cgpa FROM students"
    );

    const departmentsQuery = await pool.query(
      "SELECT COUNT(DISTINCT department) FROM students"
    );

    const topPerformersQuery = await pool.query(
      "SELECT COUNT(*) FROM students WHERE current_cgpa >= 9.0"
    );

    res.status(200).json({
      totalStudents: Number(totalStudentsQuery.rows[0].count),
      averageCgpa: Number(averageCgpaQuery.rows[0].average_cgpa),
      departments: Number(departmentsQuery.rows[0].count),
      topPerformers: Number(topPerformersQuery.rows[0].count)
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Error fetching dashboard statistics"
    });
  }
};
  // Get chart data
const getChartData = async (req, res) => {
  try {

    const departmentQuery = await pool.query(`
      SELECT department, COUNT(*) AS count
      FROM students
      GROUP BY department
      ORDER BY department;
    `);

    const placementQuery = await pool.query(`
      SELECT placement_status, COUNT(*) AS count
      FROM students
      GROUP BY placement_status
      ORDER BY placement_status;
    `);

    res.status(200).json({
      departmentStats: departmentQuery.rows,
      placementStats: placementQuery.rows
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error fetching chart data"
    });

  }
};
// Get Recent Students
const getRecentStudents = async (req, res) => {
  try {

    const result = await pool.query(`
      SELECT id, roll_no, name, department
      FROM students
      ORDER BY id DESC
      LIMIT 5
    `);

    res.status(200).json(result.rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Error fetching recent students"
    });

  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
  getStudentStats,
  getChartData,
  getRecentStudents
};