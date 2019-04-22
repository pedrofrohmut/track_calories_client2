import React, { Component } from "react"
import { genericHandleInputChange } from "../util"

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
      mealCalories: props.meal.calories
    }
  }

  render() {
    const { mealName, mealCalories } = this.state

    return (
      <div className="edit-form-container">
        <div className="form-title">Add Meals</div>

        {/* Form Fields */}
        <div className="input-container">
          <input
            type="text"
            name="mealName"
            value={mealName}
            onChange={this.handleInputChange}
            placeholder="Meal Name"
            autoFocus
          />
          <input
            type="number"
            name="mealCalories"
            value={mealCalories}
            onChange={this.handleInputChange}
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

  handleUpdate = event => console.log("Click Update")

  handleDelete = event => console.log("Click Delete")

  handleBack = event => console.log("Click Back")
}

export default EditForm
