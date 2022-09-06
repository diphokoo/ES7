let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = [ "David", ...contacts, "Lily" ];

contacts.push("Obi");

console.log(personalFriends);

let person ={
    name: "Obi",
    age: 26,
    position: "Front-End Developer"
}

let employee = {
    ...person,
    salary: 50000,
    city: "Johannesburg"
}

console.log(employee)