import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Header, Message } from "semantic-ui-react";
import MealForm from "../../../components/MealForm/MealForm";
import getDateString from "../../../services/utils/getDateString";
import postMeal from "../../../services/backend/postMeal";
import useCanteen from "../../../services/hooks/useCanteen";
import CategoryForm from "../../../components/CategoryForm/CategoryForm";
import Container from "../../../components/Container/Container";

export default function CreateMeal() {
  const history = useHistory();
  const [meal, setMeal] = useState({
    name: "",
    date: getDateString(),
    price: "",
  });
  const [canteen] = useCanteen();
  const [globalMeal, setGlobalMeal] = useState();
  const createMeal = async () => {
    const _meal = await postMeal({ ...meal, canteen_id: canteen.id });
    setGlobalMeal(_meal);
  };

  return (
    <Container>
      {" "}
      <Header size="large">
        {globalMeal
          ? `"${globalMeal.name}" Kategorien hinzufügen`
          : `Neues Gericht anlegen`}
      </Header>
      {!globalMeal && (
        <>
          <Message info>
            Tragen Sie den Namen und Preis des Gerichtes ein. Wählen Sie das
            Datum aus an dem das Gericht erscheinen soll und klicken Sie
            anschließend auf "Weiter".
          </Message>
          <MealForm meal={meal} setMeal={setMeal} />
          <br />
          <Button
            icon="send"
            negative
            onClick={() => {
              history.push("/");
            }}
          >
            Abbrechen
          </Button>
          <Button icon="send" positive onClick={createMeal}>
            Weiter
          </Button>
        </>
      )}
      {globalMeal && (
        <>
          <CategoryForm mealId={globalMeal.id} />
          <br />
          <Button positive onClick={() => history.push("/")}>
            Fertig
          </Button>
        </>
      )}
    </Container>
  );
}
