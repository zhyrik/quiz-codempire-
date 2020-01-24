import React from 'react'

export const BootstrapInputHOC = (InputHOC) => ({input, meta, ...props}) => {
  return <InputHOC {...props} {...input} />
}

export const BootstrapSelectHOC = (FormControlHOC) => ({input, ...props}) => (
  <FormControlHOC as="select" {...props} {...input}>
    <option />
    <option value="90">90</option>
    <option value="66.5">66.5</option>
    <option value="55.5">55.5</option>
  </FormControlHOC>)