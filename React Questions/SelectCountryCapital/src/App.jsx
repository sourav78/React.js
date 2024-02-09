import { useEffect, useState } from 'react'
import datas from "./Data"
import _ from "lodash"
import './App.css'

function App() {

    const [borderColor, setBorderColor] = useState("#1b1bfe")


    const [allData, setAllData] = useState([])
    const [selectedData, setSelectedData] = useState([])
    const [checkValue, setCheckValue] = useState(false)
    const [trigger, setTrigger] = useState(false)

    useEffect(() => {
        const data = Object.entries(datas).flat(2)
        const suffleData = _.shuffle(data)
        setAllData(suffleData)
    }, [])

    useEffect(() => {
        if(checkValue){
            let filteredData = allData.filter( item => !selectedData.includes(item))
            setBorderColor("#07ef16")
            setTimeout(() => {
                setAllData(filteredData)
                setSelectedData([])
                setBorderColor("#1b1bfe")
            }, 1000);
        }else{
            console.log("You selected the wrong country");
            setBorderColor("red")
            setTimeout(() => {
                setSelectedData([])
                setBorderColor("#1b1bfe")
            }, 1000);
        }
    }, [trigger])

    const handleClick = (e) => {
        const value = e.target.getAttribute("data-value")

        

        const selectedValues = selectedData.concat(value)
        setSelectedData(selectedValues)

        if (selectedValues.length === 2) {

            if (Object.keys(datas).includes(selectedValues[0])) {
                selectedValues[1] === datas[selectedValues[0]] ? setCheckValue(true) : setCheckValue(false)
            } else {
                selectedValues[0] === datas[selectedValues[1]] ? setCheckValue(true) : setCheckValue(false)
            }

            setTrigger(prev => !prev)
        }
    }

    if(allData.length === 0){
        return (
            <h2 style={{textAlign: 'center'}}>Congratulation</h2>
        )
    }

    return (
        <>
            <div className='cont'>
                {allData.map((data, ind) => (
                    <button
                        key={ind}
                        className='btns'
                        onClick={handleClick}
                        data-value={data}
                        style={{borderColor: `${selectedData.includes(data) ? borderColor : ''}`}}
                    >
                        {data}
                    </button>
                ))}
            </div>
        </>
    )
}

export default App
