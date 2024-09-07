import { useState } from "react";
import { data } from "./data";
import { Question, Dots } from "./components";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = data.questions;
  const blocks = data.blocks;

  const nextQuestion = () =>
    setCurrentQuestion((prev) =>
      prev < questions.length - 1 ? prev + 1 : prev,
    );

  const prevQuestion = () =>
    setCurrentQuestion((prev) => (prev > 0 ? prev - 1 : prev));

  return (
    <main className="main">
      <Dots blocks={blocks} current={questions[currentQuestion].block!} />
      <Question
        data={questions[currentQuestion]}
        currentQuestion={currentQuestion}
        nextQuestion={nextQuestion}
        prevQuestion={prevQuestion}
      />
    </main>
  );
}
