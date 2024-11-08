import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Raiting = () => {
  let [rating, setRating] = useState(null);
  let [rateColor, setRateColor] = useState(null);
  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <div>
            <label>
              <input
                type="radio"
                name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />
              <FaStar
                size={30}
                color={
                  currentRate >= (rateColor || rating) ? "#FFD700" : "#808080"
                }
              />
              ;
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Raiting;
