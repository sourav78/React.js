import Click  from "./btnClick";
import Input from "./input";
import {useState} from "react";

function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            
            {
                show &&
                <>
                <h1>Hello World | Sourav</h1>
                <h2>Today I learn React!</h2>
                <h3>DOM</h3>
                </>
            }
            <Click setShow={setShow}/>
            <Input />
        </div>
    );
}

export default App;