import React, { useEffect, useState } from "react";
import { Form, Header, Message } from "semantic-ui-react";

import "./MealPriceForm.css";

const inputLabels = {
  1: "für Studenten",
  2: "für Beschäftigte",
  4: "für Sonstige",
};

function parsePrice(price) {
  if (price === undefined) return;
  const formatedPrice = parseFloat((price + "").replace(",", "."));
  if (isNaN(formatedPrice)) {
    return;
  }
  return formatedPrice.toFixed(2);
}

export default function MealPriceForm({ mealPrices, setMealPrices }) {
  const [localMealPrices, setLocalMealPrices] = useState(mealPrices);
  useEffect(() => {
    setLocalMealPrices(mealPrices);
  }, [mealPrices]);

  if (!localMealPrices || localMealPrices.length !== 4) {
    return "";
  }

  const handleMealUpdate = () => {
    const _mealPrices = [...localMealPrices];
    for (let i in _mealPrices) {
      _mealPrices[i] = {
        ...mealPrices[i],
        price: parsePrice(_mealPrices[i].price),
      };
    }
    const price = _mealPrices.find((price) => price.price !== undefined);
    if (price) {
      for (let i in _mealPrices) {
        if (_mealPrices[i].price === undefined) {
          _mealPrices[i] = { ...mealPrices[i], price: price.price };
        }
      }
    }
    setMealPrices(_mealPrices);
  };

  return (
    <Form>
      <Header>Preis</Header>
      <Message
        warning
        visible={
          !(
            localMealPrices[0].price ||
            localMealPrices[1].price ||
            localMealPrices[3].price
          )
        }
      >
        Diesem Gericht wurde noch kein Preis hinzugefügt.
      </Message>

      <Form.Group widths="equal">
        {localMealPrices
          .sort(
            (firstPrice, secondPrice) =>
              firstPrice.user_category_id > secondPrice.user_category_id
          )
          .map((price, i) => {
            if (price.user_category_id !== 3)
              return (
                <Form.Input
                  key={price.user_category_id}
                  className="sf-canteen-user-price-input"
                  value={
                    price.price !== undefined
                      ? price.price
                      : localMealPrices[0].price ||
                        localMealPrices[1].price ||
                        localMealPrices[3].price ||
                        ""
                  }
                  label={inputLabels[price.user_category_id]}
                  name="price"
                  onChange={({ target: { value } }) => {
                    if (value === "") {
                      value = "0.00";
                    }
                    const _mealPrices = [...localMealPrices];
                    _mealPrices[i] = { ..._mealPrices[i], price: value };
                    setLocalMealPrices(_mealPrices);
                  }}
                  onBlur={handleMealUpdate}
                  icon="euro"
                />
              );

            return "";
          })}
      </Form.Group>
    </Form>
  );
}
