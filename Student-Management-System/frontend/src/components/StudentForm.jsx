function StudentForm({
  student,
  handleChange,
  handleSubmit,
  buttonText
}) {
  return (
    
    <div className="form-card">
     <form
  className="student-form"
  onSubmit={handleSubmit}
>

  <div className="form-group">
    <label>Roll Number</label>

    <input
      type="text"
      name="roll_no"
      value={student.roll_no}
      onChange={handleChange}
      placeholder="Enter Roll Number"
    />
  </div>
  <div className="form-group">
  <label>Student Name</label>

  <input
    type="text"
    name="name"
    value={student.name}
    onChange={handleChange}
    placeholder="Enter Student Name"
  />
</div>
<div className="form-group">
  <label>Gender</label>

  <select
    name="gender"
    value={student.gender}
    onChange={handleChange}
  >
    <option value="">Select Gender</option>
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
  </select>
</div>
<div className="form-group">
  <label>Email</label>

  <input
    type="email"
    name="email"
    value={student.email}
    onChange={handleChange}
    placeholder="Enter Email"
  />
</div>
<div className="form-group">
  <label>Phone</label>

  <input
    type="text"
    name="phone"
    value={student.phone}
    onChange={handleChange}
    placeholder="Enter Phone Number"
  />
</div>
<div className="form-group">
  <label>Department</label>

  <input
    type="text"
    name="department"
    value={student.department}
    onChange={handleChange}
    placeholder="Enter Department"
  />
</div>
<div className="form-group">
  <label>Year</label>

  <select
    name="year"
    value={student.year}
    onChange={handleChange}
  >
    <option value="">Select Year</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</div>
<div className="form-group">
  <label>Semester</label>

  <select
    name="semester"
    value={student.semester}
    onChange={handleChange}
  >
    <option value="">Select Semester</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
  </select>
</div>
<div className="form-group">
  <label>Attendance %</label>

  <input
    type="number"
    name="attendance_percentage"
    value={student.attendance_percentage}
    onChange={handleChange}
    placeholder="Attendance %"
  />
</div>

<div className="form-group">
  <label>CGPA</label>

  <input
    type="number"
    name="current_cgpa"
    value={student.current_cgpa}
    onChange={handleChange}
    step="0.1"
    placeholder="CGPA"
  />
</div>
<div className="form-group">
  <label>Admission Type</label>

  <select
    name="admission_type"
    value={student.admission_type}
    onChange={handleChange}
  >
    <option value="">Select Admission Type</option>
    <option value="Scholarship">Scholarship</option>
    <option value="Non Scholarship">Non Scholarship</option>
  </select>
</div>
<div className="form-group">
  <label>Scholarship Slab</label>

  <input
    type="text"
    name="scholarship_slab"
    value={student.scholarship_slab}
    onChange={handleChange}
    placeholder="Scholarship Slab"
  />
</div>
<div className="form-group full-width">
  <label>Placement Status</label>

  <select
    name="placement_status"
    value={student.placement_status}
    onChange={handleChange}
  >
    <option value="">Select Status</option>
    <option>Not Eligible</option>
    <option>Eligible</option>
    <option>Placed</option>
  </select>
</div>
<button
  type="submit"
  className="submit-btn"
>
  {buttonText}
</button>
</form>
    </div>
  );
}

export default StudentForm;