import React from 'react';

const FoodDetailPage = async ({ params }) => {
    const {foodId} = await params

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const data = await res.json()
    const {dish_name, origin_and_popularity} = data.data;
    return (
        <div>
            <h2>Food Detail: {foodId}</h2>
            <div>
                <h2>{dish_name}</h2>
            <p>{origin_and_popularity}</p>
            </div>
        </div>
    );
};

export default FoodDetailPage;