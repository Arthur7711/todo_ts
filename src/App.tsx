import { useState } from "react";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [val, setVal] = useState("");
  const [wearablesList, setWearablesList] = useState<string[]>([]);
  function adding(e: React.ChangeEvent<HTMLInputElement>) {
    setVal(e.target.value);
  }

  function newElems() {
    setWearablesList([...wearablesList, val]);
    setVal("");
  }

  return (
    <div className={styles.app}>
      <input value={val} onChange={adding} />
      <button onClick={newElems}>add</button>
      {wearablesList &&
        wearablesList.map((el: string, i: number) => <p key={i}>{el}</p>)}
    </div>
  );
};

export default App;
