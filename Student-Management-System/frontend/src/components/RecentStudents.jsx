import { useEffect, useState } from "react";
import axios from "axios";

function RecentStudents() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchRecentStudents();
  }, []);

  const fetchRecentStudents = async () => {

    try {

     const response = await axios.get(
  "https://recruitment-4.onrender.com/api/students/recent"
);

      setStudents(response.data);

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="recent-card">

      <h2>Recent Admissions</h2>

      <table>

        <thead>

          <tr>

            <th>Roll No</th>

            <th>Name</th>

            <th>Department</th>

          </tr>

        </thead>

        <tbody>

          {students.map(student => (

            <tr key={student.id}>

              <td>{student.roll_no}</td>

              <td>{student.name}</td>

              <td>{student.department}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default RecentStudents;