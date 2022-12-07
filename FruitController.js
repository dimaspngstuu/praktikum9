const  fruits = require("./data.js");


const index = () => {
    for (fruit of fruits){
        console.log(fruit)
    }
}



const store = (name) => {
    fruits.push(name);
    index();
}

module.exports = {index,store} ; 

