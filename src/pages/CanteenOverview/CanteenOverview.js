import React from "react";
import MealsListView from "../../components/MealsListView";
import useCanteenMeals from "../../services/hooks/useCanteenMeals";

export default function CanteenMeals() {
  const [canteenMeals] = useCanteenMeals();

  return <MealsListView meals={canteenMeals} />;
}
