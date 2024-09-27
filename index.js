// code your solution here
// 1) Function declaration for saturdayFun
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// 2) Function expression for mondayWork
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};

// 3) Function for wrapAdjective
function wrapAdjective(char = '*') {
    return function(adjective) {
        return `You are ${char}${adjective}${char}!`;
    };
}

// Example usage:
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun('paint')); // "This Saturday, I want to paint!"

console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork('work from home')); // "This Monday, I will work from home."

const excited = wrapAdjective('!');
console.log(excited('amazing')); // "You are !amazing!!"

const decorated = wrapAdjective('||');
console.log(decorated('fantastic')); // "You are ||fantastic||!"
