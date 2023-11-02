import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useModal} from "../../../context/Modal";
import {
  updateVehicleThunk,
  getVehicleDetailsThunk,
  getOwnerVehicles,
} from "../../../store/vehicles";
import "../CreateVehicleModal/CreateVehicle.css";

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

    let newErrors = {};

    if (!make) newErrors.make = "Make is a required field.";
    if (!model) newErrors.model = "Model is a required field.";
    if (price.toString().includes(".")) newErrors.price = "Price must be an INTEGER greater than 0."
    if (price % 1 !== 0) newErrors.price = "Price must be an INTEGER greater than 0.";
    if (price < 1) newErrors.price = "Price must be an INTEGER greater than 0.";
    if (description.length < 10)
      newErrors.description = "Description must be at least 10 characters.";

    const formData = {
      make,
      model,
      price,
      description,
    };

    if (Object.keys(newErrors).length === 0) {
      const data = await dispatch(updateVehicleThunk(formData, vehicleId));

      closeModal();
      push("/vehicles/current");
      return dispatch(getOwnerVehicles());
    } else {
      setErrors(newErrors);
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

        <label>Make</label>
        {errors.make && <p className="list-errors">{errors.make}</p>}
        <input
          type="text"
          name="make"
          placeholder="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />

        <label>Model</label>
        {errors.model && <p className="list-errors">{errors.model}</p>}
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <label>Price</label>
        {errors.price && <p className="list-errors">{errors.price}</p>}
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Description</label>
        {errors.description && (
          <p className="list-errors">{errors.description}</p>
        )}
        <textarea
          type="text"
          name="description"
          placeholder="Please write at least 10 characters"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="create-post-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
