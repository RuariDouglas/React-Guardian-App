import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { signUp, clearData } from "../../Redux/Actions/authAction";

const SignUpModal = () => {
  const dispatch = useDispatch();
  // Refs
  let nameRef = useRef();
  let emailRef = useRef();
  let passwordRef = useRef();
  let passwordConfirmRef = useRef();
  // State
  const { error } = useSelector((state) => state.error);
  const handlesubmit = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    let passwordConfirm = passwordConfirmRef.current.value;
    if (password === passwordConfirm) {
      console.log("Match");
      dispatch(signUp(name, email, password));
    } else {
      dispatch({
        type: "ERROR",
        payload: {
          error: "Passwords don't match",
        },
      });
    }
  };

  useEffect(() => {
    dispatch(clearData());
  }, [dispatch]);
  return (
    <>
      {error && <p>{error}</p>}
      <h2>SignUp</h2>
      <form onSubmit={handlesubmit}>
        <input ref={nameRef} placeholder="Enter a username" type="text" />
        <input ref={emailRef} placeholder="Enter your Email" type="email" />
        <input
          ref={passwordRef}
          placeholder="Enter a password"
          type="password"
        />
        <input
          ref={passwordConfirmRef}
          placeholder="Confirm your password"
          type="password"
        />
        <div className="form__container">
          <p className="signup__heading">
            Already have an account ?<Link to="/login"> Login</Link>
          </p>
          <button type="submit" className="signup__button">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpModal;
