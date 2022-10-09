const array = [1,2,3,4,5,6];
const newArray = [];
document.write(array.join(" / ") + "<br><hr>");

function fn(a) {
return a * 3;
};

function map(a,b) {
for(let i = 0; i < array.length; i++) {
    newArray[i] = fn(array[i]);
}
};

map(fn,array);

document.write(newArray.join(" / "));


const age = prompt("Введите свой возвраст?")
function checkAge(age){
if (age > 18){
    return true
} else {
    return confirm("Родители разрешили?");
}
}
checkAge(age);
