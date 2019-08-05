const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let kcWin = record.find(function(elem) {
    return elem.result === "W"});
    if (kcWin)
      return kcWin.year 
    else 
      return undefined
  }