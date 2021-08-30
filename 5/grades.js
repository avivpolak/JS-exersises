const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
const grades2= [73, 91, 88, 56, 62, 84, 95, 96, 88, 92, 100]
function range(grades){
    grades=grades.sort()   
    return grades[grades.length-1]-grades[0]
}
function median(grades){
    grades=grades.sort()  
    if(grades.length%2==0){
        return grades[grades.length/2]
    }
    return grades[grades.length/2+0.5]
}
function halfRange(grades){
    if(grades.length%2==0){
        grades=grades.splice(0,grades.length/2)
    }
    else{
        grades=grades.splice(0,grades.length/2+0.5)
    }
    return range(grades)
}

// console.log(...)