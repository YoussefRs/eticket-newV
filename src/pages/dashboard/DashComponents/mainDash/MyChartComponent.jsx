import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function MyChartComponent() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");
      if (myChartRef) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(myChartRef, {
          type: "doughnut",
          data: {
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                data: [30, 45, 50],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                ],
              },
            ],
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} style={{ width: 300, height: 300 }} />
    </div>
  );
}

export default MyChartComponent;
