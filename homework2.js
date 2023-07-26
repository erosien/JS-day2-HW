//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function fav_food() {
    for(let i = 0; i < Object.keys(person3).length; i++){
        console.log(Object.keys(person3)[i])
    }
}

console.log(fav_food())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`This person's name is ${this.name} and they are ${this.age} years old.`)
    }

    // Create another arrow function for the addAge method that takes a single parameter
    this.addAge = (age) => {
        return this.age ++
    }
}

let kevin = new Person('Kevin', 23)
let carol = new Person('Carol', 30)
console.log(kevin.printInfo())
console.log(carol.printInfo())
// Adding to the age 
console.log(kevin.addAge())
console.log(kevin.addAge())
console.log(kevin.addAge())
console.log(kevin.printInfo())


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkString = (string) => {
    return new Promise( (resolve, reject) => {
        if(string.length > 10){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

checkString('supercalifragilisticexpialidocious')
.then( (result) => {
    console.log("Big word")
})

.catch( (error) => {
    console.log("Small Number")
})

// Code Wars //
// =============#1 ============//

const make_negative = (num) => {
    if(num > 0){
        num = -(num)
        return num
    } else {
        return num
    }
}

console.log(make_negative(15))

// =============#2 ============//

function count_sheeps(sheep){
    let sum = 0;
    for(n of sheep){
        if(n == true){
            sum = sum + n
        }
    } return sum
}

console.log(count_sheeps([true, true, true, false, true, true, false, null, true]))