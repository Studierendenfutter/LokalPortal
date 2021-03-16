import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";

export default function MealForm({ meal, setMeal }) {
  const [localMeal, setLocalMeal] = useState(meal);

  useEffect(() => {
    setLocalMeal(meal);
  }, [meal]);

  if (!localMeal) {
    return null;
  }

  const handleMealUpdate = () => {
    let price = parseFloat(localMeal.price.replace(",", ".")).toString();
    console.log(price);
    setLocalMeal({ ...localMeal, price });
    setMeal({ ...localMeal, price });
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setLocalMeal({ ...meal, [name]: value });
  };

  return (
    <Form>
      <Form.Input
        value={localMeal.name}
        label="Name"
        name="name"
        onChange={handleFormChange}
        onBlur={handleMealUpdate}
      />
      <Form.Input
        value={localMeal.price}
        label="Preis"
        name="price"
        onChange={handleFormChange}
        onBlur={handleMealUpdate}
      />
      <Form.Input
        value={localMeal.date}
        label="Datum"
        name="date"
        onChange={handleFormChange}
        onBlur={handleMealUpdate}
      />
    </Form>
  );
}
