import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Container.module.css";
import classNames from "classnames";

interface ContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div className={classNames(styles.container, className)} {...props}>
      {children}
    </div>
  );
}
