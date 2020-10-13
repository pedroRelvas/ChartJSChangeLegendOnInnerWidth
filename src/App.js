import React, { useEffect, useState } from "react";
import "./styles.css";
import Chart from "chart.js";
import { Paper } from "@material-ui/core";

export default function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const innerWidth = window.innerWidth;
  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    const labels = ["Fase 1", "Fase 2", "Fase 3", "Fase 4", "Fase 5"];
    const ctx = document.getElementById("myChart");
    updateWindowDimensions();
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Prova2",
            data: [2, 2, 3, 4, 5],
            backgroundColor: [
              "#F06292",
              "#9575CD",
              "#64B5F6",
              "#4DB6AC",
              "#FFB74D",
              "#FF8A65"
            ]
          }
        ]
      },
      options: {
        legend: {
          position: width > 768 ? "right" : "bottom"
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }, [innerWidth, width]);

  return (
    <div className="App">
      <Paper className="paper">
        <canvas id="myChart" height="90" width="90"></canvas>
      </Paper>
    </div>
  );
}
