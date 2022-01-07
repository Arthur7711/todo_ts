import React from "react";

interface Props {
  val: string;
  adding: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MyInp: React.FC<Props> = ({ val, adding }) => {
  return <input value={val} onChange={adding} />;
};
