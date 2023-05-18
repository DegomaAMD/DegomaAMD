let displayValue = document.getElementById('displayValue');

const calcClear = () => {
  displayValue.value = '';
}

const calcClearOne = () => {
  this.displayValue.value = this.displayValue.value.toString().slice(0,-1);
  }


const calcValue = (n) => {
displayValue.value += n;
}

const calcOutput = () => {
  displayValue.value = eval(displayValue.value);
}