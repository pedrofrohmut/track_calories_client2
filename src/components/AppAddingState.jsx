import React, { Component } from "react"
import Alert from "./Alert"
import AddForm from "./AddForm"
import MealsList from "./MealsList"

class AppAddingState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasAlert: props.alertMsg ? true : false
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ hasAlert: false }), 1500)
  }

  render() {
    return (
      <>
        {/* Alert */}
        {this.props.alertMsg && <Alert msg={this.props.alertMsg} type={this.props.alertType} />}

        {/* Add Form */}
        <AddForm onSetLoadingState={this.props.onSetLoadingState} onSetAddingState={this.props.onSetAddingState} />

        {/* Total Calories + Meals List */}
        <MealsList onSetEditingState={this.props.onSetEditingState} />
      </>
    )
  }
}

export default AppAddingState
