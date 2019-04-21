import React, { Component } from "react"
import MealService from "../services/MealService"

class MealsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalCalories: 0,
      meals: []
    }
  }

  componentDidMount = () => {
    MealService.getAllMeals()
      .then(meals => {
        const totalCalories = meals.reduce((acc, curr) => acc + curr.calories, 0)
        this.setState({ meals, totalCalories })
      })
      .catch(err => console.log(err))
  }

  getTotalCalories = meals => {
    return 0
  }

  render() {
    return (
      <>
        {/* Total Calories */}
        <h5 className="total-calories-header">
          {this.state.meals.length > 0 ? (
            <>
              Total Calories: <span className="total-calories">{this.state.totalCalories}</span>
            </>
          ) : (
            <>No meals found at the database</>
          )}
        </h5>

        {/* Meals List */}
        {this.state.meals.length > 0 && (
          <ul className="meals-list">
            {this.state.meals.map((meal, i) => (
              <li key={i}>
                <strong>{meal.name}</strong> <em>{meal.calories} Calories</em>
                <a href="#" className="edit-meal" onClick={e => this.props.onSetEditingState(meal.id, e)}>
                  Edit <i className="fa fa-pencil" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default MealsList
