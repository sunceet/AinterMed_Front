import React, { useState, useEffect, useRef } from "react";
import reviews from "./reviews";
import { useTranslation } from "react-i18next";
import arrow_reviews from "../../assets/svg/arrow_reviews.svg";
import anonym from "../../assets/svg/anonym.svg";

const StarRating = ({ rating }) => (
  <div className="flex gap-[1px] w-[113.71px] h-[20px]">
    {[...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`text-[16px] ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

const ReviewCard = ({ review }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[350px] h-[500px] rounded-[24px] border border-white p-5 bg-white flex-shrink-0 flex flex-col gap-2">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img
            src={anonym}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="text-[18px] font-semibold font-[Involve] text-gray-900 leading-[24px]">
            {t(review.nameKey)}
          </h4>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <div className="text-[14px] font-[Manrope] text-gray-500 text-right -mt-3 mb-2">
        {t(review.dateKey)}
      </div>
      <hr className="border-t border-gray-200" />
      <div className="text-[16px] font-[Manrope] text-left text-gray-700 leading-[120%]">
        {t(review.textKey)}
      </div>
    </div>
  );
};

const getPaginationButtons = (totalPages, currentPage) => {
  const pages = [];
  const maxVisible = 3;
  let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let end = start + maxVisible - 1;

  if (end >= totalPages) {
    end = totalPages;
    start = Math.max(1, end - maxVisible + 1);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  const showStart = start > 1;
  const showEnd = end < totalPages;

  if (showStart && start > 2) pages.unshift("...");
  if (showStart) pages.unshift(1);
  if (showEnd && end < totalPages - 1) pages.push("...");
  if (showEnd) pages.push(totalPages);

  return pages;
};

const ReviewsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const scrollContainerRef = useRef(null);
  const isManualScroll = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  const CARD_WIDTH = 300;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      scrollContainerRef.current.style.paddingLeft = `${CARD_WIDTH / 2 + 12}px`;
    } else if (scrollContainerRef.current) {
      scrollContainerRef.current.style.paddingLeft = "";
    }
  }, [isMobile]);

  const reviewsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const pagination = getPaginationButtons(totalPages, currentPage);

  const goToPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const scrollToPage = (page) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const cardWidth = container.children[0]?.offsetWidth || CARD_WIDTH;
    container.scrollTo({
      left: (page - 1) * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  const handlePaginationClick = (page) => {
    isManualScroll.current = false;
    setCurrentPage(page);
    if (isMobile) scrollToPage(page);
  };

  useEffect(() => {
    if (isMobile) {
      if (!isManualScroll.current) {
        scrollToPage(currentPage);
      }
    }
  }, [currentPage, isMobile]);

  const handleMobileScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (!isManualScroll.current) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.children[0]?.offsetWidth || CARD_WIDTH;
    const newPage =
      Math.round(scrollLeft / ((cardWidth + 16) * reviewsPerPage)) + 1;

    if (newPage !== currentPage) setCurrentPage(newPage);
  };

  useEffect(() => {
    if (isMobile && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const handleTouchStart = () => {
        isManualScroll.current = true;
      };
      container.addEventListener("touchstart", handleTouchStart);
      return () =>
        container.removeEventListener("touchstart", handleTouchStart);
    }
  }, [isMobile]);

  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col items-center md:px-1 mt-[100px] max-w-screen-xl mx-auto">
      <div className="absolute rounded-[32px] bg-[#F5F6F6] -z-10 w-full xl:w-[1255px] min-h-[770px] md:min-h-[720px] left-1/2 -translate-x-1/2 top-0" />

      <h2 className="text-[32px] md:text-[40px] leading-[36px] font-[Involve] font-semibold text-gray-900 text-center max-w-[737px] mx-auto mt-[40px] mb-10 z-10">
        <span className="bg-gradient-to-r from-[#437CFF] to-[#437CFF] text-transparent bg-clip-text">
          {t("reviewsTitle.gradient")}
        </span>{" "}
        {t("reviewsTitle.rest")}
      </h2>

      <div className="relative w-full items-center justify-center z-10 hidden md:flex">
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:scale-110 transition z-20"
        >
          <img
            src={arrow_reviews}
            alt="Left"
            className="w-7 h-7 cursor-pointer select-none"
          />
        </button>

        <div className="flex gap-6 justify-center items-start xl:min-h-[380px]">
          {currentReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:scale-110 transition z-20"
        >
          <img
            src={arrow_reviews}
            alt="Right"
            className="w-7 h-7 select-none cursor-pointer rotate-180"
          />
        </button>
      </div>

      {isMobile && (
        <div
          ref={scrollContainerRef}
          onScroll={handleMobileScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-6 pb-4 w-full scrollbar-hidden"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 items-center gap-3"
              style={{ scrollSnapAlign: "center", minWidth: CARD_WIDTH }}
            >
              <div className="mx-auto max-w-[300px]">
                <ReviewCard review={review} />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap justify-center mt-6 gap-1 z-10 max-w-full px-4 mb-[5px] md:mb-0">
        {pagination.map((item, index) =>
          item === "..." ? (
            <span
              key={index}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-transparent text-gray-500 text-sm"
            >
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => handlePaginationClick(item)}
              className={`w-[38px] h-[38px] cursor-pointer rounded-full border text-sm font-medium transition ${
                currentPage === item
                  ? "bg-[#438EFF] border-white text-white"
                  : "border-white bg-white text-gray-700 font-medium font-[Manrope] mb-[30px]"
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ReviewsGrid;
