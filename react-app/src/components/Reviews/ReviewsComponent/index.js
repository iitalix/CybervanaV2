import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getEveryReviewThunk, createReviewThunk} from "../../../store/reviews";
import OpenModalButton from "../../OpenModalButton";
import ReviewFormModal from "../ReviewFormModal";
import UpdateReviewModal from "../UpdateReviewModal";

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
    (review) => review.userId === sessionUser.id
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
      <div>
        {!currUserReview && (
          <div>
            <OpenModalButton
              buttonText="Review This Vehicle"
              modalComponent={<ReviewFormModal vehicleId={vehicleId} />}
            />
          </div>
        )}
        {vehicleReviews.length > 0 ? (
          vehicleReviews.map((review) => (
            <div key={review.id}>
              <div className="user-review" key={review.id}>
                <p>{fixDate(review.createdAt)}</p>
                <p>
                  {review.users.firstName} {review.users.lastName}
                </p>
                <p>{review.stars} Stars</p>
                <p>{review.review}</p>
              </div>

              {currUserReview === review.id && (
                <div>
                  <OpenModalButton
                    buttonText="Update"
                    modalComponent={<UpdateReviewModal reviewId={review.id} />}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <div id="be-first">Be the first to write a review!</div>
        )}
      </div>
    </div>
  );
}
