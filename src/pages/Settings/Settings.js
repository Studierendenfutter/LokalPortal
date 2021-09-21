import React, { useEffect, useState } from "react";
import { Button, Form, Message, Radio } from "semantic-ui-react";
import useCanteen from "../../services/hooks/useCanteen";
import useCanteenUser from "../../services/hooks/useCanteenUser";

import "./Settings.css";

export default function () {
  const [canteen, updateCanteen] = useCanteen();
  const [canteenUser, updateCanteenUser] = useCanteenUser();
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [passwordEqual, setPasswordEqual] = useState(true);

  useEffect(() => {
    setEmail(canteenUser.email);
  }, [canteenUser]);

  return (
    <div className="sf-canteen-user-settings-page">
      <div>
        <h1>Restaurantdaten</h1>
        {canteen && (
          <table className="sf-canteen-user-settings-table">
            <tr>
              <td className="sf-canteen-user-settings-table-data-label">
                <b>Restaurant</b>
              </td>
              <td>{canteen.name}</td>
              <td className="sf-canteen-user-settings-table-data-explanation">
                So erscheint das Restaurant im Lunchletter
              </td>
            </tr>
            <tr>
              <td className="sf-canteen-user-settings-table-data-label">
                <b>Hinterlegte Website</b>
              </td>
              <td>{canteen.link}</td>
              <td className="sf-canteen-user-settings-table-data-explanation">
                Diese Seite ist als URL hinter dem "Location-Link" im
                Lunchletter hinterlegt
              </td>
            </tr>
            <tr>
              <td className="sf-canteen-user-settings-table-data-label">
                <b>Bestellen Button anzeigen?</b>
              </td>
              <td>
                <Radio
                  checked={canteen.show_order_url === 1}
                  toggle
                  onChange={() =>
                    updateCanteen({
                      show_order_url: canteen?.show_order_url === 0,
                    })
                  }
                />
              </td>
              <td className="sf-canteen-user-settings-table-data-explanation">
                Aktiviert im Lunchletter einen Button zum Bestellen der
                Gerichte.
              </td>
            </tr>
            <tr style={canteen.show_order_url ? {} : { color: "#BBBBBB" }}>
              <td className="sf-canteen-user-settings-table-data-label">
                <b>Bestell-Website</b>
              </td>
              <td>{canteen.order_url}</td>
              <td
                className="sf-canteen-user-settings-table-data-explanation"
                style={canteen.show_order_url ? {} : { color: "#BBBBBB" }}
              >
                Diese Seite ist hinter dem Bestellen Button hinterlegt.
              </td>
            </tr>
            <tr>
              <td className="sf-canteen-user-settings-table-data-label">
                <b>Adresse</b>
              </td>
              <td>{canteen.address}</td>
              <td className="sf-canteen-user-settings-table-data-explanation"></td>
            </tr>
          </table>
        )}
      </div>
      <div style={{ width: "300px" }}>
        <h1>Mein Account</h1>
        <h3>E-Mail</h3>
        <Form onSubmit={() => updateCanteenUser({ email })}>
          <Form.Field>
            <Form.Input
              value={email}
              onChange={(_, data) => {
                setEmail(data.value);
              }}
            />
          </Form.Field>
          <Button type="submit" positive fluid>
            E-Mail Speichern
          </Button>
        </Form>
        <br />
        <br />
        <Form
          onSubmit={() =>
            password === passwordCheck
              ? updateCanteenUser({ password })
              : setPasswordEqual(false)
          }
        >
          {!passwordEqual && (
            <Message>Die Passwörter stimmen nicht überein.</Message>
          )}
          <h3>Passwort ändern</h3>
          <Form.Field>
            <label>Neues Passwort</label>
            <Form.Input
              value={password}
              name="old-password"
              type="password"
              onChange={(_, data) => {
                setPassword(data.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Neues Passwort bestätigen</label>
            <Form.Input
              value={passwordCheck}
              name="new-password"
              type="password"
              onChange={(_, data) => {
                setPasswordCheck(data.value);
              }}
            />
          </Form.Field>
          <Button type="submit" positive fluid>
            Password speichern
          </Button>
        </Form>
      </div>
    </div>
  );
}
