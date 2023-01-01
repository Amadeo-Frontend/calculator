document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      calculate();
    }
  });

  function calculate() {
    if (firstValue === '' || secondValue === '' || operator === '') {
      display.value = 'ERRO';
      return;
    }
  
    let result = '';
  
    switch (operator) {
      case '+':
        result = parseFloat(firstValue) + parseFloat(secondValue);
        break;
      case '-':
        result = parseFloat(firstValue) - parseFloat(secondValue);
        break;
      case '*':
        result = parseFloat(firstValue) * parseFloat(secondValue);
        break;
      case '/':
        result = parseFloat(firstValue) / parseFloat(secondValue);
        break;
    }
  
    display.value = result;
    firstValue = result;
    operator = '';
    secondValue = '';
  }
  
const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', calculate);
