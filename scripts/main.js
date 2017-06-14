

var arr = ["J","A"];


function handValue (hand) {


var convertArr = [];

// converts string of numbers to integers
for (let i = 0; i < hand.length; i++) {


// hand equals J , K , or Q add 10
  if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
    convertArr[i] = parseInt("10");



    // if hand is A, add 11
  } else if (hand[i] === "A") {
      convertArr[i] = parseInt("11");



    }else {
      convertArr[i] = parseInt(hand[i],10);


    }

}


// adds numbers together
var sum = convertArr.reduce(add,0);





// adds sum
function add(a,b) {
 var plus = a + b;

 if (hand.includes("A") && plus > 21) {
   plus -= 10;
 }

return plus;

}



return sum;

}

handValue(arr);
