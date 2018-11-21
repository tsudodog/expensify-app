// import './utils.js';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'




const store = configureStore()


store.dispatch(addExpense({description: 'Water bill', amount : 4500}))
store.dispatch(addExpense({description: 'Gas Bill', createdAt: 1250}))
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 1000}))


const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(store.getState())


// addExpense waterbill
// add expense gasbill
// text filter bill

const jsx = (
    <Provider store = {store}>
        <AppRouter></AppRouter>
    </Provider>
)

// getVisibleExpenses()
ReactDOM.render(jsx, document.getElementById('app'));

