import React from "react"

const config = require("../cofig/config")

function Alert(props) {
  let alertClass = ""
  switch (props.type) {
    case config.ALERT_SUCCESS:
      alertClass = config.CSS_ALERT_SUCCESS
      break
    case config.ALERT_FAILURE:
      alertClass = config.CSS_ALERT_FAILURE
      break
  }
  return <div className={alertClass}>{props.msg}</div>
}

export default Alert