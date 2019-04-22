import React from "react"

const consts = require("../consts")

function Alert(props) {
  let alertClass = ""
  switch (props.type) {
    case consts.ALERT_SUCCESS:
      alertClass = consts.CSS_ALERT_SUCCESS
      break
    case consts.ALERT_FAILURE:
      alertClass = consts.CSS_ALERT_FAILURE
      break
    default:
      alertClass = ""
  }
  return <div className={alertClass}>{props.msg}</div>
}

export default Alert
