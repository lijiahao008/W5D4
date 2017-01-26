class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    // setInterval(this._tick.bind(this), 1000);
    // this._tick();
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.

    setInterval(this._tick.bind(this), 1000);
  }

  printTime(hours, minutes, seconds) {
    if (this.seconds < 10) {
      this.seconds = `0${this.seconds}`;
    }
    console.log (`${this.hours}:${this.minutes}:${this.seconds}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    this.seconds += 1;
    if (this.seconds >= 60){
      this.minutes += 1;
      this.seconds = 0;
    }
    if(this.minutes >= 60){
      this.hours += 1;
      this.minutes = 0;
    }
    if (this.hours >= 24){
      this.hours = 0;
    }
    // debugger
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}
//
const clock = new Clock();


const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback){

  if (numsLeft > 0) {
    reader.question("Give a number \n", function(answer){
     const newAnswer = parseInt(answer);
     sum += newAnswer;
     console.log(sum);
     numsLeft --;
     addNumbers(sum, numsLeft, completionCallback);
   });
  }
  else if (numsLeft === 0){
    completionCallback(sum);
    reader.close();
  }
}


// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}? \n`, function(answer){
    if (answer === 'yes'){
      callback(true);
    }
    else if (answer === 'no') {
      callback(false);
    }
    else {
      console.log("Wrong answer, start over");
      return;
    }
  });

}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1) {
      askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan){
        if (isGreaterThan) {
          let num = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = num;
          madeAnySwaps = true;
        }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      });

  }
  else if (i === (arr.length - 1)){
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

// absurdBubbleSort([5, 6, 3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function(context){
  return () => this.apply(context);
};


// [1, 2, 3].forEach(console.log)
//
// function Cat(name) {
//   this.name = name;
// }
//
// Cat.prototype.meow = () => {
//   console.log(this);
// };
//
// Cat.prototype.meow = function () {
//   console.log(this);
// }.bind(this);

// this = ?

// c = new Cat("lol");
// c.meow();
