import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useModal} from "../../../context/Modal";
import {
  updateVehicleThunk,
  getVehicleDetailsThunk
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

    if (postData.errors === undefined || !postData.errors) {
      dispatch(getVehicleDetailsThunk(vehicleId));
      push(`/vehicles/${vehicleId}`);
      return closeModal();
    } else {
      setErrors(postData.errors);
    }
  };

  return (
    <div className="create-vehicle-parent-container">
      <h1>Update Your Post</h1>

      <div className="listerrors-container">
        {errors &&
          errors.length >= 1 &&
          errors?.map((error, idx) => (
            <p className="list-errors" key={idx}>
              {error}
            </p>
          ))}
      </div>

      <form
        className="create-post-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >

        <div className="label-input-container">
          <label>Make</label>
          <input
            type="text"
            name="make"
            placeholder="Make"
            value={make}
            required
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
            required
            onChange={(e) => setModel(e.target.value)}
          />
        </div>

        <div className="label-input-container">
          <label>Price (without decimal)</label>
        </div>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            required
            onChange={(e) => setPrice(e.target.value)}
          />

        <div className="description-input-container">
        <label className="description-label">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Please write at least 10 characters"
            value={description}
            required
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
