
module.exports = function JumpWithNumber1 (input) {
  const inputMap = input.map((number, index) => {
    const jumpsTo = index + number
    return {
      index,
      number,
      jumpsTo: jumpsTo > input.length - 1 ? input.length - 1 : jumpsTo
    }
  })

  const compareNextNumber = (prev, next) => {
    return (prev.jumpsTo === next.jumpsTo && prev.number > next.number) ||
      (prev.jumpsTo < next.jumpsTo)
  }

  const output = []
  let index = 0
  while (index >= 0 && index <= inputMap.length - 1) {
    const value = inputMap[index]
    output.push(value.number)
    if (index === inputMap.length - 1) {
      index++
    } else {
      if (value.jumpsTo >= inputMap.length - 1) {
        index = inputMap.length - 1
      } else {
        let nextNumber
        for (let i = index; i <= value.jumpsTo; i++) {
          if (!nextNumber || compareNextNumber(nextNumber, inputMap[i])) {
            nextNumber = inputMap[i]
          }
        }
        index = nextNumber.index
      }
    }
  }
  return output
}
