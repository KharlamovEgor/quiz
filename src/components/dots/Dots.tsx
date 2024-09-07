import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Dots.module.css";
import classNames from "classnames";

interface DotsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  current: number;
  blocks: string[];
}

export function Dots({ className, current, blocks, ...props }: DotsProps) {
  return (
    <div className={classNames(styles.dots, className)} {...props}>
      {blocks.map((text, index) => (
        <div
          className={classNames(styles.dot, {
            [styles.current]: index == current - 1,
          })}
          key={text}
        >
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
