import postMeal from "./postMeal";
import postMealHasMealType from "./postMealHasMealType";
import postPrice from "./postPrice";

export default async function createMeal(
  meal,
  canteenId,
  mealTypes,
  mealPrices
) {
  const _meal = await postMeal({ ...meal, canteen_id: canteenId });
  for (let i in mealTypes) {
    await postMealHasMealType(_meal.id, {
      meal_type_id: mealTypes[i],
    });
  }
  for (let i in mealPrices) {
    await postPrice(_meal.id, mealPrices[i]);
  }
  return _meal;
}
