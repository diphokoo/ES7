const student = {
    name: "Kyle",
    age: 24,
    project: {
        dicegame: "Two player dice game using Javascript"
    }
};

//console.log(student.age)

const { name,age, project: {dicegame} } = student

console.log(`${name} is a  ${age} year old student that designed ${dicegame}`)