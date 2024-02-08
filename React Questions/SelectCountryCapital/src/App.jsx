import { useEffect, useState } from 'react'
import datas from "./Data"
import _ from "lodash"
import './App.css'

function App() {

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
            console.log(filteredData);
            setAllData(filteredData)
            setSelectedData([])

            
        }else{
            console.log("You selected the wrong country");
            setSelectedData([])
        }
    }, [trigger])

    const handleClick = (e) => {
        const value = e.target.getAttribute("data-value")

        const selectedValues = selectedData.concat(value)
        setSelectedData(selectedValues)

        if (selectedValues.length === 2) {


            if (Object.keys(datas).includes(selectedValues[0])) {
                if (selectedValues[1] === datas[selectedValues[0]]) {
                    setCheckValue(true)
                } else {
                    setCheckValue(false)
                }
            } else {
                if (selectedValues[0] === datas[selectedValues[1]]) {
                    setCheckValue(true)
                } else {
                    setCheckValue(false)
                }
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
                    >
                        {data}
                    </button>
                ))}
            </div>
        </>
    )
}

export default App
