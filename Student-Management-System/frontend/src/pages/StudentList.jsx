import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import StudentTable from "../components/StudentTable";


function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const [departmentFilter, setDepartmentFilter] = useState("");
const [yearFilter, setYearFilter] = useState("");
const [placementFilter, setPlacementFilter] = useState("");

const [currentPage, setCurrentPage] = useState(1);
const studentsPerPage = 5;
  useEffect(() => {
    fetchStudents();
  }, []);

const fetchStudents = async () => {
  try {
    setLoading(true);

await new Promise((resolve) => setTimeout(resolve, 2000));

    const response = await getStudents();
    setStudents(response.data);

  } catch (error) {
    console.error("Error fetching students:", error);
  } finally {
    setLoading(false);
  }
};
   if (loading) {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading students...</p>
    </div>
  );
}

  const filteredStudents = students.filter((student) => {
  const matchesSearch =
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.roll_no.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesDepartment =
    departmentFilter === "" ||
    student.department === departmentFilter;

  const matchesYear =
    yearFilter === "" ||
    String(student.year) === yearFilter;

  const matchesPlacement =
    placementFilter === "" ||
    student.placement_status === placementFilter;
   

  return (
      
    matchesSearch &&
    matchesDepartment &&
    matchesYear &&
    matchesPlacement
  );
});
  const sortedStudents = [...filteredStudents];

switch (sortOption) {
  case "nameAsc":
    sortedStudents.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    break;

  case "nameDesc":
    sortedStudents.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    break;

  case "cgpaHigh":
    sortedStudents.sort((a, b) =>
      b.current_cgpa - a.current_cgpa
    );
    break;

  case "cgpaLow":
    sortedStudents.sort((a, b) =>
      a.current_cgpa - b.current_cgpa
    );
    break;

  default:
    break;
}
const indexOfLastStudent = currentPage * studentsPerPage;
const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

const currentStudents = sortedStudents.slice(
  indexOfFirstStudent,
  indexOfLastStudent
);

const totalPages = Math.ceil(
  sortedStudents.length / studentsPerPage
);
console.log("Sort Option:", sortOption);
 return (
  <div className="container">

    <input
      type="text"
      placeholder="🔍 Search by Name or Roll Number..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <select
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="">Sort By</option>
      <option value="nameAsc">Name (A-Z)</option>
      <option value="nameDesc">Name (Z-A)</option>
      <option value="cgpaHigh">CGPA (High → Low)</option>
      <option value="cgpaLow">CGPA (Low → High)</option>
    </select>

    <select
      value={departmentFilter}
      onChange={(e) => setDepartmentFilter(e.target.value)}
    >
      <option value="">All Departments</option>
      <option value="CSE">CSE</option>
      <option value="Cyber Security">Cyber Security</option>
      <option value="Electrical">Electrical</option>
      <option value="Mechanical">Mechanical</option>
      <option value="AI">AI</option>
      <option value="Computer Science Engineering">
        Computer Science Engineering
      </option>
    </select>

    <select
      value={yearFilter}
      onChange={(e) => setYearFilter(e.target.value)}
    >
      <option value="">All Years</option>
      <option value="1">1st Year</option>
      <option value="2">2nd Year</option>
      <option value="3">3rd Year</option>
      <option value="4">4th Year</option>
    </select>

    <select
      value={placementFilter}
      onChange={(e) => setPlacementFilter(e.target.value)}
    >
      <option value="">All Placement Status</option>
      <option value="Not Eligible">Not Eligible</option>
      <option value="Eligible">Eligible</option>
      <option value="Placed">Placed</option>
    </select>

    {currentStudents.length > 0 ? (
  <StudentTable
    students={currentStudents}
    fetchStudents={fetchStudents}
  />
) : (
  <div className="no-data">
    <h3>📭 No Students Found</h3>
    <p>Try changing your search or filter.</p>
  </div>
)}

    {/* Pagination */}
    <div className="pagination">
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={currentPage === index + 1 ? "active-page" : ""}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>

  </div>
);
}

export default StudentList;