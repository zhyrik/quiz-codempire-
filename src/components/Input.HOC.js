import React from 'react'

export default (InputHOC) => ({input, meta, ...props}) => {
  return <InputHOC {...props} {...input} />
}
