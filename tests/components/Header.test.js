import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../src/components/Header'
//react-test-renderer

test('should render Header correctly', () => {
    const wrapper = shallow(<Header></Header>)
    expect(wrapper).toMatchSnapshot()
})