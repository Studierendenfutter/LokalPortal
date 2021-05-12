import React from "react";
import Container from "../../components/Container/Container";
import LoginForm from "../../components/LoginForm/LoginForm";

import "./Login.css";

export default function Login() {
  return (
    <div className="sf-canteen-user-login-page">
      <Container>
        <LoginForm />
      </Container>
    </div>
  );
}
