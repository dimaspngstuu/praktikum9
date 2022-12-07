//use destructin
const {store,index} = require('./FruitController');

const main = () => {
    index();
    store('anggur');
}

console.log(main());