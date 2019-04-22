export const genericHandleInputChange = (event, component) => {
  const name = event.target.name
  const value = event.target === "checkbox" ? event.target.checked : event.target.value
  component.setState({
    [name]: value
  })
}
