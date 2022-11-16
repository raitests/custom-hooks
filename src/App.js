import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
  async function getData() {
    const response = await fetch("https://react-http-6b4a6.firebaseio.com/", {
      mode: "no-cors",
    });
    const data = await response.json();
    console.log(data);
  }

  getData();

  return (
    <React.Fragment>
      <ForwardCounter />
      <BackwardCounter />
    </React.Fragment>
  );
}

export default App;
