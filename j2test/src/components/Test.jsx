import React from 'react';

const OPERATIONS = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT"
  };

const Test = () => {
    const [number, updateNumber] = React.useState(0);
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case "ADD":
                console.log(state);
                return state + number;
            case "SUBTRACT":
                console.log(state);
                return state - number;
          default:
            return state;
        }
    }, 0);
  
    /* implement dispatches */
    const add = () => dispatch({type: 'ADD'});
    const subtract = () => dispatch({type: 'SUBTRACT'});
  
    const handleNumberChange = e => updateNumber(Number(e.target.value));
  
    return (
      <div>
        <div id="result">{state}</div>
        <div>
          <button id="add" onClick={add}>Add</button>
          <button id="subtract" onClick={subtract}>Subtract</button>
        </div>
        <div>
          <input type="text" value={number} onChange={handleNumberChange} />
        </div>
      </div>
    );
}

export default Test
