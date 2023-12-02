import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getAllVehicles} from "../../../store/vehicles";
import ReviewsComponent from "../../Reviews/ReviewsComponent";
import AvgReview from "../../Reviews/AvgReview";
import { getEveryReviewThunk, getVehicleReviewsThunk } from "../../../store/reviews";

export default function VehicleDetailsPage() {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const {id} = useParams();
  const vehicles = useSelector((state) => state.vehicles.allVehicles);
  const vehicle = vehicles[id];
  const reviews = useSelector((state) => state.reviews.vehicleReviews);
  const reviewsArr = Object.values(reviews);

  useEffect(() => {
    dispatch(getAllVehicles());
    dispatch(getEveryReviewThunk());
    dispatch(getVehicleReviewsThunk(id));
  }, [dispatch]);

  const goToAllVehicles = () => {
    return push("/vehicles/all");
  };

  if (!Object.values(vehicles).length || !vehicle) return null;

  return (
    <div className="vehicle-details-page-container">
      <div className="header-container">
        <h1>Vehicle Details</h1>
        <button onClick={goToAllVehicles} className="header-buttons">
          Explore All Vehicles
        </button>
      </div>

      <div className="vehicle-details-container">
        <div id="detail-image-container">
          <img src={vehicle.photoUrl} alt="vehicle" id="detail-image" />
        </div>

        <div id="detail-section-parent">
          <div id="detail-section-container">
            <p>
              {vehicle.make} {vehicle.model}
            </p>
            <p>${vehicle.price}</p>
          </div>

          <div id="detail-description">{vehicle.description}</div>
          <p id="posted-by">
            Posted by {vehicle.users.firstName} {vehicle.users.lastName}
          </p>
        </div>
      </div>

      <ReviewsComponent vehicleId={vehicle.id} />
    </div>
  );
}
