/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/



var arr = ["J","A"];


function handValue (hand) {


var convertArr = [];

// converts string of numbers to integers
for (let i = 0; i < hand.length; i++) {


// hand equals J , K , or Q add 10
  if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
    convertArr[i] = parseInt("10");

    // convertArr.push(parseInt(hand[i],10));


    // if hand is A, add 11
  } else if (hand[i] === "A") {
      convertArr[i] = parseInt("11");
      // convertArr.push(parseInt(hand[i],10));



    }else {
      convertArr[i] = parseInt(hand[i],10);
      // convertArr.push(parseInt(hand[i],10));

    }

    // console.log(convertArr);
    // console.log('--------');
    // console.log(hand[i])

}



// adds numbers together
var sum = convertArr.reduce(add,0);

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

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
