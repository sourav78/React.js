import React from 'react'
import TopNetflixSeries, {netflixSeries} from "./TopNetflixSeries";

function NetflixSeries() {

    function setCards(ele){
        return (<TopNetflixSeries setDetails = {ele}/>)
    }

    // let allCard = []

    // netflixSeries.map((ele, ind) => {
    //     allCard.push(<TopNetflixSeries setDetails = {ele}/>)
    // })
    

    return (
        <>  
            <h1 className=" bg-slate-400 text-center p-6 font-bold text-4xl tracking-wider text-gray-300">TOP NETFLIX SERIES</h1>
            
            <div className=' bg-slate-200 min-h-screen pt-14'>
                <div className="series-cont w-11/12 m-auto flex flex-wrap justify-around gap-11">      
                    {netflixSeries.map(setCards)}
                </div>
            </div>
        </>
    )
}

export default NetflixSeries