import { createContext, useEffect, useState } from "react";

export const context = createContext<{
  scores: Array<number[]>;
  setScores: React.Dispatch<React.SetStateAction<Array<number[]>>>;
}>({
  scores: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  setScores: () => {},
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const local = localStorage.getItem("scores");
  const [scores, setScores] = useState(
    local
      ? JSON.parse(local)
      : [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
  );

  useEffect(() => {
    const storedScores = localStorage.getItem("scores");
    if (storedScores) {
      setScores(JSON.parse(storedScores));
    }
    console.log(storedScores);
  }, []);

  useEffect(() => {
    localStorage.setItem("scores", JSON.stringify(scores));
  }, [scores]);

  return (
    <context.Provider
      value={{
        scores,
        setScores,
      }}
    >
      {children}
    </context.Provider>
  );
}
