interface Props {
  element: string;
}

const Text: React.FC<Props> = ({ element }) => {
  const bgColor: string = `rgb(${Math.round(Math.random() * 255)},${Math.round(
    Math.random() * 255
  )},${Math.round(Math.random() * 255)})`;

  return <p style={{ backgroundColor: bgColor }}>{element}</p>;
};

export default Text;
