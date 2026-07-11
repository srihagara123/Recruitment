import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

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

function PlacementChart() {

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

      const placement = response.data.placementStats;

      setChartData({
        labels: placement.map(item => item.placement_status),

        datasets: [
          {
            label: "Students",

            data: placement.map(item =>
              Number(item.count)
            ),

            backgroundColor: [
              "#10B981",
              "#3B82F6",
              "#F59E0B"
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

      <h2>Placement Status</h2>

      <div
        style={{
          width: "300px",
          height: "300px"
        }}
      >
        <Doughnut
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

export default PlacementChart;