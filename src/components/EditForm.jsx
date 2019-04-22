import React, { Component } from "react"
import { genericHandleInputChange, getValidationClassForInput } from "../util"
import Meal, { isValidMealName, isValidMealCalories } from "../model/Meal"
import MealService from "../services/MealService"

const config = require("../cofig/config")

/*
  TODO:
    5 - take control of form inputs and link them to state + onChange (handleInputChange[Generic])  
    6 - Add OnClick event for all buttons and repective handlers
    7 - Form validation and dynamic validation classes at form inputs
    8 - onSubmit + handle submit "ok" ? addState("ok","success") : editingState("fail", "failure")
*/
class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mealName: props.meal.name,
      mealCalories: props.meal.calories,
      mealNameClasses: "",
      mealCaloriesClasses: ""
    }
  }

  render() {
    const { mealName, mealCalories } = this.state

    return (
      <div className="edit-form-container form-container">
        <div className="form-title">Add Meals</div>

        {/* Form Fields */}
        <div className="form-input-container">
          <input
            type="text"
            name="mealName"
            value={mealName}
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            onKeyUp={this.handleKeyUp}
            className={this.state.mealNameClasses}
            placeholder="Meal Name"
            autoFocus
          />
          <input
            type="number"
            name="mealCalories"
            value={mealCalories}
            onChange={this.handleInputChange}
            onBlur={this.handleBlur}
            onKeyUp={this.handleKeyUp}
            className={this.state.mealCaloriesClasses}
            placeholder="Meal Calories"
          />
        </div>

        {/* Form Buttons */}
        <div className="button-container">
          <button className="update-btn" onClick={this.handleUpdate}>
            <i className="fa fa-pencil-square-o" /> Update Meal
          </button>
          <button className="delete-btn" onClick={this.handleDelete}>
            <i className="fa fa-remove" /> Delete Meal
          </button>
          <button className="back-btn" onClick={this.handleBack}>
            <i className="fa fa-chevron-circle-left" /> Back
          </button>
        </div>
      </div>
    )
  } // render

  handleInputChange = event => genericHandleInputChange(event, this)

  handleBlur = () => this.validateForm()

  handleKeyUp = () => this.validateForm()

  validateForm = () => {
    const { mealName, mealCalories } = this.state
    this.setState({
      mealNameClasses: getValidationClassForInput(mealName, isValidMealName),
      mealCaloriesClasses: getValidationClassForInput(parseInt(mealCalories), isValidMealCalories)
    })
  }

  handleUpdate = () => {
    const name = this.state.mealName
    const calories = parseInt(this.state.mealCalories)

    if (isValidMealName(name) && isValidMealCalories(calories)) {
      const id = this.props.meal.id
      const updatedMeal = new Meal(id, name, calories)
      MealService.updateMeal(updatedMeal)
        .then(() => {
          this.props.onSetAddingState()
          this.props.onAlert("Meal Updated!", config.ALERT_SUCCESS)
        })
        .catch(err => console.log(err))
    } else {
      this.props.onSetEditingState()
      this.props.onAlert("Invalid Input. Please Check your values.", config.ALERT_FAILURE)
    }
  }

  handleDelete = event => console.log("Click Delete")

  handleBack = event => console.log("Click Back")
}

export default EditForm
