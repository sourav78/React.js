
function Input(){
    const changeColor = ()=> {
        document.getElementById('nu').style.backgroundColor = document.getElementById('nu').value
    }
    return (
        <div className="container">
            <input id="nu"
            type="email"
            onChange={changeColor}></input>

            <input type="date" name="" id="" />
        </div>
    )
}

export default Input