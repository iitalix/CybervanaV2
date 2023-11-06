import {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useModal} from "../../../context/Modal";
import {createVehicleThunk, getOwnerVehicles} from "../../../store/vehicles";
import "../CreateVehicleModal/CreateVehicle.css";

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

    if (description?.length < 10) {
      errorsObject.description = "Description must be more than 10 characters.";
    }

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

    setImage(null);
    // setMake("");
    // setModel("");
    // setPrice("");
    // setDescription("");

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

  // useEffect(() => {
  //   const errorsObject = {};

  //   if (description?.length < 10) {
  //     errorsObject.description = "Description must be more than 10 characters.";
  //   }

  //   if (price < 1) {
  //     errorsObject.price = "Price must be an integer greater than 0.";
  //   }

  //   setValidationObject(errorsObject);
  // }, [description, price]);

  return (
    <div className="create-vehicle-parent-container">
      <h1>Post Your Vehicle</h1>
      <form
        className="create-post-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >

        {errors &&
          errors.length >= 1 &&
          errors.map((error, idx) => (
            <div className="list-errors" key={idx}>
              {error}
            </div>
          ))}

        <div className="div-file-section">
          <label className="style-file-upload">
            <input
              type="file"
              accept="image/*"
              className="hide-file-upload"
              onChange={(e) => setImage(e.target.files[0])}
              key={key}
            />
          </label>
          {/* <div>{image !== null ? image["name"] : "Choose Image"}</div> */}
        </div>

        <label>Make</label>
        <input
          type="text"
          name="make"
          placeholder="Required field"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />

        <label>Model</label>
        <input
          type="text"
          name="model"
          placeholder="Required field"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />

        <label>Price</label>
        <div className="list-errors">
          {validationObject?.price && (
            <p className="errors-one-post"> {validationObject?.price}</p>
          )}
        </div>
        <input
          type="text"
          name="price"
          placeholder="Required field"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Description</label>
        <div className="list-errors">
          {validationObject?.description && (
            <p className="errors-one-post"> {validationObject?.description}</p>
          )}
        </div>
        <textarea
          type="text"
          name="description"
          placeholder="Please write at least 10 characters"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="create-post-submit"
          type="submit"
          // disabled={Object.keys(validationObject).length > 0}
        >
          Submit
        </button>
        {imageLoading && (
          <div aria-busy="true" aria-describedby="progress-bar">
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
