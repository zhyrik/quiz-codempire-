import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Form, Col } from 'react-bootstrap'
import { Field } from 'redux-form'

import { BootstrapInputHOC } from './Input.HOC'

/**
 * functional react component for InputRadio component
 * @function
* @param {obj} quiz - query, answer, name - properties
 * @returns {JSX.Element} - react component
 */
function InputRadio({ quiz }) {
  return (
    <Form.Group>
      <Form.Label as="legend">
        {quiz.query}
      </Form.Label>
      <Col sm={10}>
        <Field
          component={BootstrapInputHOC(Form.Check)}
          type="radio"
          name={quiz.name}
          label="7"
          value="7"
        />
        <Field
          component={BootstrapInputHOC(Form.Check)}
          type="radio"
          name={quiz.name}
          label="6"
          value="6"
        />
        <Field
          component={BootstrapInputHOC(Form.Check)}
          type="radio"
          name={quiz.name}
          label="8"
          value="8"
        />
      </Col>
    </Form.Group>
  )
}

InputRadio.propTypes = {
  quiz: PropTypes.object.isRequired
}

export default memo(InputRadio)