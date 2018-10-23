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

const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id, 
    updates
})
//SET_TEXT_FILTER
const setTextFilter = (textValue) => ({
    type:'SET_TEXT_FILTER',
    textValue
})
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
        case 'EDIT_EXPENSE':
        return state.map((expense)=>{
            if(expense.id === action.id){
                return {
                    ...expense,
                    ...action.updates
                }
            }else{
                return expense
            }
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.textValue
            }
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
store.dispatch(editExpense(expense2.expense.id, {amount: 500}))
store.dispatch(setTextFilter('rent'))

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
    ...user,
    location : 'Philadelphia',
    age: 27
})