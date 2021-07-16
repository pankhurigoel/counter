import React, { useState } from 'react';
import './Counter.css';

export const Counter = () => {
    const minValue = 1;
    const maxValue = 1000;

    // Count is a state initialized to min value
    const [count, setCount] = useState(minValue)


    const increment = () => {
        // Count state is incremented if the current value is not equal to maxValue
        if (count < maxValue) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        // Count state is decremented if the current value is not equal to minValue
        if (count > minValue) {
            setCount(count - 1)
        }
    }

    const handleChange = (e) => {
        setCount(Number(e.target.value))
    }

    return (
        <div className='counter-wrapper'>
            <button type='button' className='decrement' onClick={decrement}>-</button>
            <input type='number' value={count} onChange={ (e) => handleChange(e)}/>
            <button type='button' className='increment' onClick={increment}>+</button>
        </div>
    )

}