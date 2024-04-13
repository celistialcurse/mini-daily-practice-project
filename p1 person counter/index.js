// here we are saying hey document i wanna access element by id and change its text 
//document.getElementById("count-el").innerText = 5;
//  step 1 declare a variable which store the value 
let count = 0;
//console.log(count)

// let count = 5
// count = count + 1
// console.log(count)

// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step


//intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countel = document.getElementById("count-el");
let saveEl= document.getElementById("save-el");
function increment() {
     count= count+1;;
     // here we  we show the count of count  each time it clickes
     countel.innerText = count;
     //return console.log(count);
}
// 1. Create a function, save(), which logs out the count when it's call
function save(){
//saveEl.innerText+= count + " "+","+" " ;
saveEl.textContent+= count + " "+","+" " ;
countel.innerHTML= 0;
count =0
}