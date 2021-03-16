import React, { useState } from "react";
import { Form, Header, Button, Segment, Message } from "semantic-ui-react";
import postCanteenUserLogin from "../../services/backend/postCanteenUserLogin";

export default function LoginForm() {
  const [loginData, setLoginData] = useState({ password: "", email: "" });
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const changeForm = ({ target: { value, name } }) => {
    setLoginData({ ...loginData, [name]: value });
  };

  const login = async () => {
    const err = await postCanteenUserLogin(loginData);
    if (!err) window.location.reload();
    else {
      setShowErrorMessage(true);
      setTimeout(() => setShowErrorMessage(false), 5000);
    }
  };

  return (
    <div>
      <Segment>
        <Form>
          <Header>Login</Header>
          {showErrorMessage && (
            <Message negative>
              Bitte versuche Sie eine andere E-Mail oder ein anderes Password .
            </Message>
          )}
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
