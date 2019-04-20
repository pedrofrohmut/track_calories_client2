/**
 * Root Component For the entire App
 */
import React, { Component } from "react"
import AppAddingState from "./components/AppAddingState"
import AppEditingState from "./components/AppEditingState"
import AppLoadingState from "./components/AppLoadingState"
import AppCantConnectState from "./components/AppCantConnectState"
import MealService from "./services/MealService"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentState: this.getAppAddingState()
    }
  }

  getAppAddingState = () => <AppAddingState onSetEditingState={this.handleOnEdit} />

  getAppEditingState = mealToEdit => <AppEditingState meal={mealToEdit} />

  getAppLoadingState = () => <AppLoadingState />

  getAppCantConnectState = () => <AppCantConnectState />

  displayAddState = () => {
    this.setState({
      currentState: this.getAppAddingState()
    })
  }

  displayEditState = () => {
    this.setState({
      currentState: this.getAppEditingState()
    })
  }

  displayLoadingState = () => {
    this.setState({
      currentState: this.getAppLoadingState()
    })
  }

  displayCantConnectState = () => {
    this.setState({
      currentState: this.getAppCantConnectState()
    })
  }

  handleOnEdit = (mealId, e) => {
    e.preventDefault()
    this.displayLoadingState()
    MealService.getMeal(mealId)
      .then(meal => this.displayEditState(meal))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <React.Fragment>
        {/* NavBar + Brand */}
        <nav className="navbar">
          <div className="container">
            <a href="/" className="navbar-brand">
              Track Calories
            </a>
          </div>
        </nav>

        {/* TEMP: State Change Buttons - KEEP IT FOR TESTING */}
        <div className="container">
          <ul style={{ margin: "25px 0" }}>
            <li style={{ display: "inline-block", margin: "0 8px" }}>
              <button onClick={this.displayAddState}>Add State</button>
            </li>
            <li style={{ display: "inline-block", margin: "0 8px" }}>
              <button onClick={this.displayEditState}>Edit State</button>
            </li>
            <li style={{ display: "inline-block", margin: "0 8px" }}>
              <button onClick={this.displayLoadingState}>Loading State</button>
            </li>
            <li style={{ display: "inline-block", margin: "0 8px" }}>
              <button onClick={this.displayCantConnectState}>Cant Connect State</button>
            </li>
          </ul>
        </div>
        {/* TEMP: State Change Buttons - KEEP IT FOR TESTING */}

        {/* Content Container */}
        <main className="container">{this.state.currentState}</main>
      </React.Fragment>
    )
  }
}

export default App
