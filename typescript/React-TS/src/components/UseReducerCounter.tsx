import { useReducer } from "react"

type StateType = {
  count: number,
  step: number
}

type ActionType = {
  type: "INC" | "DEC" | "PAY",
  payload: number
}

const reducer = (state: StateType, action: ActionType) => {
  switch(action.type){
    case "INC":
      return {...state, count: state.count + state.step}
    case "DEC":
      return {...state, count: state.count - state.step}
    case "PAY":
    return {...state, step: action.payload}
  }
}


const initialState:StateType = {
  count: 0,
  step: 1
}


const UseReducerCounter = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
        <div className="">
            <h1>Counter (Sum {state.step}) is {state.count}</h1>
            <div className="">
              <input 
                onChange={(e) => dispatch({type: "PAY", payload: Number(e.target.value)})}
                type="number" />
            </div>
            <button 
              onClick={() => dispatch({type: "INC", payload: state.step})}
            >INC</button>
            <button 
              onClick={() => dispatch({type: "DEC", payload: state.step})}
            >DEC</button>
        </div>
    </>
  )
}

export default UseReducerCounter