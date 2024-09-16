import styles from "./Result.module.css";
import { Container } from "../container/Container";
import { Heading } from "../heading/Heading";
import classNames from "classnames";
import { Diagram } from "../diagram/Diagram";
import { Button } from "../button/Button";

interface ResultProps {
  results: number[];
  texts: Array<Record<number, string>>;
  blocks: string[];
}

export function Result({ results, texts, blocks }: ResultProps) {
  const colors = ["#DE9292", "#C692DE", "#929EDE", "#AADE92", "#DECE92"];
  const images = [
    "/blocks/1.png",
    "/blocks/2.png",
    "/blocks/3.png",
    "/blocks/4.png",
    "/blocks/5.png",
  ];

  return (
    <Container className={styles.margins}>
      <Heading center big>
        РЕЗУЛЬТАТЫ
      </Heading>
      <Diagram className={styles.diagram} blocks={blocks} scores={results} />
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
              <Heading style={{ color: colors[index] }}>
                {blocks[index].slice(9)}
              </Heading>
            </div>
            <img src={images[index]} />
            <p>{texts[index][result]}</p>
          </div>
        );
      })}
      <div className={styles.end}>
        <p>
          Поздравляем с успешным завершением теста! Теперь{" "}
          <b className={styles.warning}>приглашаю вас в наш телеграм-канал,</b>{" "}
          где вы сможете погрузиться в мир ораторского мастерства. Внутри вас
          ждут:
        </p>
        <ul>
          <li>Эксклюзивные обучающие видеоуроки</li>
          <li>
            Моя авторская книга с практическими заданиями для
            самосовершенствования
          </li>
          <li>
            Полная информация о предстоящем курсе Присоединяйтесь, чтобы сделать
            каждый шаг на пути к мастерству еще увереннее и ярче
          </li>
        </ul>
        <a href="https://t.me/smitkurs_bot">
          <Button>Присоединиться</Button>
        </a>
      </div>
    </Container>
  );
}
