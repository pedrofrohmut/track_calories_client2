/**
 * Root Component For the entire App
 */
import React, { Component } from "react"
import AppAddingState from "./components/AppAddingState"
import AppEditingState from "./components/AppEditingState"
import AppLoadingState from "./components/AppLoadingState"
import AppCantConnectState from "./components/AppCantConnectState"
import MealService from "./services/MealService"
import Alert from "./components/Alert"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasAlert: false,
      currentState: this.getAppAddingState()
    }
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

        {/* Content Container */}
        <main className="container">
          {/* Alert */}
          {this.state.hasAlert && this.state.alert}
          {/* State */}
          {this.state.currentState}
        </main>
      </React.Fragment>
    )
  }

  showAlert = (msg, type) => {
    this.setState({
      hasAlert: true,
      alert: <Alert msg={msg} type={type} />
    })
    setTimeout(() => this.setState({ hasAlert: false }), 3000)
  }

  // Constant as method
  getAppAddingState = () => (
    <AppAddingState
      onSetEditingState={this.handleOnEditState}
      onSetLoadingState={this.handleOnLoadingState}
      onSetAddingState={this.handleOnAddState}
      onAlert={this.showAlert}
    />
  )

  // Constant as method
  getAppEditingState = mealToEdit => (
    <AppEditingState
      meal={mealToEdit}
      onSetLoadingState={this.handleOnLoadingState}
      onSetAddingState={this.handleOnAddState}
      onAlert={this.showAlert}
    />
  )

  // Constant as method
  getAppLoadingState = loadingMsg => <AppLoadingState loadingMsg={loadingMsg} />

  // Constant as method
  getAppCantConnectState = () => <AppCantConnectState />

  handleOnAddState = () => this.setState({ currentState: this.getAppAddingState() })

  handleOnEditState = mealToEdit => this.setState({ currentState: this.getAppEditingState(mealToEdit) })

  handleOnLoadingState = loadingMsg => this.setState({ currentState: this.getAppLoadingState(loadingMsg) })

  handleOnCantConnectState = () => this.setState({ currentState: this.getAppCantConnectState() })
}

export default App
