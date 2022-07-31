Array.prototype.customMap = (callback) => { 
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}

Array.prototype.customForEach = (callback) => { 
    for (let index = 0; index < this.length; index++) {
       this(callback(this[index], index, this));
    }
}



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.customForEach((el, i, arr) => {
    console.log(`Item: ${el} have index ${i} on array: ${arr}`);
});



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
Array.reduce
Array.prototype.customReduce = () => { }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
Array.filter
Array.prototype.customFilter = () => { }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
Array.forEach
Array.prototype.customForEach = () => { }

// Создать строку из названий предметов написаных через запятую
// Посчитать общее количнство студентов и учителей на всех предметах
// Получить среднее количество студентов на всех пердметах
// Создать массив из объектов предметов
// Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

let subjectsArr = [];
let subjectsArrObj = [];
let allStudentsTeachers = 0;
let studentsAll = 0;
let counter = 0;
for ( let element in subjects) {
    
    subjectsArrObj.push(subjects[element]);
    let studentsCount = subjects[element].students;
    studentsAll += studentsCount;
    let teachersCount = subjects[element].teachers;
    if (counter >= teachersCount) {
        // counter = teachersCount;
        subjectsArr.unshift(element); 
    } else {
        counter = teachersCount;
        subjectsArr.push(element);
    }
    
    allStudentsTeachers += (studentsCount + teachersCount);
};

const subjectsString = subjectsArr.join(',');
const subjectsStudents =  studentsAll / subjectsArr.length;
console.log(subjectsString);
console.log(allStudentsTeachers);
console.log(subjectsStudents);
console.log(subjectsArrObj);
console.log(subjectsArr );
