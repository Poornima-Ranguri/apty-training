const firstNameElement = document.getElementById("firstName");
const lastNameElement = document.getElementById("lastName");
const ageElement = document.getElementById("age");


function checkingAge(){
    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const age = parseInt(ageElement.value);

    console.log(firstName);
    console.log(lastName);
    console.log(age)

    age >= 18 ? document.getElementById("result").innerText = `Hello ${firstName} ${lastName}, Welcome to Apty!`: document.getElementById("result").innerText = `Hello ${firstName} ${lastName} come back after ( 18 Years )`;
} 