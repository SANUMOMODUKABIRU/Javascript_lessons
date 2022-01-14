// Three keywords to create a variableres.status(200).send('ok :)')
//var   //let  // const
// Variables with let
let age = ""
let phoneNumber = "070536465454"
phoneNumber = { name: "tari", age: 25 }
phoneNumber = ["Apple", "Bannana", "Mango"]
console.log(phoneNumber)

//Variables with const
const originDate = new Date()
// originDate = "Start lesson"
console.log(originDate)

// Variables with var;

// Data types.

//Strings
let address = "Yenagoa"

// Numbers
let figure = 3000
let decNum = 20.34

console.log("Type of", typeof decNum)

// Objects are key value pairs

let person = {
	name: "Gentle",
	age: 20,
	phone: "94384873774784",
	address: {
		location: { lat: 20394.4646, long: 455363.3663 },
		street: "School road",
		city: "yenagoa"
	},
	isConfirm: false
}

console.log(person.address.city)

// Arrays

let fruites = ["Apple", "mango", "cucumber", "orange"]
fruites.unshift("Guava")
console.log(fruites)

// Bolean

let access = true

//Null, Undefined,

let HouseNum
console.log(HouseNum)
