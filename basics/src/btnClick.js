import "./style.css"

function Click(){
    
    const clickEvent = () => {
        alert("Button clicked")
    }

    // const styles = {
    //     btn_col: {
    //         backgroundColor: "#000",
    //         color: "#fff",
    //         width: "150px",
    //         padding: "10px"
    //     }
    // }

    return (

        <button
            style={{border: "4px solid black"}} // addind inline css
            className="btn_back"  //Adding External css import in line 1
            onClick={clickEvent}
        >Click</button>
    )
}

export default Click