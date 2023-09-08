import "./style.css"
import NewComp from "./newComp"
import { useState } from "react"

function Click({setShow}){
    const [display, setDisplay] = useState(false);
    let count = 0
    const clickEvent = () => {

        if(count == 0){
            setDisplay(true)
            setShow(false)
            count = 1
        }else{
            setDisplay(false)
            setShow(true)
            count = 0
        }
        console.log(count);
    }
    return (
        <>
            <button
                style={{border: "4px solid black"}} // addind inline css
                className="btn_back"  //Adding External css import in line 1
                onClick={clickEvent}
            >Click</button>
            {display && <NewComp/>}
        </>        
    )
}

export default Click