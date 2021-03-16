import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import TableWrapper from "../TableWrapper";
import deleteMeal from "../../services/backend/deleteMeal";

export default function MealsListView({ meals }) {
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
        columnNames={["Id", "Meal Name", "Date", "Action"]}
        content={meals.map((meal) => [
          <Table.Cell>{meal.id}</Table.Cell>,
          <Table.Cell>{meal.name}</Table.Cell>,
          <Table.Cell>{meal.date}</Table.Cell>,
          <Table.Cell collapsing>
            <div>
              <Button
                as={Link}
                to={`/meals/${meal.id}`}
                icon="edit"
                primary
              ></Button>
              <Button
                as={Button}
                onClick={async () => {
                  await deleteMeal(meal.id);
                  window.location.reload();
                }}
                icon="trash"
                negative
              ></Button>
            </div>
          </Table.Cell>,
        ])}
      />
      {meals && meals.length === 0 && (
        <p>
          Sie haben noch keine Gerichte eingetragen.{" "}
          <Link to="/meals/create">Jetzt loslegen.</Link>
        </p>
      )}
    </div>
  );
}
