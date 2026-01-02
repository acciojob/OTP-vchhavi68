//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

// REQUIRED by Cypress test
inputs[0].focus();

inputs.forEach((input, index) => {

  input.addEventListener('input', () => {
    if (!/^\d$/.test(input.value)) {
      input.value = '';
      return;
    }

    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      input.value = '';

      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });

});