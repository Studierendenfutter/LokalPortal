import React from "react";
import { useParams } from "react-router";
import { Header } from "semantic-ui-react";
import CategoryForm from "../../../components/CategoryForm/CategoryForm";
import MealForm from "../../../components/MealForm";
import useMeal from "../../../services/hooks/useMeal";
import useMealHasMealTypes from "../../../services/hooks/useMealHasMealTypes";
import formatDate from "../../../services/utils/formatDate";

import "./PatchMeal.css";

export default function PatchMeal() {
  const { mealId } = useParams();

  const [meal, setMeal] = useMeal(mealId);
  const [
    mealTypes,
    createMealType,
    deleteMealHasMealType,
  ] = useMealHasMealTypes(mealId);

  return (
    <div className="sf-canteen-user-patch-meal-page">
      <h1 size="large">Gericht bearbeiten</h1>
      <p className="sf-canteen-user-page-date">{formatDate(new Date())}</p>

      <MealForm meal={meal} setMeal={setMeal} />
      <br />
      <CategoryForm
        mealHasMealTypes={mealTypes.map((type) => type.meal_type_id)}
        createMealHasMealType={createMealType}
        deleteMealHasMealType={(typeId) =>
          deleteMealHasMealType(
            mealTypes.find((mealType) => mealType.meal_type_id === typeId).id
          )
        }
      />
    </div>
  );
}
