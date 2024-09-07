import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Heading.module.css";
import classNames from "classnames";

interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  center?: boolean;
  big?: boolean;
}

export function Heading({
  children,
  className,
  center,
  big,
  ...props
}: HeadingProps) {
  return (
    <h3
      className={classNames(styles.heading, className, {
        [styles.center]: center,
        [styles.big]: big,
      })}
      {...props}
    >
      {children}
    </h3>
  );
}
