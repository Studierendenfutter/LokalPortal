import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import useUserCategories from "../../services/hooks/useUserCategories";

export default function MealPriceForm({ mealPrice, setMealPrice }) {
  const [localMealPrice, setLocalMealPrice] = useState(mealPrice);
  const userCategories = useUserCategories();

  useEffect(() => {
    setLocalMealPrice(mealPrice);
  }, [mealPrice]);

  if (!localMealPrice) {
    return null;
  }

  const handleMealUpdate = () => {
    setMealPrice(localMealPrice);
  };

  const handleFormChange = ({ target: { name, value } }) => {
    setLocalMealPrice({ ...mealPrice, [name]: value });
  };

  return (
    <Form>
      <Form.Dropdown
        placeholder="Select User Category"
        fluid
        search
        selection
        value={localMealPrice.user_category_id}
        onChange={(_, { value }) =>
          handleFormChange({ target: { name: "user_category_id", value } })
        }
        onBlur={handleMealUpdate}
        label="User Group"
        options={userCategories.map((user_category) => ({
          key: user_category.id,
          value: user_category.id,
          text: user_category.name,
        }))}
      />

      <Form.Input
        value={localMealPrice.price}
        label="Price"
        name="price"
        onChange={handleFormChange}
        onBlur={handleMealUpdate}
        icon="euro"
      />
    </Form>
  );
}
