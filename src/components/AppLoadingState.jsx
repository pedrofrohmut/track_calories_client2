import React from "react"
import loading from "../img/loading.gif"

function AppLoadingState(props) {
  console.log(props)
  return (
    <React.Fragment>
      {/* Loading: Img + Message */}
      <div className="loading-container" id="loading">
        <img src={loading} alt="loading..." title="loading...." />
        {props.msg ? <p>{props.msg}</p> : <p>Loading...</p>}
      </div>
    </React.Fragment>
  )
}

export default AppLoadingState
