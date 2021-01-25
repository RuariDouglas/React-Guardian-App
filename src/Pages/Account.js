import React from "react";
import { useLocation } from "react-router-dom";

// COMPONENTS
import SignUpModal from "../Components/Account/SignUpModal";
import LoginModal from "../Components/Account/LoginModal";

export function Account() {
  const location = useLocation();
  const rootPath = location.pathname.split("/")[1];
  return (
    <div class="account__wrapper">
      {rootPath === "signup" ? <SignUpModal /> : <LoginModal />}
    </div>
  );
}
export default Account;
