import { useEffect, useState } from "react";
import "./App.css";
import type { Data } from "./types";
import { Test } from "./components/test";

const tests = [
  "ДефицитДГЭА.json",
  "ПризнакиСтарения.json",
  "КлимактерическийСиндром.json",
  "ДефицитЖелеза.json",
  "ДефицитГормонаСна.json",
  "СостояниеЩитовиднойЖелезы.json",
  "ДефицитМагния.json",
  "ДефицитПрогестерона.json",
  "СахарныйДиабед.json",
  "ПредстательнаяЖелеза.json",
];

function App() {
  const [data, setData] = useState<Data>();
  const [active, setActive] = useState<string>();

  useEffect(() => {
    if (!active) {
      setData(undefined);
      return;
    }
    fetch(`/Juleer2.github.io/data/${active}`)
      .then((d) => d.json())
      .then((d) => setData(d));
  }, [active]);

  if (!data) {
    return (
      <div className="list">
        {tests.map((t) => (
          <a href="javascript:;" key={t} onClick={() => setActive(t)}>
            {t}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="actions">
        <button onClick={() => setActive(undefined)}>Назад</button>
      </div>
      <Test data={data} />
    </div>
  );
}

export default App;
