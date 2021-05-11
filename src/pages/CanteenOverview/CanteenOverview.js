import React from "react";
import MealsListView from "../../components/MealsListView";
import useCanteenMeals from "../../services/hooks/useCanteenMeals";

export default function CanteenMeals({ filter }) {
  let [canteenMeals] = useCanteenMeals();

  if (canteenMeals && filter) {
    canteenMeals = canteenMeals.filter(filter);
  }

  return <MealsListView meals={canteenMeals} />;
}
