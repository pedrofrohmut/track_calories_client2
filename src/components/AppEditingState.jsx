import React, { Component } from "react"
import Alert from "./Alert"
import EditForm from "./EditForm"

class AppEditingState extends Component {
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
        {this.props.hasAlert && <Alert msg={this.props.alertMsg} type={this.props.alertType} />}

        {/* Edit Form */}
        <EditForm
          meal={this.props.meal}
          onSetLoadingState={this.props.onSetLoadingState}
          onSetAddingState={this.props.onSetAddingState}
        />
      </>
    )
  }
}

export default AppEditingState
