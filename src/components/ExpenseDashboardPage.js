import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList></ExpenseList>
        <ExpensesSummary></ExpensesSummary>
    </div>
)

export default ExpenseDashboardPage