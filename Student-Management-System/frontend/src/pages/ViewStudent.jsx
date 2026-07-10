import "../styles/ViewStudent.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById } from "../services/studentService";

function ViewStudent() {
    

  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {

      const response = await getStudentById(id);

      setStudent(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  if (!student) {
    return <h2>Loading...</h2>;
  }

 return (
  <div className="container">
    <h1 className="page-title">Student Details</h1>

    <div className="form-card">

      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Roll No:</strong> {student.roll_no}</p>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>Department:</strong> {student.department}</p>
<p><strong>Year:</strong> {student.year}</p>
<p><strong>Semester:</strong> {student.semester}</p>
<p><strong>Attendance:</strong> {student.attendance_percentage}%</p>
<p><strong>CGPA:</strong> {student.current_cgpa}</p>
<p><strong>Admission Type:</strong> {student.admission_type}</p>
<p><strong>Scholarship Slab:</strong> {student.scholarship_slab}</p>
<p><strong>Placement Status:</strong> {student.placement_status}</p>
    </div>
  </div>
);
}

export default ViewStudent;
