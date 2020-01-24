import React from 'react'
import { shallow } from 'enzyme'

import { findByTestAttr, checkProps } from '../../utils'
import Checkbox from '../components/inputs/Checkbox'

describe('tests Checkbox compoent', () => {

  let wrapper
  const props = {
    quiz: {
      query: 'lorem ipsume dolor?',
      answer: 'answer',
      name: 'name'
    }
  }
  beforeEach(() => {
    wrapper = shallow(<Checkbox {...props} />)
  })
  
  test('Checkbox shoud render without error', () => {
    wrapper.debug()
    const component = findByTestAttr(wrapper, 'checkbox-group')
    expect(component.length).toBe(1)
  })

  test('should NOT throw a warning', () => {
    const warning = checkProps(Checkbox, props)
    expect(warning).toBeUndefined()
  })

  test('component is not rendered', () => {
    const component = findByTestAttr(wrapper, 'some-item')
    expect(component.length).toBe(0)
  })

})

