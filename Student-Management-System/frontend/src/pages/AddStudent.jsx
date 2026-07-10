import { useState } from "react";
import { toast } from "react-toastify";
import { addStudent } from "../services/studentService";
import StudentForm from "../components/StudentForm";
import "../styles/AddStudent.css";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    roll_no: "",
    name: "",
    gender: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    semester: "",
    attendance_percentage: "",
    current_cgpa: "",
    admission_type: "",
    scholarship_slab: "",
    placement_status: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addStudent({
        ...student,
        year: Number(student.year),
        semester: Number(student.semester),
        attendance_percentage: Number(student.attendance_percentage),
        current_cgpa: Number(student.current_cgpa)
      });
toast.success("Student Added Successfully!");

// Clear the form
setStudent({
  roll_no: "",
  name: "",
  gender: "",
  email: "",
  phone: "",
  department: "",
  year: "",
  semester: "",
  attendance_percentage: "",
  current_cgpa: "",
  admission_type: "",
  scholarship_slab: "",
  placement_status: ""
});

// Go to Student List after 1.5 seconds
setTimeout(() => {
  navigate("/students");
}, 1500);

    } catch (error) {
      console.error(error);
      toast.error("Failed to Add Student");
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">Add New Student</h1>

      <StudentForm
        pageTitle="Add New Student"
        student={student}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Add Student"
      />
    </div>
  );
}

export default AddStudent;