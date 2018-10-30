import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboardPage from '../../src/components/ExpenseDashboardPage'
//react-test-renderer

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage></ExpenseDashboardPage>)
    expect(wrapper).toMatchSnapshot()
})