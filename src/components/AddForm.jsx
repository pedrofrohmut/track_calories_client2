import React, { Component } from "react"
import MealService from "../services/MealService"
import Meal, { isValidMealName, isValidMealCalories } from "../model/Meal"
import { genericHandleInputChange, getValidationClassForInput } from "../util"

const config = require("../cofig/config")

class AddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mealName: "",
      mealCalories: 0,
      mealNameClasses: "",
      mealCaloriesClasses: ""
    }
  }

  render() {
    return (
      <div className="add-form-container form-container">
        <div className="form-title">Add Meals</div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-input-container">
            <input
              type="text"
              name="mealName"
              value={this.state.mealName}
              onChange={this.handleInputChange}
              onKeyUp={this.handleKeyUp}
              onBlur={this.handleBlur}
              className={this.state.mealNameClasses}
              placeholder="Meal Name"
              autoFocus
            />
            <input
              type="number"
              name="mealCalories"
              value={this.state.mealCalories}
              onChange={this.handleInputChange}
              onKeyUp={this.handleKeyUp}
              onBlur={this.handleBlur}
              className={this.state.mealCaloriesClasses}
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

  handleKeyUp = () => this.validateAddForm()

  handleBlur = () => this.validateAddForm()

  validateAddForm = () => {
    const { mealName, mealCalories } = this.state
    this.setState({
      mealNameClasses: getValidationClassForInput(mealName, isValidMealName),
      mealCaloriesClasses: getValidationClassForInput(parseInt(mealCalories), isValidMealCalories)
    })
  }

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
