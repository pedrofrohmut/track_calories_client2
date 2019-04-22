const config = require("./cofig/config")

export const genericHandleInputChange = (event, component) => {
  const name = event.target.name
  const value = event.target === "checkbox" ? event.target.checked : event.target.value
  component.setState({
    [name]: value
  })
}

export const getValidationClassForInput = (value, validationCallback) => {
  if (value === "") {
    return config.CSS_INPUT_NOT_VALIDATE
  } else if (validationCallback(value)) {
    return config.CSS_INPUT_VALID
  } else {
    return config.CSS_INPUT_INVALID
  }
}
