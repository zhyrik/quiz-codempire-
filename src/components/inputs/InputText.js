import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import { Field } from 'redux-form'

import { BootstrapInputHOC } from './Input.HOC'

/**
 * functional react component for InputText component
 * @function
* @param {obj} quiz - query, answer, name - properties
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

InputText.propTypes = {
  quiz: PropTypes.object.isRequired
}

export default memo(InputText)