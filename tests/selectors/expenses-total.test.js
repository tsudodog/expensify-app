import expensesTotal from '../../src/selectors/expenses-total'
import expenses from '../fixtures/expenses'
test('should return 0 if no expenses', ()=>{
    const returnValue = expensesTotal([])
    expect(returnValue).toBe(0)
})

test('should correctly add up a single expense', ()=>{
    const returnValue = expensesTotal([expenses[1]])
    expect(returnValue).toBe(expenses[1].amount)
})

test('should correctly add up multiple expenses', () => {
    const returnValue = expensesTotal(expenses)
    expect(returnValue).toBe(114195)
})