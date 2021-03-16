import React, { useState } from "react";
import { useParams } from "react-router";
import {
  Button,
  Dropdown,
  Header,
  Message,
  Segment,
  Table,
} from "semantic-ui-react";
import MealForm from "../../../components/MealForm";
import TableWrapper from "../../../components/TableWrapper";
import useMeal from "../../../services/hooks/useMeal";
import useMealHasMealTypes from "../../../services/hooks/useMealHasMealTypes";

const translations = {
  fish: "Fisch",
  meat: "Fleisch",
  vege: "Vegetarisch",
  vegan: "Vegan",
};

export default function PatchMeal() {
  const { mealId } = useParams();

  const [meal, setMeal] = useMeal(mealId);
  const [
    mealHasMealTypes,
    createMealHasMealType,
    deleteMealHasMealType,
  ] = useMealHasMealTypes(mealId);
  const [newMealTypeId, setNewMealTypeId] = useState(0);

  return (
    <div>
      <Header size="large">Gericht Bearbeiten</Header>
      <MealForm meal={meal} setMeal={setMeal} />
      <br />
      <div>
        <Header>Kategorien</Header>
        <TableWrapper
          columnNames={["Name", "Bild", ""]}
          content={mealHasMealTypes.map((mealHasMealTypes) => [
            <Table.Cell>{translations[mealHasMealTypes.name]}</Table.Cell>,
            <Table.Cell>
              <img
                alt={translations[mealHasMealTypes.name] + " image"}
                src={mealHasMealTypes.icon_url}
                style={{ width: "16px" }}
              />
            </Table.Cell>,
            <Table.Cell collapsing>
              <Button
                icon="trash"
                negative
                onClick={() => deleteMealHasMealType(mealHasMealTypes.id)}
              />
            </Table.Cell>,
          ])}
        />
        {mealHasMealTypes && mealHasMealTypes.length === 0 && (
          <Message warning>
            Diesem Gericht wurde noch keine Kategorie hinzugefügt. Es braucht
            mindestens eine Kategorie, um im Lunchletter angezeigt zu werden.{" "}
          </Message>
        )}
        <div>
          <Segment>
            <Header size="small">Kategorien hinzufügen</Header>
            <Dropdown
              placeholder="Wählen Sie eine Kategorie aus. "
              fluid
              search
              selection
              value={newMealTypeId}
              onChange={(_, { value }) => setNewMealTypeId(value)}
              label="Canteen"
              options={[
                { key: 1, value: 1, text: "Fleisch" },
                { key: 2, value: 2, text: "Fisch" },
                { key: 3, value: 3, text: "Vegetarisch" },
                { key: 4, value: 4, text: "Vegan" },
              ]}
            />
            <br />
            <Button
              positive
              content="Hinzufügen"
              onClick={() =>
                createMealHasMealType({
                  meal_id: mealId,
                  meal_type_id: newMealTypeId,
                })
              }
            />
          </Segment>
        </div>
      </div>
    </div>
  );
}
