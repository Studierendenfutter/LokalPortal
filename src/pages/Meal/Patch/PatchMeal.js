import React from "react";
import { useParams } from "react-router";
import { Header } from "semantic-ui-react";
import CategoryForm from "../../../components/CategoryForm/CategoryForm";
import Container from "../../../components/Container/Container";
import MealForm from "../../../components/MealForm";
import useMeal from "../../../services/hooks/useMeal";

export default function PatchMeal() {
  const { mealId } = useParams();

  const [meal, setMeal] = useMeal(mealId);

  return (
    <Container>
      <Header size="large">Gericht Bearbeiten</Header>
      <MealForm meal={meal} setMeal={setMeal} />
      <br />
      <CategoryForm mealId={mealId} />
    </Container>
  );
}
