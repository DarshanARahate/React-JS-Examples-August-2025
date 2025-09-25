import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function CounterReducer1() {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                Count 1 = {count}
            </div>
            <button onClick={() => dispatch('increment')} > Increment </button>
            <button onClick={() => dispatch('decrement')} > Decrement </button>
            <button onClick={() => dispatch('reset')} > Reset </button>

            <div>
                Count 2 = {count2}
            </div>
            <button onClick={() => dispatch2('increment')} > Increment 2</button>
            <button onClick={() => dispatch2('decrement')} > Decrement 2</button>
            <button onClick={() => dispatch2('reset')} > Reset 3</button>

        </div>
    )
}