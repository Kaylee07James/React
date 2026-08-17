//2.Template Literals
let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;

//const fullname = word1 + ' ' + word2;

//const fullname = '${word1} ${word2}';

//const fullname = '${num1 + num2} ${word2}';

//let example = 'Hello \n' + 'world';

let example = '${world} ${world}';

//console.log(fullname);

console.log(example);
document.getElementById('example').innerText = example;


//3.Destructuring Objects
const personalInformation = {
    firstName: 'Dylan',
    lastName: 'Israel',
    city: 'Austin',
    state: 'Texas',
    zipCode: 73301
};

//const {firstName, lastName} = personalInformation;
//console.log('${firstName} ${lastName}');

const { firstName: fn, lastName: ln} = personalInformation;
console.log('${fn} ${ln}');


//4.Destructuring Arrays
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';

console.log(lastName);


//5.Object Literal
function addressMaker(city, state) {
    const newAddress = {City: city, State: state};
    //const newAddress = {newCity: city, newState: state};

    console.log(newAddress);
}

addressMaker('Austin', 'Texas');


//6.Object Literal(Challenge)
function addressMaker(address) {
    const{city, state} = address;

    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
    console.log('${newAddress.city}, ${newAddress.state}, ${newAddress.country}');
}

addressMaker({city: 'Austin', state: 'Texas'});


//7.For of Loop
let incomes = [62000, 67000, 75000];
let total = 0;

for ( const income of incomes) {
    console.log(income);
    total += income;
}

//console.log(total);

let fullName = "Dylan Coding God Israel";

for ( const char of fullName) {
    console.log(char);
}


//8.For of Loop(Challenge)
let incomes = [62000, 67000, 75000];

for (let income of incomes) {
    income += 5000;
}

console.log(incomes);


//9.Spread Operator
let example1 = [1,2,3,4,5,6];
let example2 = [...example];
example2.push(true);

console.log(example2);

let example1 = {
    firstName: 'Dylan'
};

//let example2 = {
//firstName: 'N/A'
//      ...example1
// }

//example2 = {firstName: 'Dylan};


//10.Rest Operator
function add(nums) {
    //console.log(nums);
    console.log(arhuments);
}

add(4, 5, 7, 8, 12)


//11.Arrow Functions
function add(...nums) {
    //let total = nums.reduce(function (x, y){
        //return x+y;
    //});
    let total = nums.reduce((x,y) => x + y);
    console.log(total);
}

add(4, 5, 7, 8, 12) 