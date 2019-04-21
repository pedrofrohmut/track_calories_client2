import React from "react"

function AppCantConnectState() {
  return (
    <React.Fragment>
      <div className="cant-connect-container" id="cant-connect">
        <h3>
          <i className="fa fa-frown-o" /> Unable to connect
        </h3>
        <p>Track Calories can't establish a connection to the server.</p>
        <p>The Server may be off line or you may not have internet connection at this time.</p>
        <button className="cant-connect-button" id="cant-connect-btn">
          Try Again
        </button>
      </div>
    </React.Fragment>
  )
}

export default AppCantConnectState
