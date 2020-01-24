import React from 'react'
import { Form } from 'react-bootstrap'
import { Field } from 'redux-form'

import { BootstrapInputHOC } from '../Input.HOC'

/**
 * functional react component for ...
 * @function
 * @param {*} props - props
 * @returns {JSX.Element} - react component
 */
function InputText({ quiz }) {
  return (
    <Form.Group >
      <Form.Label>{quiz.query}</Form.Label>
      <Field
        component={BootstrapInputHOC(Form.Control)}
        type="text"
        name={quiz.name}
      />
    </Form.Group>
  )
}

export default InputText