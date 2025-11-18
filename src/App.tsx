import { useState } from "react";
import "./App.css";
import data from "./data.json";

function App() {
  const [answers, setAnswers] = useState<number[]>([]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Симптомы</th>
            <th>нет</th>
            <th>Редко/ Слабо</th>
            <th>Периоди- чески/ Терпимо</th>
            <th>Часто / Умеренно</th>
            <th>Постоян- но/ Выражен- но</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr>
              <td>{i}</td>
              <td>{d}</td>
              <td
                className={answers[i] === 0 ? "active" : ""}
                onClick={() => {
                  answers[i] = 0;
                  setAnswers([...answers]);
                }}
              >
                0
              </td>
              <td
                className={answers[i] === 1 ? "active" : ""}
                onClick={() => {
                  answers[i] = 1;
                  setAnswers([...answers]);
                }}
              >
                1
              </td>
              <td
                className={answers[i] === 2 ? "active" : ""}
                onClick={() => {
                  answers[i] = 2;
                  setAnswers([...answers]);
                }}
              >
                2
              </td>
              <td
                className={answers[i] === 3 ? "active" : ""}
                onClick={() => {
                  answers[i] = 3;
                  setAnswers([...answers]);
                }}
              >
                3
              </td>
              <td
                className={answers[i] === 4 ? "active" : ""}
                onClick={() => {
                  answers[i] = 4;
                  setAnswers([...answers]);
                }}
              >
                4
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="result">
        <h4>Всего баллов: {answers.reduce((p, c) => p + (c || 0), 0)}</h4>
      </div>
    </>
  );
}

export default App;
