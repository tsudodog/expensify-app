import React from 'react';
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import ExpenseListItem from '../../src/components/ExpenseListItem'

test('should render ExpenseListItem Correctly', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})