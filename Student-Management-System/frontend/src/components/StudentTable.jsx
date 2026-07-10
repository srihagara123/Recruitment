import "../styles/Table.css";
import { deleteStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function StudentTable({
  students,
  fetchStudents
}) {
  const navigate = useNavigate();

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await deleteStudent(id);

      toast.success("Student Deleted Successfully!");

      fetchStudents();

    } catch (error) {
      console.error(error);

      toast.error("Failed to Delete Student");
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Department</th>
            <th>CGPA</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.roll_no}</td>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.current_cgpa}</td>

              <td>
                <button
                  className="btn-view"
                  onClick={() => navigate(`/view-student/${student.id}`)}
                >
                  View
                </button>

                <button
                  className="btn-edit"
                  onClick={() => navigate(`/edit-student/${student.id}`)}
                >
                  Edit
                </button>

                <button
                  className="btn-delete"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;