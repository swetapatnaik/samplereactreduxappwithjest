import React from 'react'
import Home from './Home'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'

describe('home', () => {

  test('button click', () => {
    const simpleAction = jest.fn()
    const props = {
      simpleAction,
      btnClickValue: '',
    }
    const component = mount(
      <Home
        {...props}
      />,
    )
    const btn = component.find('#test-redux')
    btn.simulate('click')
    const tree = mountToJson(component)
    expect(tree).toMatchSnapshot()
  })
  
})
