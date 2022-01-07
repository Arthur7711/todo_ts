import { useState, useMemo } from "react";
import styles from "./App.module.css";
import { MyInp } from "./components/inputs/MyInp";
import Text from "./components/inputs/Text";

const App: React.FC = () => {
  const [val, setVal] = useState("");
  const [wearablesList, setWearablesList] = useState<string[]>([]);
  const [clicked, setClicked] = useState(0);

  function adding(e: React.ChangeEvent<HTMLInputElement>) {
    setVal(e.target.value);
  }
  function newElems() {
    setWearablesList([...wearablesList, val]);
    setVal("");
    setClicked(clicked + 1);
  }

  // const addNew = useMemo(() => {
  //   return newElems();
  // }, [clicked]);

  return (
    <div className={styles.app}>
      <MyInp val={val} adding={adding} />
      <button onClick={newElems}>add</button>
      {wearablesList &&
        wearablesList.map((el: string, i: number) => (
          <Text key={i} element={el} />
        ))}
    </div>
  );
};

export default App;
