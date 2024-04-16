let screenValue = '';

function appendToScreen(value) {
    if (screenValue === '0' && value !== '.') {
        screenValue = '';
    }
    screenValue += value;
    document.getElementById('screen').innerText = screenValue;
}

function clearScreen() {
    screenValue = '';
    document.getElementById('screen').innerText = '0';
}

function deleteCharacter() {
    screenValue = screenValue.slice(0, -1);
    document.getElementById('screen').innerText = screenValue || '0';
}

function compute() {
    try {
        let result = evaluateExpression(screenValue);
        document.getElementById('screen').innerText = result;
        screenValue = result.toString();
    } catch (error) {
        document.getElementById('screen').innerText = 'Error';
    }
}

function evaluateExpression(expression) {
    // Replace "^" with "**" for exponentiation
    expression = expression.replace(/\^/g, '**');

    // Evaluate the expression using eval() function
    return eval(expression);
}
