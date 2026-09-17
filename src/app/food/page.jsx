import React, { Suspense } from 'react';
import SearchFood from '../components/SearchFood';

// option-1 to load data on client component
const foodPromise = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data = await res.json();
    const foods = data.data;
    return foods
}

// option-2 to load data on client component
const foodPromise2 = fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods').then(res => res.json());

const FoodPage = () => {
    return (
        <div>
            <Suspense fallback={<h2>Loading...</h2>}>
                    {/* <SearchFood foodPromise={foodPromise()}></SearchFood> */}
                    <SearchFood foodPromise={foodPromise2}></SearchFood>
            </Suspense>
        </div>
    );
};

export default FoodPage;