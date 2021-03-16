import React, { useState } from "react";
import { Form, Header, Button, Segment } from "semantic-ui-react";
import postCanteenUserLogin from "../../services/backend/postCanteenUserLogin";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({ password: "", email: "" });
  
  const changeForm = ({ target: { value, name } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const login = async () => {
    await postCanteenUserLogin(loginData);
    window.location.reload();
  };

  return (
    <div>
      <Segment>
        <Form>
          <Header>Login</Header>
          <Form.Input
            label="E-Mail"
            type="text"
            value={loginData.email}
            name="email"
            onChange={changeForm}
          />
          <Form.Input
            label="Password"
            type="password"
            value={loginData.password}
            name="password"
            onChange={changeForm}
          />
          <Button type="button" positive onClick={login}>
            Login
          </Button>
        </Form>
      </Segment>
    </div>
  );
}
