import React, { Component } from "react"
import MealService from "../services/MealService"
import Alert from "./Alert"
import AddForm from "./AddForm"

class AppAddingState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasAlert: props.alertMsg ? true : false,
      totalCalories: 0,
      meals: []
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ hasAlert: false })
    }, 1500)

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
      <React.Fragment>
        {/* Alert */}
        {this.state.hasAlert && <Alert msg={this.props.alertMsg} type={this.props.alertType} />}

        {/* Add Form */}
        <AddForm onSetLoadingState={this.props.onSetLoadingState} onSetAddingState={this.props.onSetAddingState} />

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
                <a href="#" className="edit-meal" onClick={e => this.props.onSetEditingState(meal.id, e)}>
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
