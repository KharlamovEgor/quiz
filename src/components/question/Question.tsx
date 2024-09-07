import styles from "./Question.module.css";
import classNames from "classnames";
import { Heading } from "../heading/Heading";
import { useContext, useState } from "react";
import { context } from "../../context";
import { Button } from "../button/Button";
import { Container } from "../container/Container";
import { redirect, Link } from "@tanstack/react-router";

interface QuestionProps {
  nextQuestion: () => void;
  prevQuestion: () => void;
  data: {
    question: string;
    answers: string[];
    block: number;
  };
  currentQuestion: number;
}

export function Question({
  nextQuestion,
  prevQuestion,
  currentQuestion,
  data: { question, answers, block },
}: QuestionProps) {
  const [answer, setAnswer] = useState<number | null>(null);
  const { setScores } = useContext(context);

  return (
    <Container>
      <Heading center className={classNames(styles.heading)}>
        {question}
      </Heading>
      <form
        className={classNames(styles.form, {
          [styles.images]: answers.every((text) => text.startsWith("/")),
        })}
      >
        {answers.map((text, index) => (
          <div
            className={classNames(
              styles.answer,
              "animate__animated",
              "animate__fadeIn",
            )}
            key={text}
          >
            <input
              type="radio"
              id={text}
              name="answer"
              checked={index == answer}
              onChange={() => {
                setAnswer(index);
                setScores((prev) => {
                  const copy = [...prev];
                  copy[block - 1][currentQuestion - (block - 1) * 3] =
                    3 - index;
                  return copy;
                });
              }}
            />
            <label htmlFor={text}>
              {text.startsWith("/") ? <img src={text} /> : text}
            </label>
          </div>
        ))}
      </form>
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            prevQuestion();
            setAnswer(null);
          }}
        >
          Назад
        </Button>
        {currentQuestion == 14 ? (
          <Link to="/form">
            <Button>Далее</Button>
          </Link>
        ) : (
          <Button
            light
            onClick={() => {
              if (answer == null) return;
              nextQuestion();
              setAnswer(null);
            }}
          >
            Далее
          </Button>
        )}
      </div>
    </Container>
  );
}
