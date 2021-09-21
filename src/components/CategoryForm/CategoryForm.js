import React from "react";
import { Header, Message, Popup } from "semantic-ui-react";

import "./CategoryForm.css";
import {
  mealTypeIds,
  mealTypesImageSrc,
  mealTypesTranslations,
} from "../../constants";
export default function CategoryForm({
  mealHasMealTypes,
  createMealHasMealType,
  deleteMealHasMealType,
}) {
  return (
    <div>
      <Header>Kategorien</Header>

      {mealHasMealTypes && mealHasMealTypes.length === 0 && (
        <Message warning>
          Diesem Gericht wurde noch keine Kategorie hinzugefügt. Es braucht
          mindestens eine Kategorie, um im Lunchletter angezeigt zu werden.{" "}
        </Message>
      )}
      {mealTypeIds.map((mealType) => {
        const selected = mealHasMealTypes.reduce(
          (p, c) => p || c === mealType,
          false
        );
        return (
          <Popup
            content={mealTypesTranslations[mealType]}
            inverted
            basic
            position="right center"
            trigger={
              <button
                className="sf-canteen-user-category-button"
                onClick={() =>
                  selected
                    ? deleteMealHasMealType(mealType)
                    : createMealHasMealType(mealType)
                }
              >
                <img
                  src={
                    selected
                      ? mealTypesImageSrc[mealType][0]
                      : mealTypesImageSrc[mealType][1]
                  }
                  alt={mealTypesTranslations[mealType]}
                  height="50"
                />
              </button>
            }
          />
        );
      })}
    </div>
  );
}
