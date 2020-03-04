/*
function randomMultiply(x1, x2) {
  let product = x1 * x2
  return product
}

function calcAvgSquare(x1, x2, x3) {
  let averageSquare = ((x1 + x2 + x3) / 3) * x1 ** 2
  return averageSquare
}

let userChoice = prompt(`Do you want to do an average calculation or a random multiplication?`).toLowerCase()

if (userChoice == 'average calculation') {
  num1 = parseInt(prompt(`Please enter your first number.`))
  num2 = parseInt(prompt(`Please enter your second number.`))
  num3 = parseInt(prompt(`Please enter your third number.`))

  calculation = calcAvgSquare(num1, num2, num3)

  alert(`The answer is ${calculation}.`)
} else if (userChoice == 'random multiplication') {
    let userNumber = parseInt(prompt('Please enter a number you would like to multiply.'))
    let randomNumber = Math.floor(Math.random() * 10) + 1
    let multiplication = randomMultiply(userNumber, randomNumber)
    
    alert(`The result of multiplying the random number ${randomNumber} with ${userNumber} is ${multiplication}.`)
} else {
    alert('You did not properly enter a choice.')
}
*/