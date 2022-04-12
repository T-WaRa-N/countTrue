// function to count the number of "true" in an array

let array = [true, false, true]

function countTrue(array){

  let numOfTrues = array.filter(element => element == true)

  return numOfTrues.length
}

module.exports = countTrue