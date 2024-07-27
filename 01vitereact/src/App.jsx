import { useState } from "react";

function App() {
  let [Counter, setCounter] = useState(15);


  const addvalue = () => {
    setCounter((Counter) => Counter +1 );
    

    

  };

  const Removevalue = () => {
    setCounter(Counter - 1);
  };

  return (
    <>
    <div>
      <h1>chai aur react</h1>
      <h2>Counter value :{Counter}</h2>

      <button onClick={addvalue}>Add value</button>
      <br />
      <button onClick={Removevalue}>Remove value</button>
      </div>
    </>
  );
}

export default App;
