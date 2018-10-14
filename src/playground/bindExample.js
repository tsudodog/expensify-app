const obj = {
    name: 'Alex',
    getName(){
        return this.name;
    }
};

const getName = obj.getName.bind(obj);

console.log(getName());