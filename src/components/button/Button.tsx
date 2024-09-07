import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  light?: boolean;
  large?: boolean;
}

export function Button({
  children,
  light,
  large,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.light]: light,
        [styles.large]: large,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
