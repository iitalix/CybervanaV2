import {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useModal} from "../../../context/Modal";
import {createVehicleThunk, getOwnerVehicles} from "../../../store/vehicles";

export default function CreateVehicleModal() {
  const {push} = useHistory();
  const {closeModal} = useModal();
  const dispatch = useDispatch();
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  // const [key, setKey] = useState(Date.now());

  let [filename, setFilename] = useState("");
  const [imageURL, setImageURL] = useState("https://cybervana.s3.us-west-1.amazonaws.com/plus.png");
  const maxFileError = "Selected image exceeds the maximum file size of 5Mb";


  const fileWrap = (e) => {
    e.stopPropagation();

    const tempFile = e.target.files[0];

    // Check for max image size of 5Mb
    if (tempFile.size > 5000000) {
      setFilename(maxFileError); // "Selected image exceeds the maximum file size of 5Mb"
      return;
    }

    const newImageURL = URL.createObjectURL(tempFile); // Generate a local URL to render the image file inside of the <img> tag.
    setImage(tempFile);
    setImageURL(newImageURL);
    setFilename(tempFile.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    }
  };

  return (
    <div className="create-vehicle-parent-container">
      <h1>Post Your Vehicle</h1>

      <div className="listerrors-container">
        {errors &&
          errors.length >= 1 &&
          errors.map((error, idx) => (
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
            placeholder="No more than 15 characters"
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
            placeholder="No more than 30 characters"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>

        <div className="label-input-container">
          <label>Price (without decimal)</label>
        </div>
          <input
            type="text"
            name="price"
            placeholder="Integer greater than 0"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

        <div className="description-input-container">
          <label className="description-label">Description</label>
          <textarea
            type="text"
            name="description"
            placeholder="Min. 10 - Max 100 characters"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="file-inputs-container">
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            id="post-image-input"
            onChange={fileWrap}
          ></input>
          <div
            className="file-inputs-filename"
            style={{color: filename === maxFileError ? "red" : "#B7BBBF"}}
          >
            {filename}
          </div>
          <label htmlFor="post-image-input" className="file-input-labels">
          <div style={{position: "absolute", top: "14px", left: "100px"}}>
            <img src={imageURL} className="thumbnails" alt="thumbnail"></img>
          </div>
            Choose File
          </label>
        </div>

        <div className="submit-container">
          <button
            className="submit-button"
            type="submit"
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
