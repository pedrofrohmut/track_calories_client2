import React from "react"
import loading from "../img/loading.gif"

function Loading(props) {
  return (
    <div className="loading-container" id="loading">
      <img src={loading} alt="loading..." title="loading...." />
      {props.loadingMsg ? <p>{props.loadingMsg}</p> : <p>Loading...</p>}
    </div>
  )
}

export default Loading
