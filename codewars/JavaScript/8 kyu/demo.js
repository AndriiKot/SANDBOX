
function sameCase(a, b){
    const allLetters = new RegExp(/[A-z]/);
    const lowerCases = new RegExp(/[a-z]/);
    const upCases = new RegExp(/[A-Z]/);
    if (allLetters.test(a) && allLetters.test(b)){
        if (lowerCases.test(a) && lowerCases.test(b)) {
            return 1
        }
        if (upCases.test(a) && upCases.test(b)) {
            return 1
        }
        return 0
    }
    return -1
  }

  console.log(sameCase('a','Z'))
  console.log(sameCase('A','Z'))
  console.log(sameCase('a','b'))
  console.log(sameCase('?','Z'))
  console.log(sameCase('a','3'))



  