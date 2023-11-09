import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useModal} from "../../../context/Modal";
import {
  updateVehicleThunk,
  getVehicleDetailsThunk,
  getOwnerVehicles,
} from "../../../store/vehicles";

export default function UpdateVehicleModal({vehicleId}) {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState([]);
  const {closeModal} = useModal();

  useEffect(() => {
    dispatch(getVehicleDetailsThunk(vehicleId)).then((data) => {
      setMake(data.make);
      setModel(data.model);
      setPrice(data.price);
      setDescription(data.description);
      setImage(data.photoUrl);
    });
  }, [dispatch, vehicleId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      make,
      model,
      price,
      description,
    };

    const postData = await dispatch(updateVehicleThunk(formData, vehicleId));


    if (Object.values(postData).includes("errors")) {

      closeModal();
      push(`/vehicles/${vehicleId}`);
      return dispatch(getVehicleDetailsThunk(vehicleId));
    } else {
      setErrors(postData.errors);
    }
  };

  return (
    <div className="create-vehicle-parent-container">
      <h1>Update Your Post</h1>
      <form
        className="create-post-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {errors &&
          errors.length >= 1 &&
          errors?.map((error, idx) => (
            <div className="list-errors" key={idx}>
              {error}
            </div>
          ))}

        <div className="label-input-container">
          <label>Make</label>
          <input
            type="text"
            name="make"
            placeholder="Make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </div>

        <div className="label-input-container">
          <label>Model</label>
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </div>

        <div className="label-input-container">
          <label>Price</label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="description-input-container">
        <label className="description-label">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Please write at least 10 characters"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="submit-container">
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
