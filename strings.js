// Strings are contents in quotations either "" or ''
let firstName = "Tamar Ogili"

let lastName = " Gat"

// Template string

let fullName = `${firstName} ${lastName}`
let fullname = firstName + " " + lastName
console.log(fullname)

const nae = firstName.charAt(0) //T
const lower = firstName.toLowerCase() //tamar
const upper = firstName.toUpperCase() //TAMAR
let concates = firstName.concat(" Festus")
let resmove = firstName.trim()

let finds = firstName.indexOf("Ogili") // Starting position 6
let makeArray = firstName.split(" ") // ["Tamar", "Ogili"]

console.log(makeArray)
