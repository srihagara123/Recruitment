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