import uuid from 'uuid'
import database from './../firebase/firebase'
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// component calls the action generator
// action generator returns a function
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants! )
export const addExpense = (
   expense
) => ({type: 'ADD_EXPENSE',
    expense
})


export const startAddExpense = (expenseData = {}) => {
    //redux thunk makes this possible
    return (dispatch) => {
        const {
            description = '' , 
            note ='', 
            amount = 0, 
            createdAt = 0    
        } = expenseData
        const expense = {description,note,amount,createdAt}
        database.ref('expenses').push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            })
    }
}
//REMOVE_EXPENSE
export const removeExpense = (
    {
        id
    } = {}
)=> ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT_EXPENSE

export const editExpense = (id, updates) =>({
    type: 'EDIT_EXPENSE',
    id, 
    updates
})