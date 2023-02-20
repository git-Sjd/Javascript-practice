// // Question 1 (Odd & Even)

// var num = Number(prompt("Please enter the number"));
// var numType = "";

// if(num%2===1){
//     numType = "Odd"
// }
// else if (num%2===0){
//     numType = "Even"
// }

// console.log("The number entered by you is: " + numType)

// // Question 2 (Object)

// // 1. First Name
// // 2. Last Name
// // 3. Age
// // 4. Sports
// // 5. Experience
// // 6. A method which prints the Full Name of the Athlete.
// // 7. A method which prints all the details about the Athlete.

// var athleteDetails = {
//     fName:"Virat",
//     lName: "Kohli",
//     age: "32",
//     sports: "cricket",
//     experience: "12 years"
// }

// var fullName = (athleteDetails.fName).concat(" " + athleteDetails.lName);
// console.log(fullName);

// var details = athleteDetails.fName
// console.log(details)

// var counter = 1;
// // var tableNmb = prompt("Please enter the number")
// // console.log(isNaN("123"),isNaN('Abcd122'),isNaN('123Abcd'))
// // console.log(typeof(+tableNmb))
// if(!isNaN(tableNmb)){
//     while(counter <=10){
//         console.log(tableNmb+'x'+counter+'='+tableNmb*counter)
//         counter++;
//     }
// }
// else{
//     console.log("Please enter the valid number")
// }


// for(i=1; i<=10; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// // var mao=[1,2,3,4]
// // console.log(mao.toString())

// // var out = function (x) {
// //     delete x;
// //     return x;

// // }
// // console.log(out(9))

// // var av =[1,2,3]
// // var bc =[4,5,6]

// // var cd =av.concat(bc)
// // console.log(cd)

// for(var counter =1 ; counter <=10; counter++){
//     console.log("Printed number are: " + counter )

// }

console.log("==============================")

// var arryexmp = [101,205,307,4015,180,202,44,5,6,7,8,9,0,11,45,32,67,45,23,12,45,67,43,33,21]

// console.log(arryexmp.length)

// for( var counter = 0; counter <arryexmp.length; counter++){
//     if(arryexmp[counter]%2===0){
//         console.log("It is a even number")
//     }
//     else{
//         console.log("It is a odd number")
//     }
// }

// console.log("==============================")

// var arryexmp2 = ['apple', 'mango','gauva','grapes','banana','orange','watermelon']
// // console.log(arryexmp2.shift())
// const arrlen = arryexmp2.length
// for(var i=0; i<arrlen;i++){
//     arryexmp2.pop()
//     console.log(arryexmp2)

// }
// console.log("==============================")

// var array_1 = [1, 2, 3, 4, 5, 1, 3];
// var newArray=[];

// for(i=0; i<array_1.length;i++){
//     if (array_1[i]===1){
//         newArray.push(i)
//     }
// }
// if(newArray.length === 0){
//     console.log(-1)
// }
// else if(newArray.length ===1){
//     console.log(newArray[0])
// }
// else{
// console.log(newArray)

// }
// console.log("==============================")

// var userInput = prompt("Please enter the number")
// var userInput =5;

// for(i=userInput; i>=1; i--){
//     var rowValue='';
//     for(j=userInput; j>userInput-i; j--){
//         rowValue=rowValue.concat(j)
//         // console.log(j)
//     }
//     console.log(rowValue)
// }


// function getSum(){
//     console.log(10+20)
// }
// console.log(getSum)

// var num1=10

// function getSum(num2){
//     var num1=20
//     console.log(num1+num2)
// }
// getSum(20)

// Input: [3, 2, 1, 4, 5, 45]
// Output: [1, 2, 3, 4, 5, 45]

// var input=[3, 2, 1, 4, 5, 45]

// input.sort(function(a,b) {return(a-b)})
// console.log(input)

// var minVal='0';
// var newAry=[];

// for(i=0; i<input.length; i++){
//     if(input[i]>minVal){

//         console.log(newAry.push(input[i])) 
//     }
// }

// var str1='LISTEN'
// var str2='SILENT'

// if(str1.length !== str2.length){
//     console.log("Not a Anagram")
// }
// else{
//     var abc=str1.slice('')
//     console.log(abc.sort(a,b) {}=> a-b})
// }

// var str4='Hello'
// var emptyStr = ''

// for(var i=str4.length -1; i>=0; i--){
//     emptyStr = emptyStr+str4[i]

// }
// console.log(emptyStr)

// var naturalNumber = [1,2,3,4,5,7,8,4,9,10]

// var emptyArray =[]

// for(i=1; i<=naturalNumber.length; i++){
//     if()
// }


// function emiCalculator(p,r,t){
//     var ci = (p*r/100)**t;
//     var totalAmount= p+ci;
//     var emi =totalAmount/12;
//     return emi;
// }

// var monthlyInstalment = emiCalculator(1000,10,2);
// console.log(monthlyInstalment)

// function simpleInterest(principle, rate =10, time){
//     if(principle.typeOf != Number ){
//         console.log("Plz enter a number value")
//         return;
//     }

//     var sI= (principle*rate*time)/100;
//     var tAmount= principle+sI;
//     return tAmount;
// }
// var p = parseFloat(prompt("Enter the principle amount"))
// // var r = parseFloat(prompt("Enter the interest rate"))
// var t = parseFloat(prompt("Enter the time in year"))

// var finalAmount = simpleInterest(p,undefined,t)
// console.log(finalAmount)

// function squareOfNumber(a){
//     var sqr = a*a;
//     return sqr;
// }

// var result = squareOfNumber(70);
// console.log(result)


// function calFunction(celsius){
//     var fahrenheit = (celsius * 9/5)+32;
//     return fahrenheit;
// }
// var c = parseFloat(prompt("Enter the temp"))
// console.log(calFunction(c)) 


// function areaOfTriangle(height, base){
//     var area = 1/2*height*base
//     return area;
// }

// console.log(areaOfTriangle(10,20))



// var navbar = document.createElement("div");
// navbar.innerText = "this is test case";
// body = document.body
// body.append('navbar')
// console.log(navbar)

var menu = document.getElementsByClassName("test")
console.log(menu)
var btn = document.getElementsByTagName("button")
console.log("gggd", btn)

function onMouseEnter() {
    console.log("hygg")
    menu.style.backgroundColor = "red"
}
menu.mouseenter = onMouseEnter
//btn.addEventListener("click", onMouseEnter)

