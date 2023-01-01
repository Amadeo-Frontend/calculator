document.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      calculate();
    }
  });

  function calculate() {
    if (operator === '' || secondValue === '') {
      display.value = 'ERRO';
      return;
    }
}
const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', calculate);
