import { useEffect, useState } from "react";
import "../styles/Dashboard.css";
import DepartmentChart from "./Charts/DepartmentChart";
import PlacementChart from "./Charts/PlacementChart";
import RecentStudents from "./RecentStudents";
import {
  FaUsers,
  FaGraduationCap,
  FaBuilding,
  FaTrophy
} from "react-icons/fa";

import { getStudentStats } from "../services/studentService";

function DashboardCards() {

  const [stats, setStats] = useState({
    totalStudents: 0,
    averageCgpa: 0,
    departments: 0,
    topPerformers: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

 const fetchStats = async () => {
  try {
    const response = await getStudentStats();

    console.log("Dashboard Response:", response.data);

    setStats(response.data);

  } catch (error) {
    console.error("Error fetching dashboard statistics:", error);
  }
};

return (
  
  <div className="container">

    <div className="welcome-section">

      <div className="welcome-text">
        <h1>🎉 Welcome Freshers 2026!</h1>

        <p>
          Manage admissions, academics, attendance,
          and placements from one powerful dashboard.
        </p>
      </div>

      <div className="welcome-badge">
        <h3>🎓 Academic Year</h3>
        <h2>2026–2027</h2>
      </div>

    </div>

    
  
  
  <div className="dashboard">
    <div className="card students-card">
      <div className="card-header">
        <h4>Total Students</h4>
        <FaUsers className="card-icon" />
      </div>
      <h2>{stats.totalStudents}</h2>
      <p>Registered Students</p>
    </div>

    <div className="card cgpa-card">
      <div className="card-header">
        <h4>Average CGPA</h4>
        <FaGraduationCap className="card-icon" />
      </div>
      <h2>{stats.averageCgpa}</h2>
      <p>Academic Performance</p>
    </div>

    <div className="card dept-card">
      <div className="card-header">
        <h4>Departments</h4>
        <FaBuilding className="card-icon" />
      </div>
      <h2>{stats.departments}</h2>
      <p>Available Departments</p>
    </div>

    <div className="card top-card">
      <div className="card-header">
        <h4>Top Performers</h4>
        <FaTrophy className="card-icon" />
      </div>
      <h2>{stats.topPerformers}</h2>
      <p>CGPA ≥ 9.0</p>
    </div>
  </div>
  <div className="charts-container">

    <DepartmentChart />
    <PlacementChart />
    
</div>
<RecentStudents />
  </div>
);
}

export default DashboardCards;