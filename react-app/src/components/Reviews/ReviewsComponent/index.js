import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getEveryReviewThunk} from "../../../store/reviews";
import StarInputRatings from "../../StarInputRatings";
import OpenModalButton from "../../OpenModalButton";
import ReviewFormModal from "../ReviewFormModal";
import UpdateReviewModal from "../UpdateReviewModal";
import DeleteReviewModal from "../DeleteReviewModal";
import AvgReview from "../AvgReview";

export default function ReviewsComponent({vehicleId}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const vehicles = useSelector((state) => state.vehicles.allVehicles);
  const vehicle = vehicles[vehicleId];
  const allReviews = useSelector((state) => state.reviews.allReviews);
  const vehicleReviews = Object.values(allReviews).filter(
    (review) => review.vehicleId === vehicle.id
  );
  const userVehicleReview = vehicleReviews.filter(
    (review) => review.userId === sessionUser?.id
  );
  let currUserReview = userVehicleReview[0]?.id;

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

  return (
    <div className="vehicle-reviews-container">
      <div className="header-container">
        <h2>User Reviews</h2>

        <div id="detail-avg">
          <AvgReview reviews={vehicleReviews} />
        </div>
        {sessionUser &&
          !currUserReview &&
          sessionUser?.id !== vehicle?.ownerId && (
            <div id="review-link-button">
              <OpenModalButton
                buttonText="Review This Vehicle"
                modalComponent={<ReviewFormModal vehicleId={vehicleId} />}
              />
            </div>
          )}
      </div>
      <div id="review-container">
        {vehicleReviews.length > 0 ? (
          vehicleReviews.map((review) => (
            <div key={review.id}>
              <div className="user-review" key={review.id}>
                <div className="name-and-stars">
                  <p id="revName">
                    {review.users.firstName} {review.users.lastName}
                  </p>
                  <div className="stars-and-review">
                    <div id="revStars">
                      {review.stars && (
                        <StarInputRatings
                          rating={review.stars}
                          disabled={true}
                        />
                      )}
                    </div>
                    <p id="revDate">Posted on: {fixDate(review.createdAt)}</p>
                  </div>
                </div>
                <div id="revReview">{review.review}</div>

                {currUserReview === review.id && (
                  <div className="review-edit-delete-buttons">
                    <OpenModalButton
                      buttonText="Edit Review"
                      modalComponent={
                        <UpdateReviewModal reviewId={review.id} vehicleId={vehicleId} />
                      }
                    />
                    <OpenModalButton
                      buttonText="Delete"
                      modalComponent={
                        <DeleteReviewModal
                          reviewId={review.id}
                          vehicleId={vehicleId}
                        />
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p id="not-reviewed">This vehicle has not yet been reviewed.</p>
        )}
      </div>
    </div>
  );
}
