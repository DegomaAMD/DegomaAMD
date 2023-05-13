const activity1 = {
    nameOfBootcamp : 'Kodego',
    maleStudents : 30,
    femaleStudents : 20, 
    lecture : 'Data Types & Variables', 
    moreMaleThanFemale : true
};
//Display of types
for (let key in activity1)
{
console.log(typeof activity1[key]);
}

//gender
function gender(){
    if (activity1.maleStudents > activity1.femaleStudents){
        return gender = 'Male';
        
    }else
    {
        return gender = "Female";
    }
}
// Printing Sentence
console.log("\n","The",activity1.nameOfBootcamp,"Bootcamp program enrolls mostly", gender(),"students.","\n","Students studying", activity1.lecture , "include" , activity1.femaleStudents , "females &" , activity1.maleStudents , "males.");


