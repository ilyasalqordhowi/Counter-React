import React from "react";
import Counter from "./componen/Counter";
function App() {
  let [num, setNum] = React.useState(0);
  function minus() {
    setNum(num - 1);
  }
  function plus() {
    setNum(num + 1);
  }
  return <Counter minus={minus} plus={plus} num={num} />;
}

export default App;
