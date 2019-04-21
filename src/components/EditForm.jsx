import React, { Component } from "react"

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
      mealId: props.meal.id,
      mealName: props.meal.name,
      mealCalories: props.meal.calories
    }
  }

  handleInputChange = event => {
    const name = event.target.name
    const value = event.target.value
    this.setState({ [name]: value })
  }

  handleSubmit = event => {}

  render() {
    const { mealName, mealCalories } = this.state

    return (
      <div className="edit-form-container">
        <div className="form-title">Add Meals</div>

        <form onSubmit={this.handleSubmit}>
          {/* Form Fields */}
          <div className="input-container">
            <input
              type="text"
              name="mealName"
              value={mealName}
              onChange={this.handleInputChange}
              placeholder="Meal Name"
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
            <button id="update-btn" className="update-btn">
              <i className="fa fa-pencil-square-o" /> Update Meal
            </button>
            <button id="delete-btn" className="delete-btn">
              <i className="fa fa-remove" /> Delete Meal
            </button>
            <button id="back-btn" className="back-btn">
              <i className="fa fa-chevron-circle-left" /> Back
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default EditForm
