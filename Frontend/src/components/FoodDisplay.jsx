/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <>
      <div className="mt-7 px-4 md:px-0">
        <h2 className="font-semibold text-2xl md:text-3xl">
          Top Dishes Near You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7 gap-y-7 gap-5">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category)
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  category={item.category}
                  image={item.image}
                />
              );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
