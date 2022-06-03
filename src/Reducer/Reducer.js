import {useReducer} from "react";

import './Reducer.css'

const init = (initCounter) => {
    return {count1: initCounter}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'set':
            return {...state, count1: action.payload}
        default:
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(reducer, 0, init);
    return (
        <div className={"ReducerCenter"}>
            <div>
                <button onClick={() => dispatch({type: 'set', payload: 1})}> 1</button>
                <button onClick={() => dispatch({type: 'set', payload: 2})}> 2</button>
                <button onClick={() => dispatch({type: 'set', payload: 3})}> 3</button>
                <button onClick={() => dispatch({type: 'set', payload: 4})}> 4</button>
                <button onClick={() => dispatch({type: 'set', payload: 5})}> 5</button>
                <button onClick={() => dispatch({type: 'set', payload: 6})}> 6</button>
                <button onClick={() => dispatch({type: 'set', payload: 7})}> 7</button>
                <button onClick={() => dispatch({type: 'set', payload: 8})}> 8</button>
                <button onClick={() => dispatch({type: 'set', payload: 9})}> 9</button>
                <button onClick={() => dispatch({type: 'set', payload: 10})}> 10</button>
                <button onClick={() => dispatch({type: 'set', payload: 11})}> 11</button>
                <button onClick={() => dispatch({type: 'set', payload: 12})}> 12</button>
                <button onClick={() => dispatch({type: 'set', payload: 13})}> 13</button>
                <button onClick={() => dispatch({type: 'set', payload: 14})}> 14</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'dec'})}> -1</button>
                <button onClick={() => dispatch({type: 'inc'})}> +1</button>
            </div>
            <div>Page: {state.count1}</div>
        </div>
    );
};

export {Reducer};