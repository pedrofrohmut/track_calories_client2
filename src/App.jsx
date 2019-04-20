/**
 * Root Component For the entire App
 */
import React, { Component } from "react"
import AppAddingState from "./components/AppAddingState"
import AppEditingState from "./components/AppEditingState"
import AppLoadingState from "./components/AppLoadingState"
import AppCantConnectState from "./components/AppCantConnectState"


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentState: <AppAddingState />
    }
  }

  displayAddState = () => {
    this.setState({
      currentState: <AppAddingState />
    })
  }

  displayEditState = () => {
    this.setState({
      currentState: <AppEditingState />
    })
  }

  displayLoadingState = () => {
    this.setState({
      currentState: <AppLoadingState />
    })
  }

  displayCantConnectState = () => {
    this.setState({
      currentState: <AppCantConnectState />
    })
  }

  render() {
    return (
      <React.Fragment>
        {/* NavBar + Brand */}
        <nav className="navbar">
          <a href="#" className="navbar-brand">
            Track Calories
          </a>
        </nav>

        {/* TEMP: State Change Buttons */}
        <ul style={{margin: "25px 0"}}>
          <li style={{display: "inline-block", margin: "0 8px"}}><button onClick={this.displayAddState}>Add State</button></li>
          <li style={{display: "inline-block", margin: "0 8px"}}><button onClick={this.displayEditState}>Edit State</button></li>
          <li style={{display: "inline-block", margin: "0 8px"}}><button onClick={this.displayLoadingState}>Loading State</button></li>
          <li style={{display: "inline-block", margin: "0 8px"}}><button onClick={this.displayCantConnectState}>Cant Connect State</button></li>
        </ul>
        {/* TEMP: State Change Buttons */}

        {/* Content Container */}
        <main>
          {this.state.currentState}
        </main>        
      </React.Fragment>
    )
  }
}

export default App
