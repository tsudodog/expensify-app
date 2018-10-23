const book = {
	title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher : {
  	name: 'Penguin'
  }
}

const {name : publisherName =''} = book.publisher;
console.log(publisherName)


// array example 
const [street, city, state, zip]= address;
console.log(`You are in ${city} ${state}`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [itemName,,medPrice,] = item;

console.log(`A medium ${itemName} costs ${medPrice}`);