import React, { memo } from 'react'
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
    <Form.Group data-test="checkbox-group">
      <Form.Label>{quiz.query}</Form.Label>
      <Field
        type="checkbox"
        component={BootstrapInputHOC(Form.Check)}
        label="да"
        name={quiz.name}
      />
    </Form.Group>
  )
}

Checkbox.propTypes = {
  quiz: PropTypes.object.isRequired
}

export default memo(Checkbox)