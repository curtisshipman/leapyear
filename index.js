function isLeap(year) {
    
var result = ""
var leapYear = "Leap year."    
var notLeapYear = "Not leap year."

if (year % 4 === 0){
    if (year % 100 === 0 && year % 400 === 0){
        result = leapYear
        } else if (year % 100 !== 0) {
            result = leapYear
        } else {
            result = notLeapYear
        }
    } else {
    result = notLeapYear
    }

 console.log(result)
    return result


}
