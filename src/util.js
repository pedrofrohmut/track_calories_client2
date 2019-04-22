const consts = require("./consts")

export const genericHandleInputChange = (event, component) => {
  const name = event.target.name
  const value = event.target === "checkbox" ? event.target.checked : event.target.value
  component.setState({
    [name]: value
  })
}

export const getValidationClassForInput = (value, validationCallback) => {
  if (value === "") {
    return consts.CSS_INPUT_NOT_VALIDATE
  } else if (validationCallback(value)) {
    return consts.CSS_INPUT_VALID
  } else {
    return consts.CSS_INPUT_INVALID
  }
}
