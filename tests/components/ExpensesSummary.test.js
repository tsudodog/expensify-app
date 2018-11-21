import React from 'react'
import { shallow } from 'enzyme'
import {ExpensesSummary} from '../../src/components/ExpensesSummary'



test('is should correctly render expenses summary with 1 expense', ()=>{
  const wrapper = shallow(<ExpensesSummary expenseCount = {1} expsnesTotal = {235}/>)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummary with more than one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount = {2} expsnesTotal = {500}/>)
    expect(wrapper).toMatchSnapshot()
})