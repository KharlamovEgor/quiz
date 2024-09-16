import styles from "./Diagram.module.css";
import Chart from "chart.js/auto";
import classNames from "classnames";
import { useLayoutEffect, useRef } from "react";
interface Props {
  blocks: string[];
  scores: number[];
  className?: string;
}
export function Diagram({ blocks, scores, className }: Props) {
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
            backgroundColor: [
              "#DE9292",
              "#C692DE",
              "#929EDE",
              "#AADE92",
              "#DECE92",
            ],
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
      {
        //<img src="/block-images/УВЕРЕННОСТЬ.png" alt="" />
        //<img src="/block-images/КОММУНИКАЯ.png" alt="" />
        //<img src="/block-images/ГОЛОС.png" alt="" />
        //<img src="/block-images/СЦЕНА.png" alt="" />
        //<img src="/block-images/СЛОВА.png" alt="" />
      }
      <canvas className={styles.canvas} ref={ref}></canvas>
    </div>
  );
}
