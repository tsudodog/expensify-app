import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../src/actions/filters'
import moment from 'moment'

test('should generate set start date Action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({ type: 'SET_START_DATE', startDate: moment(0)})
})

test('should generate set end date Action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({type:'SET_END_DATE', endDate: moment(0)})
})

test(' should generate sort by amount object', () => {
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
})
test(' should generate sort by date', () => {
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})
})

test('should generate setTextFilter with input val', () =>{
    // setTextFilter
    expect(setTextFilter('bleh')).toEqual({
        type:'SET_TEXT_FILTER',
        textValue: 'bleh'
    })
})

test('should generate setTextFilter with defaultVal', () =>{
    // setTextFilter
    expect(setTextFilter()).toEqual({
        type:'SET_TEXT_FILTER',
        textValue: ''
    })
})