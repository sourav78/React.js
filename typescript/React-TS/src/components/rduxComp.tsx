import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue, initialStateType } from '../redux'

const RduxComp = () => {

    const count = useSelector((state: initialStateType) => state.count)

    const dispatch = useDispatch()

  return (
    <div>
        <div className="">
            <h1>Radux comp</h1>
            <h1>Counter Sum {count}</h1>
            <div className="">
              <input 
                onChange={(e) => dispatch(incrementByValue(Number(e.target.value)))}
                type="number" />
            </div>
            <button 
              onClick={() => dispatch(increment())}
            >INC</button>
            <button 
              onClick={() => dispatch(decrement())}
            >DEC</button>
        </div>
    </div>
  )
}

export default RduxComp