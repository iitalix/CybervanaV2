import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getEveryReviewThunk, createReviewThunk} from "../../../store/reviews";
import OpenModalButton from "../../OpenModalButton";
import ReviewFormModal from "../../Reviews/ReviewFormModal";

export default function ReviewsComponent({vehicleId}) {
  const dispatch = useDispatch();
  const allReviews = useSelector((state) => state.reviews.allReviews);
  const vehicleReviews = Object.values(allReviews).filter(
    (review) => review.vehicleId === vehicleId
  );

  const fixDate = (dateString) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formatter.format(date);
  };

  useEffect(() => {
    dispatch(getEveryReviewThunk());
  }, [dispatch]);

  if (!vehicleReviews.length) return null;

  return (
    <div className="vehicle-reviews-container">
      <div>
        <OpenModalButton
          buttonText="Review This Vehicle"
          modalComponent={<ReviewFormModal vehicleId={vehicleId} />}
        />
      </div>

      <div>
        {vehicleReviews.length > 0 ? (
          vehicleReviews.map((review) => (
            <div>
              <p>{fixDate(review.createdAt)}</p>
              <p>
                {review.users.firstName} {review.users.lastName}
              </p>
              <p>{review.stars} Stars</p>
              <p>{review.review}</p>
            </div>
          ))
        ) : (
          <div className="be-the-first">Be the first to write a review!</div>
        )}
      </div>
    </div>
  );
}
