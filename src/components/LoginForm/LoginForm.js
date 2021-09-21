import React, { useState } from "react";
import { Form, Message } from "semantic-ui-react";
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
      <Form onSubmit={login}>
        <h2>Login</h2>
        <p>Geben Sie Ihre E-Mail und Ihr Passwort an.</p>
        {showErrorMessage && (
          <Message negative>
            Bitte versuche Sie eine andere E-Mail oder ein anderes Passwort.
          </Message>
        )}
        <Form.Input
          label="E-Mail"
          type="text"
          placeholder="Ihre E-Mail-Adresse"
          value={loginData.email}
          name="email"
          onChange={({ target: { value } }) => {
            const cleanedValue = value.replace(" ", "");
            setLoginData({ ...loginData, email: cleanedValue });
          }}
        />
        <Form.Input
          label="Passwort"
          type="password"
          placeholder="Ihr Passwort"
          value={loginData.password}
          name="password"
          onChange={changeForm}
        />
        <Form.Button fluid type="submit" positive>
          Login
        </Form.Button>
      </Form>
      <Message>
        {" "}
        Können wir Ihnen weiterhelfen? Einfach eine E-Mail an{" "}
        <a href="mailto:moin@studierendenfutter.de">
          moin@studierendenfutter.de
        </a>{" "}
        schicken.{" "}
      </Message>
    </div>
  );
}
