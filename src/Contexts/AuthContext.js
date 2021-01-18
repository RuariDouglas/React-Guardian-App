import React, { useState, useEffect, useContext } from "react";

// FIREBASE
import { auth } from "../firebase";

const AuthContext = React.createContext();
// This function alows us the use the context,
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  // Firebase has a method to set the user, rather than simply calling to change the user state. We can use auth.onAuthStateChanged with our user details (user). The reason we assign this function to the unsubscribe variable is because this onAuth.. function returns a method which unsubscribes us when the component dismounts. We only want this to run when the component mounts hence we we run this code inside a useEffect hook.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  // Now all we have to do is create the user like so...
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
