const Meal = function(id, name, calories) {
  this.id = id
  this.name = name
  this.calories = calories
}

export const isValidMealName = name => {
  const regex = /^[a-zA-Z\s]{2,20}$/
  return regex.test(name)
}

export const isValidMealCalories = calories => {
  return typeof calories === "number" && calories > 0
}

export default Meal
