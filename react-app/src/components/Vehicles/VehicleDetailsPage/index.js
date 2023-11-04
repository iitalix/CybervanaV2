import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams} from "react-router-dom";
import {getEveryReviewThunk, createReviewThunk} from "../../../store/reviews";
import OpenModalButton from "../../OpenModalButton";
import ReviewFormModal from "../../Reviews/ReviewFormModal";
import {getAllVehicles} from "../../../store/vehicles";

export default function VehicleDetailsPage() {
  const dispatch = useDispatch();
  const {id} = useParams();
  const vehicles = useSelector((state) => state.vehicles.allVehicles);
  const vehicle = vehicles[id];

  useEffect(() => {
    dispatch(getAllVehicles());
  }, [dispatch]);

  if (!Object.values(vehicles).length) return null;

  return (
    <div>
      <div className="header-container">
        <h1>Vehicle Details</h1>
        <a href="/vehicles/all">Explore All Vehicles</a>
      </div>

      <div className="vehicle-details-container">
        <img src={vehicle.photoUrl} alt="vehicle" id="detail-image" />
        <div>
          <p>
            {vehicle.make} {vehicle.model}
          </p>
          <p>${vehicle.price}</p>
        </div>
        <div id="detail-description">{vehicle.description}</div>
      </div>

      <div className="vehicle-reviews-container">
        <div>
          <OpenModalButton
            buttonText="Review This Vehicle"
            modalComponent={<ReviewFormModal vehicle={vehicle} />}
          />
        </div>
        <div>Reviews List Container</div>
      </div>
    </div>
  );
}
