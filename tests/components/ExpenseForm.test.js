import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../src/components/ExpenseForm'
import expenses from '../fixtures/expenses'
test('should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm></ExpenseForm>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm with expense Data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
})