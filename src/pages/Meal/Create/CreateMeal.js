import React, { useState } from "react";
import { useHistory } from "react-router";
import { Button, Icon, Step } from "semantic-ui-react";
import MealForm from "../../../components/MealForm/MealForm";
import getDateString from "../../../services/utils/getDateString";
import postMeal from "../../../services/backend/postMeal";
import postPrice from "../../../services/backend/postPrice";
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
import MealPriceForm from "../../../components/MealPriceForm/MealPriceForm";

export default function CreateMeal() {
  const history = useHistory();
  const [meal, setMeal] = useState({
    name: "",
    date: getDateString(),
  });
  const [mealPrices, setMealPrices] = useState([
    { user_category_id: 1 },
    { user_category_id: 2 },
    { user_category_id: 3 },
    { user_category_id: 4 },
  ]);

  const [step, setStep] = useState(0);
  const [canteen] = useCanteen();

  const [mealTypes, setMealTypes] = useState([]);

  const createMeal = async () => {
    const _meal = await postMeal({ ...meal, canteen_id: canteen.id });
    for (let i in mealTypes) {
      await postMealHasMealType(_meal.id, {
        meal_type_id: mealTypes[i],
      });
    }
    for (let i in mealPrices) {
      await postPrice(_meal.id, mealPrices[i]);
    }
    history.push("/");
  };

  const formFilled = mealPrices[0].price && mealTypes.length > 0;

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
          <MealForm meal={meal} setMeal={setMeal} />
          <br />
          <MealPriceForm
            mealPrices={mealPrices}
            setMealPrices={setMealPrices}
          />
          <br />
          <CategoryForm
            mealHasMealTypes={mealTypes}
            deleteMealHasMealType={(id) =>
              setMealTypes(mealTypes.filter((mt) => mt !== id))
            }
            createMealHasMealType={(id) => setMealTypes([...mealTypes, id])}
          />
          <br />
          <br />
          <Button
            negative
            style={{ marginRight: "20px" }}
            onClick={() => {
              history.push("/");
            }}
          >
            Abbrechen
          </Button>
          <Button positive onClick={() => setStep(1)} disabled={!formFilled}>
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
            <br />- Studierende: {mealPrices[0].price} €
            <br />- Beschäftigte: {mealPrices[1].price} €
            <br />- Sonstige: {mealPrices[3].price} €
          </p>
          <p>Kategorien:</p>

          {mealTypeIds.map((mealType) => {
            const selected = mealTypes.reduce(
              (p, c) => p || c === mealType,
              false
            );
            return (
              <img
                key={mealType}
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
            style={{ marginRight: "20px" }}
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
