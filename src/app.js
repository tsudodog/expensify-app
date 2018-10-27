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



const store = configureStore()



store.dispatch(addExpense({description : 'Water Bill'}))
store.dispatch(addExpense({description : 'Gas Bill', amount: 100}))
store.dispatch(addExpense({description : 'Gas rent', amount: 100}))
store.dispatch(setTextFilter('bill'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(store.getState())

setTimeout(()=>{
    store.dispatch(setTextFilter('rent'))
}, 3000)
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

