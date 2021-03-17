import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Table } from "semantic-ui-react";
import TableWrapper from "../TableWrapper";
import deleteMeal from "../../services/backend/deleteMeal";
import UpdateModal from "../UpdateModal/UpdateModal";
import formatPrice from "../../services/utils/formatPrice";

export default function MealsListView({ meals }) {
  const [mealToBeDeleted, setMealToBeDeleted] = useState();
  if (!meals) {
    return null;
  }

  return (
    <div>
      <Button
        icon="add"
        as={Link}
        to={"/meals/create"}
        positive
        content="Gericht hinzufügen"
      />
      <TableWrapper
        columnNames={[
          "Gericht",
          "Erscheint am",
          "Preis",
          "Kategorien",
          "Aktion",
        ]}
        content={meals.map((meal) => [
          <Table.Cell>{meal.name}</Table.Cell>,
          <Table.Cell>
            {new Date(Date.parse(meal.date)).toLocaleDateString("de-DE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Table.Cell>,
          <Table.Cell>{formatPrice(meal.prices[0].price)} €</Table.Cell>,
          <Table.Cell collapsing>
            {meal.types.map((type) => (
              <img
                style={{ height: "15px" }}
                alt={type.name}
                src={type.icon_url}
              />
            ))}
          </Table.Cell>,
          <Table.Cell collapsing>
            <div>
              <Button as={Link} to={`/meals/${meal.id}`} icon primary>
                <Icon name="edit" />
                Bearbeiten
              </Button>
              <Button
                as={Button}
                onClick={() => setMealToBeDeleted(meal)}
                icon
                negative
              >
                <Icon name="trash" />
                Löschen
              </Button>
            </div>
          </Table.Cell>,
        ])}
      />
      {mealToBeDeleted && (
        <UpdateModal
          updateReadyData={mealToBeDeleted}
          update={async (meal) => {
            await deleteMeal(meal.id);
            window.location.reload();
          }}
          setUpdateReady={setMealToBeDeleted}
          header="Gericht löschen"
          text={`Sind Sie sicher, dass sie "${mealToBeDeleted.name}" löschen wollen?`}
          icon="trash"
        />
      )}
      {meals && meals.length === 0 && (
        <p>
          Sie haben noch keine Gerichte eingetragen.{" "}
          <Link to="/meals/create">Jetzt loslegen.</Link>
        </p>
      )}
    </div>
  );
}
