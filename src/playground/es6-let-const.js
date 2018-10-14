var nameVar = 'Andrew';

var nameVar = 'Mike';
console.log('nameVar', nameVar);


let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameConst', nameConst);

const nameConst = 'Frank';
console.log('nameConst', nameCosnt);

// Block Scoping 

var fullName = 'Jen Mead';

if (fullName){
    var fisrtName = fullName.split(' ')[0];
    console.log(fisrtName);
}
console.log(fullName);
