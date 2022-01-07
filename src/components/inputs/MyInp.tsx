import React, { useState } from "react";

interface Props {
  
}

export const MyInp: React.FC<Props> = (props) => {
  const [val, setVal] = useState("");
  function adding(e: React.ChangeEvent<HTMLInputElement>) {
    setVal(e.target.value);
  }

  return (
    <>
      <input value={val} onChange={adding} />
    </>
  );
};
