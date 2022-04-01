import React from "react";
import LoginCard from "../components/auth-pages/LoginCard";

function Login() {
  return (
    <main style={{ top: "5rem", minHeight: "100vh" }}>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>

      <div className="relative w-full flex justify-center align-items-center">
        <LoginCard />
      </div>
      <div className="spacer-3rem"></div>
      <div className="spacer-3rem"></div>
    </main>
  );
}

export default Login;
