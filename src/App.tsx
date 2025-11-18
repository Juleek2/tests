import { useEffect, useState } from "react";
import "./App.css";
import type { Data } from "./types";
import { Test } from "./components/test";

function App() {
  const [data, setData] = useState<Data>();

  useEffect(() => {
    fetch("/data/КлимактерическийСиндром.json")
      .then((d) => d.json())
      .then((d) => setData(d));
  }, []);

  if (!data) {
    return null;
  }

  return <Test data={data} />;
}

export default App;
