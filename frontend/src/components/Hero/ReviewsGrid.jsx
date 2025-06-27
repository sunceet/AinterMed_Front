import React, { useState } from "react";
import reviews from "./Reviews";





const StarRating = ({ rating }) => (
  <div className="flex gap-[1px] w-[113.71px] h-[20px]">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={`text-[16px] ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
        ★
      </span>
    ))}
  </div>
);

const ReviewCard = ({ review }) => (
  <div className="w-[460px] h-[380px] rounded-[24px] border border-gray-300 p-6 bg-white flex-shrink-0">
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-[18px] font-semibold font-[Involve] text-gray-900 w-[264px] leading-[24px]">
        {review.name}
      </h4>
      <StarRating rating={review.rating} />
    </div>
    <div className="text-[14px] font-[Manrope] text-gray-500 text-right mb-4">{review.date}</div>
    <div className="text-[18px] font-[Manrope] text-gray-700 leading-[100%] w-[404px] h-[225px]">
      {review.text}
    </div>
  </div>
);

const ReviewsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
    <div className="flex flex-col items-center px-4 py-8 max-w-screen-xl mx-auto">
      {/* Отзывы горизонтально */}
      <div className="flex gap-6 overflow-hidden">
        {currentReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      {/* Пагинация */}
      <div className="flex mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 rounded-full border ${
              currentPage === i + 1
                ? "bg-blue-500 border-blue-500 text-white"
                : "border-gray-300 text-gray-700"
            } text-sm font-medium transition`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReviewsGrid;