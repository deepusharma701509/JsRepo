const numInput = document.getElementById('numInput');
const buttons = document.querySelectorAll('.btn-class');
const resetButton = document.querySelector('.calBtnRes');
const equalButton = document.querySelector('.calBtnEqual');
const delButton = document.querySelector('input[value="DEL"]');

let currentInput = "";


function handleButtonClick(buttonValue) {
  if (buttonValue === 'DEL') {
    currentInput = currentInput.slice(0, -1); 
  } else if (buttonValue === 'RESET') {
    currentInput = ""; 
  } else if (buttonValue === '=') {
    try {
     
      currentInput = eval(currentInput) || ""; 
    } catch (error) {
      currentInput = "Error"; 
    }
  } else {
    currentInput += buttonValue; 
  }
  
  numInput.value = currentInput;
}


buttons.forEach(button => {
  button.addEventListener('click', function() {
    handleButtonClick(this.value); 
  });
});


resetButton.addEventListener('click', function() {
  handleButtonClick('RESET');
});


delButton.addEventListener('click', function() {
  handleButtonClick('DEL');
});


equalButton.addEventListener('click', function() {
  handleButtonClick('=');
});
