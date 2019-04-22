import React from "react"
import AddForm from "./AddForm"
import MealsList from "./MealsList"

function AppAddingState(props) {
  return (
    <>
      {/* Add Form */}
      <AddForm
        onSetLoadingState={props.onSetLoadingState}
        onSetAddingState={props.onSetAddingState}
        onAlert={props.onAlert}
      />

      {/* Total Calories + Meals List */}
      <MealsList onSetEditingState={props.onSetEditingState} />
    </>
  )
}

export default AppAddingState
