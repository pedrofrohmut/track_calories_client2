import React, { Component } from "react"
import MealService from "../services/MealService"
import Meal from "../model/Meal"

class AppAddingState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mealName: "",
      mealCalories: 0,
      totalCalories: 0,
      meals: []
    }
  }

  /*
    TODO:
      1 getAllMealsFromAPI => MealsList => update list => update total calories
      2 OnAdd (submit + click) in the form     
      3 form validation => dynamic input classes ["", "input-valid", "input-invalid"]
      4 onSetEditState => add event handler to list pencils
  */

  componentDidMount = () => {
    MealService.getAllMeals()
      .then(meals => {
        // updateMealsList
        this.setState({ meals })
        // updateTotalCalories
        // ## TODO ##
      })
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const name = event.target.name
    const value =
      event.target === "checkbox" ? event.target.checked : event.target.value
    // console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  isValidMealName = name => {
    const regex = /^[a-zA-Z\s]{2,20}$/
    return regex.test(name)
  }

  isValidMealCalories = calories => {
    return typeof calories === "number" && calories > 0
  }

  getTotalCalories = meals => {
    return 0
  }

  handleSubmit = event => {
    event.preventDefault()

    const name = this.state.mealName
    const calories = parseInt(this.state.mealCalories)

    if (this.isValidMealName(name) && this.isValidMealCalories(calories)) {
      this.props.onSetLoadingState("Adding New Meal to database...")
      MealService.addMeal(new Meal(0, name, calories))
        .then(
          () =>
            this.props.onSetAddingState({
              msg: "Meal Added!",
              type: ALERT_SUCCESS
            }) // TODO: showAlert "meal added"
        )
        .catch(err => console.log(err)) // TODO: display cant conn state
    } else {
      // TODO: show Alert
      console.log("Form Values are not valid")
    }
  }

  render() {
    return (
      <React.Fragment>
        <h1>Adding State</h1>

        {/* Add Form */}
        <div className="form-container" id="meal-form-container">
          <div className="form-title">Add Meals</div>

          <form id="meal-form" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                id="meal-name"
                name="mealName"
                value={this.state.mealName}
                onChange={this.handleInputChange}
                placeholder="Meal Name"
                autoFocus
              />
              <input
                type="text"
                id="meal-calories"
                name="mealCalories"
                value={this.state.mealCalories}
                onChange={this.handleInputChange}
                placeholder="Meal Calories"
              />
            </div>
            <button type="submit" className="add-btn" id="add-btn">
              <i className="fa fa-plus" /> Add Meal
            </button>
          </form>
        </div>

        {/* Total Calories - show when truthy no else */}
        <h5 className="total-calories-header">
          {this.state.meals.length > 0 ? (
            <>
              Total Calories:{" "}
              <span id="total-calories" className="total-calories">
                {this.state.totalCalories}
              </span>
            </>
          ) : (
            <>No meals found at the database</>
          )}
        </h5>

        {/* Meals List - show when truthy no else */}
        {this.state.meals.length > 0 && (
          <ul id="meals-list" className="meals-list">
            {this.state.meals.map((meal, i) => (
              <li key={i}>
                <strong>{meal.name}</strong> <em>{meal.calories} Calories</em>
                <a
                  href="#"
                  className="edit-meal"
                  onClick={e => this.props.onSetEditingState(meal.id, e)}
                >
                  Edit <i className="fa fa-pencil" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

export default AppAddingState
