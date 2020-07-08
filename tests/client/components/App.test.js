import React from 'react'
import { App } from '../../../client/components/App'
import { shallow } from 'enzyme'

test('App renders stuff', () => {
    // Act
    const wrapper = shallow(<App/>)
    
    // Assert
    expect(wrapper.find('Create')).toHaveLength(1)
  })
  
//   test('App renders correctly while loading', () => {
//     // Act
//     const wrapper = shallow(<App clicked={true} />)
//     // console.log(wrapper.debug())
    
//     // Assert
//     expect(wrapper.find('input')).toHaveLength(3)
//     // expect(wrapper.exists('img')).toBeTruthy()
//   })