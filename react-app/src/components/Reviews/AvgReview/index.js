import React from "react";

export default function AvgReview({reviews}) {
  const avgReviews = () => {
    if (typeof reviews === "object") {
      reviews = Object.values(reviews);
      console.log("🚀 ~ file: index.js:9 ~ avgReviews ~ reviews:", reviews);
    }

    console.log("🚀 ~ file: index.js:9 ~ avgReviews ~ reviews:", reviews);

    let total = 0;

    reviews.forEach((review) => (total += review.stars));

    const average = total / reviews?.length;

    return average.toFixed(1);
  };

  return (
    <div id="avg-review-parent-container">
      {!reviews?.length ? (
        <>
          <div className="empty">
            <i className="fa-solid fa-star"></i>
          </div>
          <p>No reviews</p>
        </>
      ) : (
        <>
          <div className="filled">
            <i className="fa-solid fa-star"></i>
          </div>
          <p>{avgReviews()}</p>
        </>
      )}
    </div>
  );
}
