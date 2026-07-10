import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import {
  getStudentById,
  updateStudent
} from "../services/studentService";
import "../styles/AddStudent.css";

function EditStudent() {

  const { id } = useParams();

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

  useEffect(() => {

  const fetchStudent = async () => {

    try {

      const response = await getStudentById(id);

      setStudent(response.data);

    } catch (error) {

      console.error(error);

      alert("Failed to Load Student");

    }

  };

  fetchStudent();

}, [id]);
const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    await updateStudent(id, {
      ...student,
      year: Number(student.year),
      semester: Number(student.semester),
      attendance_percentage: Number(student.attendance_percentage),
      current_cgpa: Number(student.current_cgpa)
    });

   
toast.success("Student Updated Successfully!");
 setTimeout(() => {
      navigate("/students");
    }, 1000);

  } catch (error) {

    console.error(error);

    toast.error("Failed to Update Student");
  }

};
 

  return (
    <div className="container">

      <h1 className="page-title">
        Edit Student
      </h1>

      <StudentForm
        student={student}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Update Student"
      />

    </div>
  );
}

export default EditStudent;