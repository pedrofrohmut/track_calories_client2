import React from "react"
import EditForm from "./EditForm"

function AppEditingState(props) {
  return (
    <>
      {/* Edit Form */}
      <EditForm
        meal={props.meal}
        onSetLoadingState={props.onSetLoadingState}
        onSetAddingState={props.onSetAddingState}
        onAlert={props.onAlert}
      />
    </>
  )
}

export default AppEditingState
