import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {useModal} from "../../context/Modal";
import {signUp} from "../../store/session";
import {login} from "../../store/session";
import "../SignupFormModal/SignupForm.css";

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
      <form onSubmit={handleSubmit}>
        <div>
          {errors &&
            errors.length >= 1 &&
            errors.map((error, idx) => (
              <div className="list-errors" key={idx}>
                {error}
              </div>
            ))}
        </div>
        <label>
          {errors.firstName && (
            <p className="list-errors">{errors.firstName}</p>
          )}
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          {errors.lastName && <p className="list-errors">{errors.lastName}</p>}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          {errors.age && <p className="list-errors">{errors.age}</p>}
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
        <label>
          {errors.email && <p className="list-errors">{errors.email}</p>}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          {errors.username && <p className="list-errors">{errors.username}</p>}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          {errors.password && <p className="list-errors">{errors.password}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          {errors.confirmPassword && (
            <p className="list-errors">{errors.confirmPassword}</p>
          )}
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <div className="form-buttons">
          <button type="submit" className="login-button">
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
