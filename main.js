const display = document.getElementById("display");

function appendToDisplay(input){
    display.innerHTML += input;
    saveData()
}

function clearDisplay(){
    display.innerHTML= "";
    saveData()
}


function toggleSign() {
    if (display.innerHTML) {
        // Check if the first character is a '-' (indicating a negative number)
        if (display.innerHTML.startsWith('-')) {
            display.innerHTML = display.innerHTML.slice(1); // Remove the leading '-'
            saveData()
        } else {
            display.innerHTML = '-' + display.innerHTML; // Add a leading '-'
            saveData()
        }
    }
}

function calculate(){
    try{
    let expression = display.innerHTML
            .replace('÷', '/') // Replace '÷' with '/'
            .replace('×', '*'); // Replace '×' with '*'
            display.innerHTML = eval(expression);
            saveData()
}  catch (error){
    display.innerHTML = "Error";
    
}
}

function saveData(){
    localStorage.setItem("calcul-data", display.innerHTML);
}

function showData(){
    display.innerHTML = localStorage.getItem("calcul-data");
}

showData()