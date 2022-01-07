import { useState } from "react";
import styles from "./App.module.css";
import { MyInp } from "./components/inputs/MyInp";
import Text from "./components/inputs/Text";

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
      <MyInp val={val} setVal={setVal} adding={adding} />
      <button onClick={newElems}>add</button>
      {wearablesList &&
        wearablesList.map((el: string, i: number) => <Text key={i} element={el}/>)}
    </div>
  );
};

export default App;
