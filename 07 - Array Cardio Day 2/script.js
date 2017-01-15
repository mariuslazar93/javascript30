// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen in my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19?

(function someCheck(array){
    var currentYear = new Date().getFullYear();
    var isAtLeastOneAdult = array.some(function(elem){
        return ((currentYear - elem.year) >= 18);
    });
    console.log('From some: ' + isAtLeastOneAdult);
})(people);

// Array.prototype.every() // is everyone 19?

(function everyCheck(array){
    var currentYear = new Date().getFullYear();
    var areAllPeopleAdults = array.every(function(elem){
        return ((currentYear - elem.year) >= 18);
    });
    console.log('From every: ' + areAllPeopleAdults);
})(people);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

(function findCheck(array){
    var currentYear = new Date().getFullYear();
    var comment = array.find(function(elem){
        return elem.id == 823423;
    });
    if(comment){
        console.log('From find: ' + comment.id);
    }
    else{
        console.log('From find: comment was not found');
    }
})(comments);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423


(function findIdexCheck(array){
    var currentYear = new Date().getFullYear();
    var commentIndex = array.findIndex(function(elem){
        return elem.id == 823423;
    });
    if(commentIndex >= 0){
        console.log('From findIndex: delete dlement with index: ' + commentIndex);
        console.log('Array length before: ' + array.length);
        array.splice(commentIndex,1);
        console.log('Array length after: ' + array.length);
    }
    else{
        console.log('From findIndex: comment was not found');
    }
})(comments);
