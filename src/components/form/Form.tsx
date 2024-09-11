import styles from "./Form.module.css";
import { Heading } from "../heading/Heading";
import { Button } from "../button/Button";
import classNames from "classnames";
import { Container } from "../container/Container";
import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";

interface Input {
  name: string;
  email: string;
  phone: string;
}

export function Form() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Input>();
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
        onSubmit={handleSubmit(async (data) => {
          const response = await fetch(
            "https://api.sheetmonkey.io/form/cqoSXkqDj2ibESQtewKBfS",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            },
          );

          if (response.ok) {
            navigate({
              to: "/results",
            });
          }
        })}
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
          type="text"
          placeholder="Имя"
          required
          {...register("name")}
        />
        <input
          className={classNames(
            styles.input,
            "animate__animated",
            "animate__fadeIn",
          )}
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />
        <input
          className={classNames(
            styles.input,
            "animate__animated",
            "animate__fadeIn",
          )}
          type="tel"
          placeholder="Телефон"
          required
          {...register("phone")}
        />
        <Button
          large
          type="submit"
          className={classNames("animate__animated", "animate__fadeIn")}
        >
          Узнать результат{" "}
        </Button>
      </form>
    </Container>
  );
}
