import React, { Component } from "react"
import MealService from "../services/MealService"

const config = require("../cofig/config")

class MealsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emptyDBMsg: "",
      totalCalories: 0,
      meals: []
    }
  }

  componentDidMount = () => {
    MealService.getAllMeals()
      .then(meals => {
        const totalCalories = meals.reduce((acc, curr) => acc + curr.calories, 0)
        this.setState({ meals, totalCalories })
        if (meals.length === 0) {
          this.setState({ emptyDBMsg: "Its empty! No meals to list from database." })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <>
        {this.state.emptyDBMsg && <p className="empty-db-msg">{this.state.emptyDBMsg}</p>}

        {this.state.meals.length > 0 && (
          <>
            <h5 className="total-calories-header">Total Calories: {this.state.totalCalories}</h5>

            <ul className="meals-list">
              {this.state.meals.map((meal, i) => (
                <li key={i}>
                  <strong>{meal.name}</strong> <em>{meal.calories} Calories</em>
                  <a href="#" className="edit-meal" onClick={e => this.handleClick(meal.id, e)}>
                    Edit <i className="fa fa-pencil" />
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </>
    )
  } // render

  handleClick = (mealId, event) => {
    event.preventDefault()
    this.props.onSetLoadingState("Getting Meal From Database...")
    MealService.getMeal(mealId)
      .then(meal => this.props.onSetEditingState(meal))
      .catch(err => console.log(err))
  }
}

export default MealsList
