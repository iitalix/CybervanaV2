import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useModal} from "../../../context/Modal";
import {createVehicleThunk, getOwnerVehicles} from "../../../store/vehicles";

export default function CreateVehicleModal() {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const {closeModal} = useModal();
  const [validationObject, setValidationObject] = useState({});
  const [key, setKey] = useState(Date.now());

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorsObject = {};

    if (price < 1 || price.includes('.')) {
      errorsObject.price = "Price must be an integer greater than 0.";
    }

    setValidationObject(errorsObject);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("make", make);
    formData.append("model", model);
    formData.append("price", price);
    formData.append("description", description);

    setImageLoading(true);
    const postData = await dispatch(createVehicleThunk(formData));

    if (postData.errors === undefined || !postData.errors) {
      dispatch(getOwnerVehicles());
      push("/vehicles/current");
      return closeModal();
    } else {
      setImageLoading(false);
      setErrors(postData.errors);
      setKey(Date.now());
    }
  };

  return (
    <div className="create-vehicle-parent-container">
      <h1>Post Your Vehicle</h1>
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
            placeholder="Required field"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            required
          />
        </div>

        <div className="label-input-container">
          <label>Model</label>

          <input
            type="text"
            name="model"
            placeholder="Required field"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>

        <div className="label-input-container">
          <label>Price</label>
          <input
            type="text"
            name="price"
            placeholder="Required field"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
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
            required
          />
        </div>

        <div className="div-file-section">
          <label className="file-upload">
            <input
              type="file"
              accept="image/*"
              id="choosefile-button"
              onChange={(e) => setImage(e.target.files[0])}
              key={key}
            />
          </label>
        </div>

        <div className="listerrors-container">
        {errors &&
          errors.length >= 1 &&
          errors.map((error, idx) => (
            <p className="list-errors" key={idx}>
              {error}
            </p>
          ))}

        {validationObject.price && <p className="list-errors">{validationObject.price}</p>}
      </div>

        <div className="submit-container">
          <button
            className="submit-button"
            type="submit"
            // disabled={Object.keys(validationObject).length > 0}
          >
            Submit
          </button>
        </div>
        {imageLoading && (
          <div aria-busy="true" aria-describedby="progress-bar">
            <p>Uploading</p>
            <progress
              id="progress-bar"
              aria-label="Content loading…"
            ></progress>
          </div>
        )}
      </form>
    </div>
  );
}
