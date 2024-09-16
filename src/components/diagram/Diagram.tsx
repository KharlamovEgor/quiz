import styles from "./Diagram.module.css";
import Chart from "chart.js/auto";
import classNames from "classnames";
import { useLayoutEffect, useRef } from "react";
interface Props {
  blocks: string[];
  scores: number[];
  colors: string[];
  className?: string;
}
export function Diagram({ blocks, colors, scores, className }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const myChart = new Chart(ref.current!, {
      type: "polarArea",
      options: {
        responsive: true,
        scales: {
          r: {
            max: 9,
            ticks: {
              display: false,
            },
            pointLabels: {
              display: false,
            },
            angleLines: {
              display: true,
              color: "#fff",
              lineWidth: 2,
            },
            grid: {
              color: "#fff",
              lineWidth: 2,
            },
            startAngle: -50,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
      data: {
        labels: blocks.map((b) => b.slice(9)),
        datasets: [
          {
            data: scores,
            borderColor: "#fff",
            backgroundColor: colors,
          },
        ],
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className={classNames(styles.circleContainer, className)}>
      <canvas className={styles.canvas} ref={ref}></canvas>
      <div className={styles.description}>
        {colors.map((color, index) => {
          return (
            <div key={color} className={styles.colorDesc}>
              <div
                className={styles.color}
                style={{ backgroundColor: color }}
              />
              <span> — {blocks[index].slice(9)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
