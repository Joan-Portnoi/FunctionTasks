// כתוב פוקנציה שבודקת מערך של מילים ומחזירה מערך עם המילים שמתחילות באות איי בלבד

function findWordsStartWithA(strArray) {
  //שיקבל ארגומנט - מערך עם שמות array עם פרמטר בשם  findWordsStartWithA הכרזה על פונקציה בשם

  const outPut = [] //.שבהמשך יכיל את כל השמות שמתחילות באות איי outPut משתנה בשם

  for (const name of strArray) {
    // name לולאה שעושה איטרציה לכל אלמנט במערך וממירה כל אלמנט למשתנה בשם
    if (name.charAt(0) === "a" || name.charAt(0) === "A") {
      //  תנאי לולאה - אם האות הראשונה שווה לאיי גדולה או קטנה
      outPut.push(name) // outPut אם התנאי קרה, אז השורה הזאת בעצם דוחפת את כל האלמנטים שמתחילים באות איי לתוך המערך ריק בשם
    }
  }
  return outPut // כתוצאה של הפונקציה. outPut הפקודה הזאת מחזירה את
}

const namesArray = [
  "Shlomo Arzi",
  "Omer Adam",
  "Sarit Hadad",
  "Amir Dadon",
  "Tomer Yosef",
  "Alon De Loco",
]

PrintToConsoleLog = findWordsStartWithA(namesArray) //משתנה שמאותחל בעצם לפונקציה עם ארגומנט של המערך שבניתי
console.log(PrintToConsoleLog) // הדפס לקונסול לוג את המשנתה שהוא בעצם הפונקציה
