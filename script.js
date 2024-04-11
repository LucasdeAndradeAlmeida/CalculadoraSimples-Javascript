function appendValue(value) {
    document.calc.txt.value += value;
}

function calculate() {
    var input = document.calc.txt.value;
    if (input) {
        try {
            var result = eval(input);
            document.calc.txt.value = result;
        } catch (error) {
            alert('Expressão inválida');
        }
    }
}

function clearInput() {
    document.calc.txt.value = '';
}