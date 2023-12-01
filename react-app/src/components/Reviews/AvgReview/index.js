import {useEffect} from "react";
import {useSelector} from "react-redux";

export default function AvgReview({reviews}) {

  const avgReviews = () => {
    let total = 0;

    reviews?.forEach((review) => (total += review.stars));

    const average = total / reviews?.length;

    return average.toFixed(1);
  };

  return (
    <div id="avg-review-parent-container">
      {reviews ? (
        <>
          <div className="filled">
            <i className="fa-solid fa-star"></i>
          </div>
          <p>{avgReviews()}</p>
        </>
      ) : (
        <>
          <div className="empty">
            <i className="fa-solid fa-star"></i>
          </div>
          <p>No reviews yet</p>
        </>
      )}
    </div>
  );
}
