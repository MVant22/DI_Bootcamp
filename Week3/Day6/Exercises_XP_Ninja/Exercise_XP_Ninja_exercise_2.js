function calculateAverage(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
      sum += gradesList[i];
    }
    return sum / gradesList.length;
}
  

function checkPassOrFail(average) {
    if (average >= 65) {
        console.log("You passed!");
    } 
    else {
        console.log("You failed and must repeat the course.");
    }
}
  
  
function findAvg(gradesList) {
const average = calculateAverage(gradesList); 
console.log("Average grade: " + average.toFixed(2)); 
checkPassOrFail(average); 
}
  

let grades = [70, 80, 65, 90, 55];
findAvg(grades); 
  