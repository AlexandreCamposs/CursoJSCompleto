const previosOperationText = document.querySelector('#previous-operation');
console.log(previosOperationText);
const currentOperationText = document.querySelector('#current-operation');
console.log(currentOperationText);
const buttons = document.querySelectorAll('#buttons-container button');
console.log(buttons);

class Calculator{
  constructor(previosOperationText,currentOperationText){
    this.previosOperationText = previosOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }
  //add digit to calculator screen
  addDigit(digit){
    //check if current operation already hasa dot
    if(digit === '.' && this.currentOperationText.innerText.includes(".")){
      return;
    }
    this.currentOperation = digit;
    this.updateScreen();
    console.log(digit)
  }

  //Process all calculator operations
  processOperation(operation){
    console.log(operation)
  }
  updateScreen(){
    this.currentOperationText.innerText += this.currentOperation;
  }
}

const calc = new Calculator(previosOperationText,currentOperationText);
console.log(calc)

buttons.forEach((btn)=>{
  btn.addEventListener('click', e =>{
    const value = e.target.innerText

    if(+value >= 0 || value === '.'){
      calc.addDigit(value)
    }else{
         calc.processOperation(value)
    }
  })
})