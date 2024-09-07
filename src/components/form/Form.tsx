import styles from "./Form.module.css";
import { Heading } from "../heading/Heading";
import { Button } from "../button/Button";
import classNames from "classnames";
import { Container } from "../container/Container";
import { Link } from "@tanstack/react-router";

export function Form() {
  return (
    <Container>
      <Heading
        center
        className={classNames(
          styles.heading,
          "animate__animated",
          "animate__fadeIn",
        )}
      >
        заполните форму, Чтобы узнать результат
      </Heading>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={styles.form}
        method="POST"
        action="https://api.sheetmonkey.io/form/7DibgSmv6L5dtGf3Qyh6P2"
      >
        <input
          className={classNames(
            styles.input,
            "animate__animated",
            "animate__fadeIn",
          )}
          name="Name"
          type="text"
          placeholder="Имя"
          required
        />
        <input
          className={classNames(
            styles.input,
            "animate__animated",
            "animate__fadeIn",
          )}
          name="Email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className={classNames(
            styles.input,
            "animate__animated",
            "animate__fadeIn",
          )}
          name="Phone"
          type="tel"
          placeholder="Телефон"
          required
        />
        <Link to="/results">
          <Button
            large
            //type="submit"
            className={classNames("animate__animated", "animate__fadeIn")}
          >
            Узнать результат{" "}
          </Button>
        </Link>
      </form>
    </Container>
  );
}
