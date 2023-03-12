//כתוב פונקציה שבודקת מערך של מספרים ומחזיקה מערך חדש עם כל המספרים הזוגיים בלבד

function FindAllOddNumbers(numArray) {
  const outPut = []
  for (const number of numArray) {
    if (number % 2 == 0) {
      outPut.push(number)
    }
  }
  return outPut
}

numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const printToConsoleLog = FindAllOddNumbers(numbersArray)
console.log(printToConsoleLog)
