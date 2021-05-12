import React from "react";
import useCanteen from "../../services/hooks/useCanteen";

import "./Settings.css";

export default function () {
  const [canteen] = useCanteen();
  console.log(canteen);
  return (
    <div className="sf-canteen-user-settings-page">
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
              Diese Seite ist als URL hinter dem "Location-Link" im Lunchletter
              hinterlegt
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
  );
}
