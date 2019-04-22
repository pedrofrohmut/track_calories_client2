import React, { Component } from "react"
import MealService from "../services/MealService"
import Meal, { isValidMealName, isValidMealCalories } from "../model/Meal"
import { genericHandleInputChange } from "../util"

const config = require("../cofig/config")

class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mealName: "",
      mealCalories: 0
    }
  }

  render() {
    return (
      <div className="add-form-container">
        <div className="form-title">Add Meals</div>

        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="mealName"
              value={this.state.mealName}
              onChange={this.handleInputChange}
              placeholder="Meal Name"
              autoFocus
            />
            <input
              type="number"
              name="mealCalories"
              value={this.state.mealCalories}
              onChange={this.handleInputChange}
              placeholder="Meal Calories"
            />
          </div>
          <button type="submit" className="add-btn">
            <i className="fa fa-plus" /> Add Meal
          </button>
        </form>
      </div>
    )
  }

  handleInputChange = event => genericHandleInputChange(event, this)

  handleSubmit = event => {
    event.preventDefault()

    const name = this.state.mealName
    const calories = parseInt(this.state.mealCalories)

    if (isValidMealName(name) && isValidMealCalories(calories)) {
      this.props.onSetLoadingState("Adding New Meal to database...")
      MealService.addMeal(new Meal(0, name, calories))
        .then(() => {
          this.props.onSetAddingState()
          this.props.onAlert("Meal Added!", config.ALERT_SUCCESS)
        })
        .catch(err => console.log(err)) // TODO: display cant conn state
    } else {
      this.props.onSetAddingState()
      this.props.onAlert("Invalid Input. Please Check your values.", config.ALERT_FAILURE)
    }
  }
}

export default AddForm
