import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

//ADD_EXPENSE
const addExpense = (
    {
        description = '' , 
        note ='', 
        amount = 0, 
        createdAt = 0
    }={}
) => ({type: 'ADD_EXPENSE',
expense:{
    id: uuid(), 
    description,
    note,
    amount,
    createdAt
}})
//REMOVE_EXPENSE
const removeExpense = (
    {
        id
    } = {}
)=> ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{
                return id !== action.id
            })    
        default:
            return state
    }
}


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch(action.type){
        default:
            return state
    }
}

// Store Creation
const store = createStore(combineReducers({
    expenses : expensesReducer,
    filters : filtersReducer
}))

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

const expense1 = store.dispatch(addExpense({description:'Rent', amount: 100}))
const expense2 = store.dispatch(addExpense({description: 'Coffee', amount: 300}))

store.dispatch(removeExpense({id: expense1.expense.id}))

const demoState = {
    expenses : [{
        id: 'lkajdflk',
        description : 'January Rent',
        note: 'this was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}


const user = {
    name: 'Jen',
    age: 24
}

console.log({
    ...user
})