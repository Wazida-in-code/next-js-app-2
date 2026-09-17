'use client'
import React, { use } from 'react';

const SearchFood = ({foodPromise}) => {
    // const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    // const data = await res.json()
    // const foods = data.data

    const foods = use(foodPromise).data

    return (
        <div>
            <h2>Top Food: {foods.length}</h2>
        </div>
    );
};

export default SearchFood;