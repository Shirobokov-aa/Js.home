let person = {
    firstName: "Andrey",
    lastName: "Ivanov",
    age: 20,
    isStudent: true,
    contactInfo: {
        "phone": "098-556-33-41",
        "email": "AndreyIvanov@gmail.com"
    },
    disciplines: [
        "Programming", "Machine engineering", "English"
    ]
}

let jsonObj = JSON.stringify(person)
console.log(jsonObj)

let personFromJson = JSON.parse(jsonObj)
console.log(personFromJson)