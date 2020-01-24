import React from 'react'

export const BootstrapInputHOC = (InputHOC) => ({input, meta, ...props}) => {
  return <InputHOC {...props} {...input} />
}

export const BootstrapSelectHOC = (FormControlHOC) => ({input, ...props}) => (
  <FormControlHOC as="select" {...props} {...input}>
    <option />
    <option value="ff0000">Red</option>
    <option value="00ff00">Green</option>
    <option value="0000ff">Blue</option>
  </FormControlHOC>)