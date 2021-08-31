const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92]
const grades2= [73, 91, 88, 56, 62, 84, 95, 96, 88, 92, 100]
const grades3= [73, 91, 88, 56, 62, 84, 95, 96, 88, 92, 100,88, 56, 62, 84, 95, 96, 88, 92]
function range(grades){
    let studentsGrades = grades.slice();
    studentsGrades= studentsGrades.sort(function(a, b){return a-b});
    return studentsGrades[studentsGrades.length-1]-studentsGrades[0];
}
function median(grades){
    let studentsGrades = grades.slice();
    studentsGrades= studentsGrades.sort(function(a, b){return a-b});  
    if(studentsGrades.length%2==0){
        return studentsGrades[studentsGrades.length/2];
    }
    return studentsGrades[studentsGrades.length/2-0.5];//in case of odd num length of array, the median is at the end of the smaller half.
}
function halfRange(grades){
    let studentsGrades = grades.slice();
    if(studentsGrades.length%2==0){
        studentsGrades=studentsGrades.slice(studentsGrades.length/2,studentsGrades.length);
    }
    else{
        studentsGrades=studentsGrades.slice(studentsGrades.length/2-0.5,studentsGrades.length);//in case of odd num length of array, second half of the year contains the bigger half. 
    } 
    return range(studentsGrades);
}
function display(grades){
console.log(
    ":Stats"+"\n\t"+
        "Range: "+range(grades)+"\n\t"+
        "Median: " +median(grades)+"\n\t"+
        "Half Range: "+halfRange(grades));}
display(grades);
display(grades2);
display(grades3);
