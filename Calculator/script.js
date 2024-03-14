let display = document.getElementById('display');
let expression = '';

function appendToDisplay(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculateResult() {
    try {
        expression = eval(expression).toString();
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
    }
}
