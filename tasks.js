// Task 1
function checkVotingEligibility(age) {
  if (age >= 18)
  {
  console.log("You are eligible for voting")
  }
  
  else 
  {
  console.log("you are not eligible for voting")
}
}
checkVotingEligibility(6);
//comment
// Task 2
function printNumbersWithWhile() {
  var i=1
 while(i<=5)
 {
  console.log(i)
  ++i;
 }

}
printNumbersWithWhile();

// Task 3
function printEvenNumbersWithFor()
 {for(var i=2;i<=8;i+=2)
{
  console.log("even number:",i)
};
}
printEvenNumbersWithFor();

// Task 4
function getDayOfWeek(day) {
  switch(day) {
     case 1:
         console.log('Sunday');
         break;
     case 2:
         console.log('Monday');
         break;
     case 3:
         console.log('Tuesday');
         break;
     case 4:
         console.log('Tednesday');
         break;
     case 5 :
         console.log('Thursday');
         break;
     case 6:
         console.log('Friday');
         break;
     case 7:
         console.log('Saturday');
         break;
  }
}
getDayOfWeek(5);

// Task 5
function sum(num1,num2)
 {
  console.log(num1+num2)
};
sum(5,6);

// Task 6
//Uncomment and solve
// const fruits = ;'
const fruits=['orange','appel','strawberry','blueberry','banana'];
console.log(fruits)



module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
