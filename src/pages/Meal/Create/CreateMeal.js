import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Header, Message } from "semantic-ui-react";
import MealForm from "../../../components/MealForm/MealForm";
import getDateString from "../../../services/utils/getDateString";
import postMeal from "../../../services/backend/postMeal";
import useCanteen from "../../../services/hooks/useCanteen";

export default function CreateMeal() {
  const history = useHistory();
  const [meal, setMeal] = useState({
    name: "",
    date: getDateString(),
    price: "",
  });
  const [canteen] = useCanteen();

  const createMeal = async () => {
    const _meal = await postMeal({ ...meal, canteen_id: canteen.id });
    history.push("/meals/" + _meal.id);
  };

  return (
    <div>
      <Header size="large">Gericht erstellen</Header>
      <Message info>
        Tragen Sie den Namen und Preis des Gerichtes ein und klicken sie
        anschließend auf "Erstellen".
      </Message>
      <MealForm meal={meal} setMeal={setMeal} />
      <br />
      <Button icon="send" positive onClick={createMeal}>
        Erstellen
      </Button>
      <Button
        icon="send"
        negative
        basic
        onClick={() => {
          history.push("/");
        }}
      >
        Abbrechen
      </Button>
    </div>
  );
}
