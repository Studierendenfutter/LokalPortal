import React, { useEffect, useState } from "react";
import { Form, Input, Label } from "semantic-ui-react";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import getDateString from "../../services/utils/getDateString";
import de from "date-fns/locale/de";
registerLocale("de", de);

export default function MealForm({ meal, setMeal }) {
  const [localMeal, setLocalMeal] = useState(meal);

  useEffect(() => {
    setLocalMeal(meal);
  }, [meal]);

  if (!localMeal) {
    return null;
  }

  const handleMealUpdate = () => {
    let price = parseFloat((localMeal.price + "").replace(",", ".")).toString();
    if (isNaN(price)) {
      price = "";
    }
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
        label="Gericht"
        name="name"
        placeholder="Unter welchem Namen soll Ihr Gericht erscheinen?"
        onChange={handleFormChange}
        onBlur={handleMealUpdate}
      />
      <Form.Field>
        <label>Preis</label>
        <Input
          value={localMeal.price}
          name="price"
          placeholder="Welchen Preis hat Ihr Gericht?"
          onChange={handleFormChange}
          onBlur={handleMealUpdate}
          icon="euro"
        />
      </Form.Field>
      <Form.Field>
        <label>Datum</label>
        <Form.Input
          value={new Date(Date.parse(localMeal.date))}
          selected={new Date(Date.parse(localMeal.date))}
          label="Datum"
          locale="de"
          dateFormat="dd/MM/yyyy"
          as={DatePicker}
          name="date"
          onChange={(date) => {
            setLocalMeal({ ...localMeal, date: getDateString(date) });
            setMeal({ ...localMeal, date: getDateString(date) });
          }}
          icon="euro sign"
        />
        <Label pointing="left" color="blue">
          An diesem Datum erscheint das Gericht.
        </Label>
      </Form.Field>
    </Form>
  );
}
