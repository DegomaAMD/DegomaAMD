//displaying Params
let students = ['Elen','Sam','Dingdong','Pia','Barbie','Jessie','Luis','Robi','Marian'];

//Removing Robi
const removeParam = students.splice(7,1);
console.log(students);
console.log(removeParam.toString() , 'is removed from the list');

//indexOf Pia

const num3 = students.indexOf('Pia');
console.log('\n', 'indexOf Pia is -', num3);

//push name

const num4 = students.push('Andria');
console.log( '\n','Push name', '\n' ,  students);

//Identifying Female Students

console.log( '\n','Identifying Female Students','\n');

const femaleStudents = () => {

    for (i = 0 ; i < students.length ; i++){

        if (students[i] === 'Elen' || students[i] === 'Sam' || students[i] === 'Pia' || students[i] === 'Barbie' || students[i] === 'Jessie' || students[i] === 'Marian')
        {
            console.log(students[i], 'is Female');
        }else 
            console.log(students[i], 'is Male');
    }
    
}
femaleStudents();




