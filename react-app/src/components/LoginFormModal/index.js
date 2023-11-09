import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {login} from "../../store/session";
import {useDispatch} from "react-redux";
import {useModal} from "../../context/Modal";
import "../LoginFormModal/LoginForm.css";

function LoginFormModal() {
  const {push} = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const {closeModal} = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal();
      push("/vehicles/all");
    }
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("DemoUser@gmail.com", "password"));
    if (data) {
      setErrors(data);
    } else {
      closeModal();
      push("/vehicles/all");
    }
  };

  return (
    <div className="login-modal-container">
      <h1>Log In</h1>

      <div id="login-errors-container">
        <div className="list-errors">
          {errors.map((error, idx) => (
            <div key={idx}>{error}</div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="login-form-modal">
        <div className="label-input-container">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="login-modal-input"
          />
        </div>

        <div className="label-input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="login-modal-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Log In
        </button>
        <button onClick={handleDemo} className="login-button" id="demo-button">
          Demo User
        </button>
      </form>
    </div>
  );
}

export default LoginFormModal;
