import { useState } from "react";
import Box from "./components/Box";

function App() {

  const [state, setState] = useState<string>('')

  console.log(state);
  

  return (
    <>
      <div className="">
        <Box lable="Search" value={state} onChange={setState}/>
      </div>
    </>
  );
}

export default App;
