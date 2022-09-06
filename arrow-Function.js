//funcion declaration
function breakfastmenuMenu() {
    return "I'm going to scrambled eggs for breakfast"
} 

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = () => {
    return "I'm going to eat a burger for dinner";
}

const dinnerMenu2 = (food) => {
    return `I'm going to eat a ${food} for dinner`;
}

const dinnerMenu3 = foods => `I'm going to eat a ${foods} for dinner`;


console.log( dinnerMenu() )

console.log( dinnerMenu2("chicken salad") )

console.log( dinnerMenu3("beef") )