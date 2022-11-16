import useCounter from "./hooks/counter-hook";

import Card from "./Card";

const ForwardCounter = () => {
  const count = useCounter();

  return <Card>{count}</Card>;
};

export default ForwardCounter;
