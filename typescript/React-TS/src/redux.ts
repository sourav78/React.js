import { PayloadAction, configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";


// interface initialStateType {
//     count: number
// }

// const initialState: initialStateType = {
//     count: 0
// }

// const increment = createAction('increment')
// const decrement = createAction('decrement')

// const rootReducer = createReducer(initialState, (builder) => {
//     builder.addCase(increment, (state) => { state.count += 1 })
//             .addCase(decrement, (state) => {state.count -= 1})
// })


// export const store = configureStore({ reducer: {rootReducer} })




export interface initialStateType {
    count: number,
    stepValue: number
}

const initialState: initialStateType = {
    count: 0,
    stepValue: 1
}


const rootSlice = createSlice({
    name: 'Slicer',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += state.stepValue
        },
        decrement: (state) => {
            state.count -= state.stepValue
        },
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.stepValue = action.payload
        }
    }
})

export const {increment, decrement, incrementByValue} = rootSlice.actions

export const store = configureStore({ reducer: rootSlice.reducer })

//This the state is not available

// type stateType = ReturnType<typeof store.getState>