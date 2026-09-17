import React from 'react';
import FoodCard from '../components/FoodCard';

const MenuPage = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await res.json()
    const foods = data.data;
    console.log(foods);
    return (
        <div>
            <h2>Menu:{foods.length}</h2>

            <div className='flex gap-4'>
                {
                    foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default MenuPage;