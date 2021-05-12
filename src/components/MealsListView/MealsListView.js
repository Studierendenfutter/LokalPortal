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
          <Table.Cell>
            <nobr>{formatPrice(meal.prices[0].price)} €</nobr>
          </Table.Cell>,
          <Table.Cell collapsing>
            {meal.types.map((type) => (
              <img
                style={{ height: "15px" }}
                alt={type.name}
                src={type.icon_url}
              />
            ))}
          </Table.Cell>,
          <Table.Cell>
            <div>
              <Button as={Link} to={`/meals/${meal.id}`} icon primary>
                <Icon name="pencil" />
                Bearbeiten
              </Button>
              <Button
                as={Button}
                onClick={() => setMealToBeDeleted(meal)}
                icon
                negative
              >
                <Icon name="trash alternate outline" />
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
          text={`Sind Sie sicher, dass Sie "${mealToBeDeleted.name}" löschen wollen?`}
          icon="trash"
        />
      )}
      {meals && meals.length === 0 && (
        <p>Sie haben noch keine Gerichte eingetragen.</p>
      )}
      <Button
        icon="add"
        as={Link}
        to={"/meals/create"}
        primary
        content="Gericht hinzufügen"
      />
    </div>
  );
}
