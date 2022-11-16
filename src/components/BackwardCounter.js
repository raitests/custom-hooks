import Card from "./Card";
import useCounter from "./hooks/counter-hook";

const BackwardCounter = () => {
  const count = useCounter(false);

  return <Card>{count}</Card>;
};

export default BackwardCounter;
