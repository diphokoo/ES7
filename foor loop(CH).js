// challenge - for for Loop

// Using the Fot for Loop, iterate through the array and print into the console, a message like;
// Tom lives in Lisbon

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
];


for( const student of students ) {
    console.log( student.name + "Lives in" + student.city);
}