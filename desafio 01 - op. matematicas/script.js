let firstNumber = prompt ("Please insert one number bellow")
let secondNumber = prompt ("Please insert another number bellow")

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restdiv = firstNumber % secondNumber;
 
alert('Soma:' + sum);
alert('Subtração:' + sub);
alert('Multiplicação:' + multi);
alert('Divisão:' + div);
alert('Resto da divisão:' + restDiv);

function isSumeven (firstNumber, secondNumber){
  const sum = firstNumber + secondNumber;
  return sum % 2 === 0;
}
 
