
------------------------------------------what should i do for lunch----------------------------------------------------------------------------


/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function (hungry, availableTime) {
  if (!hungry) {
    console.log("wait until you're hungry if you're not!!");
  } else if (hungry && availableTime < 20) {
    console.log("pick up a snack or grab something you have ready at home!");
  } else if (hungry && availableTime <= 30) {
    console.log("you deserve a break and should take time to cook a tasty meal!");
  } else
    console.log("this is an intense program after all and you should probably reconsider!");
}


/*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */

console.log("I'm hungry and I have 20 minutes for lunch.");
whatToDoForLunch(true, 20);
console.log("---");

console.log("I'm hungry and I have 50 minutes for lunch.");
whatToDoForLunch(true, 50);
console.log("---");

console.log("I'm not hungry and I have 30 minutes for lunch.");
whatToDoForLunch(false, 30);
console.log("---");

console.log("I'm hungry and I have 15 minutes for lunch.");
whatToDoForLunch(true, 15);
------------------------------------------------------------------------------------------------------------------------------------------------------------------------




Markdown Cheatsheet


https://lodash.com/docs/4.17.15#head





------------------------------------------------------------------https://gist.github.com/MahnazEs/dcc54fa927044b26ca6575be36bba979------------
const sumTow = function(num1, num2) {
  return Number(num1) + Number(num2);
};

const args = process.argv.slice(2);
console.log(sumTow(args[0], args[1]));
----------------------------------------------------------------------------------------------------------------------------------------------

// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(` ${actual} === ${expected}`);
  } else {
    console.log(` ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
-----------------------------------------------------------------------------------------------------------------
const name = 'Alice';
console.log('Hello, ' + name + '!');




const name = 'Alice';
console.log(`Hello, ${name}!`);
--------------------------------------------------------------------------------
// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + `${actual} === ${expected}`);
  } else {
    console.log("🛑🛑🛑 " + `${actual} !== ${expected}`);
  }
};

const head = function (data) {
  if (data) {
    const firstElement = data.shift();
    return firstElement;
  }else{
    return undefined;
  }
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
-------------------------------------------------------------------------------------------------


