import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getEveryReviewThunk, createReviewThunk} from "../../../store/reviews";
import OpenModalButton from "../../OpenModalButton";
import ReviewFormModal from "../../Reviews/ReviewFormModal";

export default function ReviewsComponent({vehicleId}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const vehicles = useSelector((state) => state.vehicles.allVehicles);
  const vehicle = vehicles[vehicleId];
  const allReviews = useSelector((state) => state.reviews.allReviews);
  const vehicleReviews = Object.values(allReviews).filter(
    (review) => review.vehicleId === vehicle.id
  );
  const userVehicleReviews = vehicleReviews.filter(
    (review) => review.userId === sessionUser.id
  );
  console.log("🚀 ~ file: index.js:20 ~ ReviewsComponent ~ userVehicleReviews:", userVehicleReviews)

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
        {!userVehicleReviews.length && (
          <div>
            <OpenModalButton
              buttonText="Review This Vehicle"
              modalComponent={<ReviewFormModal vehicleId={vehicleId} />}
            />
          </div>
        )}
        {vehicleReviews.length > 0 ? (
          vehicleReviews.map((review) => (
            <div className="user-review" key={review.id}>
              <p>{fixDate(review.createdAt)}</p>
              <p>
                {review.users.firstName} {review.users.lastName}
              </p>
              <p>{review.stars} Stars</p>
              <p>{review.review}</p>
            </div>
          ))
        ) : (
          <div id="be-first">Be the first to write a review!</div>
        )}
      </div>
    </div>
  );
}
