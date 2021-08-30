const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
const grades2= [73, 91, 88, 56, 62, 84, 95, 96, 88, 92, 100]
function range(grades){
    grades=grades.sort()   
    return grades[grades.length-1]-grades[0]
}

// your code goes here
// console.log(...)