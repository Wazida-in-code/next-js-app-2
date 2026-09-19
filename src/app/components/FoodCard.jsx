import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const {id, dish_name, image_link, alternative_names } = food;
  return (
    <div className="card bg-base-100 shadow-sm border border-2 border-gray-600">
      <div className="card-body">
        <h2 className="card-title">{dish_name}</h2>
        <p>{alternative_names}</p>
      </div>
      <figure>
        <Image 
        width={200} height={200} src={image_link} alt="food"
        ></Image>
      </figure>

      <Link href={`/menu/${id}`}>
            <div className="bg-gray-700 p-2 border border-gray-600 rounded-md mb-5">
              Show Details
            </div>
      </Link>

    </div>
  );
};

export default FoodCard;
