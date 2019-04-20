import React from "react"

function AppEditingState(props) {
  return (
    <React.Fragment>
      <h1>Editing State</h1>
      
      {/* Edit Form */}
      <div className="form-container" id="meal-form-container">
        <div className="form-title">Add Meals</div>

        <form id="meal-form">
          {/* Form Fields */}
          <input type="hidden" id="meal-id" defaultValue={props.meal.id} />
          <div className="input-container">
            <input
              type="text"
              id="meal-name"
              defaultValue={props.meal.name}
              placeholder="Meal Name"
            />
            <input
              type="number"
              id="meal-calories"
              defaultValue={props.meal.calories}
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
    </React.Fragment>
  )
}

export default AppEditingState
