import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC5Sy0yoqBcoZFURBytHOxw3xYP0rjsKws",
    authDomain: "expensify-39023.firebaseapp.com",
    databaseURL: "https://expensify-39023.firebaseio.com",
    projectId: "expensify-39023",
    storageBucket: "expensify-39023.appspot.com",
    messagingSenderId: "498788019974"
  };

firebase.initializeApp(config)

const database = firebase.database();

export {firebase, database as default}

// database.ref().set({
//     name : 'Alex Z',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         city : "MN",
//         title: 'Software Engineer',
//         company : 'target'
//     },
//     location: {
//         city: "Minneapolis",
//         state: 'MN'
//     }
// })

// database.ref("isSingle").set(null).then(()=>{
//     console.log("did the lords work hahaha")
// })

// database.ref().update(
//     {
//         name: 'Alec',
//         age: 27, 
//         'location/city' : 'Saint Paul',
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'job/city': 'Seattle',
//         isSingle:null
//     }
// )
// database.ref().remove().then(()=>{
//     console.log("did remove!")
// })
// database.ref().once('value').then(snapShot => {
//   const val = snapShot.val()
//   console.log(val)
// }).catch(err => console.log(err))


// database.ref().on('value', (snapShot)=> {
//     console.log(snapShot.val())
// })

// database.ref('expenses').once('value').then((snapshot)=> {
//   const expenses = []
//   snapshot.forEach((childSnapShot) => {
//      console.log(childSnapShot.val())
//     expenses.push({
//       id : childSnapShot.key,
//       ...childSnapShot.val()
//     })
//   })
//   console.log(expenses)
// })

// database.ref('expenses').on('value', (snapshot) => {
//   console.log('expensesListgener')
//   console.log(snapshot)
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

//child_changed

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// array example
// const expense1 = {
//   description: 'd2',
//   note: 'n2',
//   amount: 10001,
//   createdAt: 2
// }
// database.ref('expenses').push(expense1)
// .then(()=>{
//     console.log('DataIsSaved') 
// }).catch((e)=>{
//     console.log('this failed spectacularly')
// })


