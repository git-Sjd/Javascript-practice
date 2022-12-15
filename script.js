// Question 1 (Odd & Even)

var num = Number(prompt("Please enter the number"));
var numType = "";

if(num%2===1){
    numType = "Odd"
}
else if (num%2===0){
    numType = "Even"
}

console.log("The number entered by you is: " + numType)

// Question 2 (Object)

// 1. First Name
// 2. Last Name
// 3. Age
// 4. Sports
// 5. Experience
// 6. A method which prints the Full Name of the Athlete.
// 7. A method which prints all the details about the Athlete.
 
var athleteDetails = {
    fName:"Virat",
    lName: "Kohli",
    age: "32",
    sports: "cricket",
    experience: "12 years"
}

var fullName = (athleteDetails.fName).concat(" " + athleteDetails.lName);
console.log(fullName);

var details = athleteDetails.fName
console.log(details)



