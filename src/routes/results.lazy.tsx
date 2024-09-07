import { createLazyFileRoute } from "@tanstack/react-router";
import { Result } from "../components";
import { data } from "../data";
import { useContext } from "react";
import { context } from "../context";

export const Route = createLazyFileRoute("/results")({
  component: () => {
    const { scores } = useContext(context);
    const blocks = data.blocks;
    return (
      <main className="main">
        <Result
          blocks={blocks}
          texts={data.results}
          results={scores.map((score) => score.reduce((a, b) => a + b))}
        />
      </main>
    );
  },
});

