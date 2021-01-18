import React, { useRef } from "react";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <>
      Already have an account?
      <h2 className="signup__heading">Sign Up</h2>
      <form action="">
        <input placeholder="Enter your Email" type="email" />
        <input placeholder="Enter a password" type="password" />
        <input placeholder="Confirm your password" type="password" />
        <button type="submit" className="signup__button">
          Submit
        </button>
      </form>
    </>
  );
}
