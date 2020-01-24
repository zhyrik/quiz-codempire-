import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import { Field } from 'redux-form'

import { BootstrapInputHOC } from './Input.HOC'


/**
 * functional react component for Checkbox component
 * @function
 * @param {obj} quiz - query, answer, name - properties
 * @returns {JSX.Element} - react component
 */
function Checkbox({ quiz }) {
  return (
    <Form.Group>
      <Form.Label>{quiz.query}</Form.Label>
      <Field
        type="checkbox"
        component={BootstrapInputHOC(Form.Check)}
        value={1}
        label="some lable"
        name={quiz.name}
      />
    </Form.Group>
  )
}

Checkbox.propTypes = {
  quiz: PropTypes.object.isRequired
}

export default Checkbox