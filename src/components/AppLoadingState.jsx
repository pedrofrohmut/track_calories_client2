import React from "react"
import loading from "../img/loading.gif"

function AppLoadingState(props) {
  return (
    <React.Fragment>
      <h1>Loading State</h1>

      {/* Loading Img + Message */}
      <div className="loading-container" id="loading">
        <img src={loading} alt="loading..." title="loading...." />
        { props.message ? (
          <p>{props.message}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </React.Fragment>
  )
}

export default AppLoadingState
