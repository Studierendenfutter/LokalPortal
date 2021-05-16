import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Header, Icon, Message, Step } from "semantic-ui-react";
import MealForm from "../../../components/MealForm/MealForm";
import getDateString from "../../../services/utils/getDateString";
import postMeal from "../../../services/backend/postMeal";
import postMealHasMealType from "../../../services/backend/postMealHasMealType";
import useCanteen from "../../../services/hooks/useCanteen";
import CategoryForm from "../../../components/CategoryForm/CategoryForm";
import formatDate from "../../../services/utils/formatDate";

import {
  mealTypeIds,
  mealTypesImageSrc,
  mealTypesTranslations,
} from "../../../constants";

import "./CreateMeal.css";

export default function CreateMeal() {
  const history = useHistory();
  const [meal, setMeal] = useState({
    name: "",
    date: getDateString(),
    price: "",
  });

  const [step, setStep] = useState(0);
  const [canteen] = useCanteen();

  const [mealTypes, setMealTypes] = useState([]);

  const createMeal = async () => {
    const _meal = await postMeal({ ...meal, canteen_id: canteen.id });
    console.log(_meal);
    for (let mealType in mealTypes) {
      let mealTypeId = mealTypes[mealType];
      const x = await postMealHasMealType(_meal.id, {
        meal_type_id: mealTypeId,
      });
      console.log(x);
    }
    history.push("/");
  };

  return (
    <div className="sf-canteen-user-create-meal-page">
      <h1>Meine Gerichte heute im Lunchletter</h1>
      <p className="sf-canteen-user-page-date">{formatDate(new Date())}</p>
      <Step.Group widths={3}>
        <Step
          active={step === 0}
          link
          onClick={() => setStep(0)}
          className="done"
        >
          <Icon name="food" color="green" />
          <Step.Content>
            <Step.Title>Gericht erstellen</Step.Title>
          </Step.Content>
        </Step>
        <Step
          active={step === 1}
          disabled={step < 1}
          link
          className={step > 0 ? "done" : ""}
        >
          <Icon name="info" color={step < 1 ? "grey" : "green"} />
          <Step.Content>
            <Step.Title>Bestätigen</Step.Title>
          </Step.Content>
        </Step>
      </Step.Group>
      {step === 0 && (
        <>
          <Message>
            Tragen Sie den Namen und Preis des Gerichtes ein. Wählen Sie das
            Datum aus an dem das Gericht erscheinen soll und klicken Sie
            anschließend auf "Weiter".
          </Message>
          <MealForm meal={meal} setMeal={setMeal} />
          <br />
          <CategoryForm
            mealHasMealTypes={mealTypes}
            deleteMealHasMealType={(id) =>
              setMealTypes(mealTypes.filter((mt) => mt !== id))
            }
            createMealHasMealType={(id) => setMealTypes([...mealTypes, id])}
          />
          <br />
          <Button
            negative
            onClick={() => {
              history.push("/");
            }}
          >
            Abbrechen
          </Button>
          <Button positive onClick={() => setStep(1)}>
            Weiter
          </Button>
        </>
      )}
      {step === 1 && (
        <>
          <h2>Stimmt alles?</h2>
          <p>{meal.name}</p>
          <p>Erscheint am {formatDate(new Date(meal.date))}</p>
          <p>
            Preise:
            <br />- Studierende: {meal.price} €
            <br />- Beschäftigte: {meal.price} €
            <br />- Sonstige: {meal.price} €
          </p>
          <p>Kategorien:</p>

          {mealTypeIds.map((mealType) => {
            const selected = mealTypes.reduce(
              (p, c) => p || c === mealType,
              false
            );
            return (
              <img
                src={
                  selected
                    ? mealTypesImageSrc[mealType][0]
                    : mealTypesImageSrc[mealType][1]
                }
                alt={mealTypesTranslations[mealType]}
                height="50"
              />
            );
          })}
          <br />
          <br />
          <Button
            negative
            onClick={() => {
              setStep(0);
            }}
          >
            Zurück
          </Button>
          <Button positive onClick={() => createMeal()}>
            Anlegen
          </Button>
        </>
      )}
    </div>
  );
}
