import React, { useState, useEffect } from "react";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";

// Amplify.configure(awsconfig);

// const signUpConfig = {
//   header: "Sign Up",
//   hideAllDefaults: true,
//   defaultCountCode: "1",
//   signUpFields: [
//     {
//       label: "User Name",
//       key: "username",
//       required: true,
//       displayOrder: 1,
//       type: "string",
//     },
//     {
//       label: "Email",
//       key: "email",
//       required: true,
//       displayOrder: 2,
//       type: "string",
//     },
//     {
//       label: "Password",
//       key: "password",
//       required: true,
//       displayOrder: 3,
//       type: "password",
//     },
//   ],
// };

// const signOut = () => {
//   Auth.signOut();
// };

function App() {
  const [authState, setAuthState] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  console.log("authState", authState);
  console.log("AuthState.SignedIn", AuthState.SignedIn);
  console.log("user", user);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
}

export default App;
