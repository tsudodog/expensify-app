import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../src/components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment'


let setTextFilter, sortByDate,sortByAmount,setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter =jest.fn() 
    sortByDate = jest.fn()
    sortByAmount= jest.fn()
    setStartDate=jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate={setEndDate}
        
        />)
})

test('should render ExpenseFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render Expense List Filters with alt Data Correctly', () => {
  wrapper.setProps({
      filters: altFilters
  })
  expect(wrapper).toMatchSnapshot()
})


// should handle text change
test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
      target: {
          value
      }
    })

    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

// should sort by date
test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    
    wrapper.find('select').simulate('change',{
        target : {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})
 
// should sort by amount

test('should sort by amount', () => {
    const value = 'amount'
    wrapper.setProps({
        filters: altFilters
    })
    
    wrapper.find('select').simulate('change',{
        target : {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})


// should handle date change

test('should handle date change', () => {
  const startDate = moment(0).add(4,'years')
  const endDate = moment(0).add(8,'years')

  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})

  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})


// should handle date focus changes 

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)

})