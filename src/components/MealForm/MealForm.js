import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
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
    setLocalMeal({ ...localMeal });
    setMeal({ ...localMeal });
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
        <label>Erscheint am</label>
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
      </Form.Field>
    </Form>
  );
}
