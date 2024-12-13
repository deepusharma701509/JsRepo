const numInput = document.getElementById('numInput');
const buttons = document.querySelectorAll('.btn-class');
const resetButton = document.querySelector('.calBtnRes');
const equalButton = document.querySelector('.calBtnEqual');
const delButton = document.querySelector('input[value="DEL"]');

let currentInput = "";


function handleButtonClick(buttonValue, callback) {
  
  currentInput = callback(currentInput, buttonValue);
  
  
  numInput.value = currentInput;
}


function updateInput(currentInput, buttonValue) {
  if (buttonValue === 'DEL') {
    
    return currentInput.slice(0, -1);
  } else if (buttonValue === 'RESET') {
    
    return "";
  } else if (buttonValue === '=') {
 
    try {
      return evaluateExpression(currentInput);
    } catch (error) {
      return "Error"; 
    }
  } else {
    
    return currentInput + buttonValue;
  }
}


function evaluateExpression(expression) {
  
  expression = expression.replace(/X/g, '*').replace(/÷/g, '/');

 
  if (!isValidExpression(expression)) {
    return "Error"; 
  }
  
  
  try {
    return Function('return ' + expression)(); 
  } catch (e) {
    return "Error"; 
  }
}


function isValidExpression(expression) {
 
  const regex = /^[0-9+\-*/.()]+$/;
  return regex.test(expression);
}


buttons.forEach(button => {
  button.addEventListener('click', function() {
    const buttonValue = this.value;
    
 
    handleButtonClick(buttonValue, updateInput);
  });
});


resetButton.addEventListener('click', function() {
  handleButtonClick('RESET', updateInput);
});


delButton.addEventListener('click', function() {
  handleButtonClick('DEL', updateInput);
});


equalButton.addEventListener('click', function() {
  handleButtonClick('=', updateInput);
});
