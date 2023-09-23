import React, { useEffect, useState } from 'react'
import Shoes from './Components/Shoes/Shoes'
import Watches from './Components/watches/watches'
import NavBar from './Components/Nav bar/NavBar'

function App() {

  // const [allData, setAllData] = useState([])

  // useEffect(()=>{
  //     fetch("https://sourav78.github.io/Product-api/products/watches.json")
  //     .then(res => res.json())
  //     .then(data => {
  //       setAllData(data.watches)
  //     })
  // })

  return (
    <>
      {/* <Shoes/> */}

      {/* <div className=" flex flex-wrap justify-around gap-6">
        {
          allData.map((ele)=>{
            return <Watches ele={ele}/>
          })
        }
      </div> */}

      <NavBar/>

    </>
  )
}

export default App
