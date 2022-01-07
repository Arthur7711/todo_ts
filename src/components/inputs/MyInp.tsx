import React, { useState } from "react";

interface Props {
  val: string;
  setVal: React.Dispatch<React.SetStateAction<string>>;
  adding: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MyInp: React.FC<Props> = ({ setVal, val, adding }) => {
  return (
    <>
      <input value={val} onChange={adding} />
    </>
  );
};
