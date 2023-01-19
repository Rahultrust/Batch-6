// Find the first position of a given number in the array
// Refactored commeneted code to use both break and continue

const myArray = [10, 20, 30, 40, 50, 30, 60, 70];
const myNumber = 30;

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];

  if (element !== myNumber) {
    continue;
  }

  console.log("Found number at position: ", index + 1);

  break;
}

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];

//   if (element === myNumber) {
//     console.log("Found number at position: ", index + 1);

//     break;
//   }
// }
