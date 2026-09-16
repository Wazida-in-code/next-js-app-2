'use client'
import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)

    const heandleCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Counter: {count}</h2>
            <button onClick={heandleCount} className='text-white bg-indigo-900 p-4'>increase!</button>

        </div>
    );
};

export default Counter;