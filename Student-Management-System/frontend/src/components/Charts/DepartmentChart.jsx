import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import axios from "axios";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function DepartmentChart() {

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    fetchChartData();
  }, []);

  const fetchChartData = async () => {

    try {

      const response = await axios.get(
        "https://recruitment-4.onrender.com/api/students/chart-data"
      );

      const departments = response.data.departmentStats;

      setChartData({
        labels: departments.map(item => item.department),

        datasets: [
          {
            label: "Students",

            data: departments.map(item =>
              Number(item.count)
            ),

            backgroundColor: [
              "#4F46E5",
              "#06B6D4",
              "#10B981",
              "#F59E0B",
              "#EF4444",
              "#8B5CF6",
              "#14B8A6",
              "#EC4899"
            ],

            borderWidth: 2
          }
        ]
      });

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="chart-card">

      <h2>Students by Department</h2>

    <div
  style={{
    width: "350px",
    height: "350px",
    margin: "0 auto"
  }}
>
  <Pie
    data={chartData}
    options={{
      responsive: true,
      maintainAspectRatio: false
    }}
  />
</div>

    </div>

  );

}

export default DepartmentChart;