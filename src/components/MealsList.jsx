import React, { Component } from "react"
import MealService from "../services/MealService"
import Loading from "./Loading"

class MealsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      totalCalories: 0,
      meals: []
    }
  }

  componentDidMount = () => {
    MealService.getAllMeals()
      .then(meals => {
        const totalCalories = meals.reduce((acc, curr) => acc + curr.calories, 0)
        const isLoading = false
        this.setState({ meals, totalCalories, isLoading })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { isLoading, totalCalories, meals } = this.state
    return (
      <>
        {isLoading ? (
          <Loading loadingMsg={"Getting Meals from database..."} />
        ) : meals.length === 0 ? (
          <p className="empty-db-msg">Its empty! No meals to list from database.</p>
        ) : (
          <>
            <h5 className="total-calories-header">Total Calories: {totalCalories}</h5>

            <ul className="meals-list">
              {meals.map((meal, i) => (
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
