import { useState, type FC } from "react";
import type { Data } from "../types";

export const Test: FC<{ data: Data }> = ({ data }) => {
  const [answers, setAnswers] = useState<number[]>([]);
  return (
    <>
      <table>
        <thead>
          <tr>
            {data.headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.questions.map((d, i) => (
            <tr key={d}>
              <td>{i}</td>
              <td>{d}</td>
              {data.headers.slice(2).map((_, hi) => (
                <td
                  className={answers[i] === hi ? "active" : ""}
                  onClick={() => {
                    answers[i] = hi;
                    setAnswers([...answers]);
                  }}
                >
                  {hi}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="result">
        <h4>Всего баллов: {answers.reduce((p, c) => p + (c || 0), 0)}</h4>
      </div>
    </>
  );
};
