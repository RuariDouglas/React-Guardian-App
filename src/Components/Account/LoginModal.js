import React, { useRef, useEffect } from "react";

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
      <h2 className="signup__heading">Don't have an account? SignUp here...</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handlesubmit}>
        <input ref={emailRef} placeholder="Enter your Email" type="email" />
        <input
          ref={passwordRef}
          placeholder="Enter your password"
          type="password"
        />
        <button type="submit" className="signup__button">
          Submit
        </button>
      </form>
    </>
  );
};

export default LoginModal;
