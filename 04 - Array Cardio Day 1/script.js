// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

(function filterArray(array){
    console.log("1. Filter the list of inventors for those who were born in the 1500's");
    var filtredArray = array.filter(function(elem){
        return (elem.year >= 1500 && elem.year < 1600) ? true : false;
    });
    var names = [];
    for(var i=0, n=filtredArray.length; i<n; i++){
        names.push(filtredArray[i].first + " " + filtredArray[i].last + " born in " + filtredArray[i].year);
    }
    console.log(names);
})(inventors);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names

(function mapArray(array){
    console.log('2. Give us an array of the inventors\' first and last names');
    var mappedArray = array.map(function(elem){
        return (elem.first + " " + elem.last);
    });
    console.log(mappedArray);
})(inventors);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

(function(array){
    console.log("3. Sort the inventors by birthdate, oldest to youngest");

    array.sort(function(a,b){
        if(a.year < b.year){
            return -1;
        }
        else {
            if(a.year > b.year){
                return 1;
            }
            else{
                return 0;
            }
        }
    });

    var names = [];
    for(var i=0, n=array.length; i<n; i++){
        names.push(array[i].first + " " + array[i].last + " born in " + array[i].year);
    }
    console.log(names);
})(inventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

(function(array){
    console.log("4. How many years did all the inventors live?");
    var totalYears = array.reduce(function(acc, elem){
        return acc+(elem.passed - elem.year);
    },0)
    console.log("Total years: " + totalYears);
})(inventors);

// 5. Sort the inventors by years lived

(function(array){
    console.log("5. Sort the inventors by years lived");

    array.sort(function(a,b){
        var yearsLivedByA = a.passed - a.year;
        var yearsLivedByB = b.passed - b.year;
        if(yearsLivedByA < yearsLivedByB){
            return -1;
        }
        else {
            if(yearsLivedByA > yearsLivedByB){
                return 1;
            }
            else{
                return 0;
            }
        }
    });

    var names = array.map(function(elem){
        return elem.first + " " + elem.last;
    });
    console.log(names);
})(inventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

(function(){
    // var category = document.querySelector('.mw-category');
    // var links = [].slice.call(category.querySelectorAll('a'));
    // var de = links
    //             .map(link => link.textContent)
    //             .filter(streetName => streetName.includes('de'));
})();

// 7. sort Exercise
// Sort the people alphabetically by last name

(function(array){
    console.log("7. Sort the people alphabetically by last name");

    function getLastName(fullName){
        return fullName.split(',')[0];
    };

    array.sort(function(a,b){
        var lastNameOfA = getLastName(a).toLowerCase();
        var lastNameOfB = getLastName(b).toLowerCase();
        if(lastNameOfA < lastNameOfB){
            return -1;
        }
        else {
            if(lastNameOfA > lastNameOfB){
                return 1;
            }
            else{
                return 0;
            }
        }
    });

    console.log(array);
})(people);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

(function(data){
    console.log('8. Sum up the instances of each of these: ' + data);
    var results = data.reduce(function(acc, elem){
        if(acc[elem])
            acc[elem]++;
        else {
            acc[elem] = 1;
        }
        return acc;
    },{});

    console.log(results);
})(data);
