import React from "react"
import Loading from "./Loading"

function AppLoadingState(props) {
  return <Loading loadingMsg={props.loadingMsg} />
}

export default AppLoadingState
