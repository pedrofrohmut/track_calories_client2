import React, { Component } from "react"
import MealService from "../services/MealService"

class AppAddingState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meal: {
        id: "",
        name: "",
        calories: 0
      },
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
    MealService
      .getAllMeals()
      .then(meals => {
        // updateMealsList
        this.setState({ meals })

        // updateTotalCalories
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        <h1>Adding State</h1>
        <button onClick={this.props.onSetEditingState}>EditState</button>
        <h3>{this.props.test}</h3>

        {/* Add Form */}
        <div className="form-container" id="meal-form-container">
          <div className="form-title">Add Meals</div>

          <form id="meal-form">
            <div className="input-container">
              <input type="text" id="meal-name" defaultValue={this.state.meal.name} placeholder="Meal Name" autoFocus />
              <input type="number" id="meal-calories" defaultValue={this.state.meal.calories} placeholder="Meal Calories" />
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
                0
              </span>
            </>
          ) : (
            <>No meals found at the database</>
          )}
        </h5>

        {/* Meals List - show when truthy no else */}
        {this.state.meals.length > 0 && (
          <ul id="meals-list" className="meals-list">
            
            {this.state.meals.map((meal, i) => 
              <li key={i}>
                <strong>{meal.name}</strong> <em>{meal.calories} Calories</em>
                <a href="#" className="edit-meal" onClick={e => this.props.onSetEditingState(meal.id, e)}>
                  Edit {" "} <i className="fa fa-pencil"></i>
                </a>
              </li>  
            )}

            {/* <li id="item-0">
              <strong>Steak Dinner:</strong> <em>1200 Calories</em>
              <a className="edit-meal-link" href="#" data-meal-id="">
                <i className="fa fa-pencil" />
              </a>
            </li>
            <li id="item-0">
              <strong>Cookie:</strong> <em>400 Calories</em>
              <a className="edit-meal-link" href="#" data-meal-id="">
                <i className="fa fa-pencil" />
              </a>
            </li>
            <li id="item-0">
              <strong>Eggs:</strong> <em>300 Calories</em>
              <a className="edit-meal-link" href="#" data-meal-id="">
                <i className="fa fa-pencil" />
              </a>
            </li> */}
          </ul>
        )}
      </React.Fragment>
    )
  }
}

export default AppAddingState
