// arguments object - no longer bound with arrow functions

// const add = function (a, b){
// console.log(arguments);   
//  return a + b;
// }

 const add = (a,b) => {
    // console.log(arguments);
    return a + b;
 };

console.log(add(55,1));
// this keyword - no longer bound with arrow functions

const  user2 = {
    name: 'Alex',
    cities: ['Saint Paul', 'Chicago', 'Appleton'],
    printPlacesLived: function(){
        // const that = this;
        // this.cities.forEach(function( city ){
        //     console.log(that.name, '\t has lived in ', city)
        // })

        // Map lets you return a transformed array, this is pretty cool! 
        const cityMessages = this.cities.map((city) => {
            return this.name + ' has lived in ' + city;
        })

// SEMANTICALLY EQUIVALENT 
        // const cityMessages = this.cities.map((city) => this.name + ' has lived in ' + city);
        console.log(cityMessages);

        this.cities.forEach((city) => {
            console.log(this.name, ' has lived in ', city);
        })

        // console.log(this.name);
        // console.log(this.cities);
    }
};

const multiplier2 = {
    // numbers - array of numbers we want to multiply
    numbers: [1,2,3,4,5],
    // multiplyBy - Single number
    multiplyBy: 4,
    multiply: function(){
        console.log('this is new');
        let newArr =  this.numbers.map( (currentNumber) => {
            return this.multiplyBy * currentNumber;
        });
        console.log('did a thing');
        console.log(newArr);
        console.log('done')

        

    },
}

user2.printPlacesLived();



multiplier2.multiply();