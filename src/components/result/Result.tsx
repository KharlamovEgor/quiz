import styles from "./Result.module.css";
import { Container } from "../container/Container";
import { Heading } from "../heading/Heading";
import classNames from "classnames";

interface ResultProps {
  results: number[];
  texts: Array<Record<number, string>>;
  blocks: string[];
}

export function Result({ results, texts, blocks }: ResultProps) {
  return (
    <Container className={styles.margins}>
      <Heading big>РЕЗУЛЬТАТЫ</Heading>
      {results.map((result, index) => {
        return (
          <div
            key={blocks[index]}
            className={classNames(
              styles.result,
              "animate__animated",
              "animate__fadeIn",
            )}
          >
            <div className={styles.score}>
              <span>
                {result} {result == 3 || result == 4 ? "балла" : "баллов"}
              </span>
              <Heading>{blocks[index].slice(9)}</Heading>
            </div>
            <p>{texts[index][result]}</p>
          </div>
        );
      })}
    </Container>
  );
}
