import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'
import { Field } from 'redux-form'

import { BootstrapSelectHOC } from './Input.HOC'

/**
 * functional react component for Select component
 * @function
* @param {obj} quiz - query, answer, name - properties
 * @returns {JSX.Element} - react component
 */
function Select({ quiz }) {
  return (
    <Form.Group>
      <Form.Label>{quiz.query}</Form.Label>
      <Field
          component={BootstrapSelectHOC(Form.Control)}
          name={quiz.name}
        />
    </Form.Group>
  )
}

Select.propTypes = {
  quiz: PropTypes.object.isRequired
}

export default Select