import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { login, clearData } from "../../Redux/Actions/authAction";

const LoginModal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearData());
  }, [dispatch]);
  let emailRef = useRef();
  let passwordRef = useRef();
  const { error } = useSelector((state) => state.error);

  const handlesubmit = async (e) => {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    dispatch(login(email, password));
  };

  return (
    <>
      {error && <p>{error}</p>}
      <h2>Login</h2>
      <form onSubmit={handlesubmit}>
        <input ref={emailRef} placeholder="Enter your Email" type="email" />
        <input
          ref={passwordRef}
          placeholder="Enter your password"
          type="password"
        />
        <div className="form__container">
          <p className="signup__heading">
            Don't have an account? <Link to="/signup">SignUp</Link>
          </p>
          <button type="submit" className="signup__button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginModal;
