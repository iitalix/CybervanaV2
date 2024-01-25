import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useModal} from "../../context/Modal";
import {signUp} from "../../store/session";
import {login} from "../../store/session";
import googlesignup from "../../images/googlesignup.png"

function SignupFormModal() {
  const dispatch = useDispatch();
  const {push} = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const {closeModal} = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!firstName) newErrors.firstName = "First name is required";
    if (!lastName) newErrors.lastName = "Last name is required";
    if (!email.includes("@")) newErrors.email = "Must be a valid email";
    if (username.length <= 4)
      newErrors.username = "Username must be greater than four characters";
    if (password.length < 6)
      newErrors.password = "Password must be at least six characters";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords must match";
    if (isNaN(age) || age <= 0) newErrors.age = "Age must be a positive number";

    if (Object.keys(newErrors).length === 0) {
      const data = await dispatch(
        signUp(firstName, lastName, age, username, email, password)
      );
      if (data) {
        setErrors(data);
      } else {
        closeModal();
        push("/vehicles/all");
      }
    } else {
      setErrors(newErrors);
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
    <div className="sign-up-container">
      <h1>Sign Up</h1>

      {/* Google Auth */}
      <a href={"/api/auth/oauth_login"}>
        <img src={googlesignup} id="google-button" alt="google login button"/>
      </a>

      <form onSubmit={handleSubmit}>
        {/* <div>
          {errors &&
            errors.length >= 1 &&
            errors.map((error, idx) => (
              <div className="list-errors" key={idx}>
                {error}
              </div>
            ))}
        </div> */}

        <div className="label-input-container">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="signup-error">
          {errors.firstName && (
            <p className="list-errors">{errors.firstName}</p>
          )}
        </div>

        <div className="label-input-container">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="signup-error">
          {errors.lastName && <p className="list-errors">{errors.lastName}</p>}
        </div>

        <div className="label-input-container">
          <label>Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="signup-error">
          {errors.age && <p className="list-errors">{errors.age}</p>}
        </div>

        <div className="label-input-container">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="signup-error">
          {errors.email && <p className="list-errors">{errors.email}</p>}
        </div>

        <div className="label-input-container">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="signup-error">
          {errors.username && <p className="list-errors">{errors.username}</p>}
        </div>

        <div className="label-input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="signup-error">
          {errors.password && <p className="list-errors">{errors.password}</p>}
        </div>

        <div className="label-input-container">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="signup-error">
          {errors.confirmPassword && (
            <p className="list-errors">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Sign Up
          </button>
          <button
            onClick={handleDemo}
            className="login-button"
            id="demo-button"
          >
            Demo User
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupFormModal;
