const calculatorUse = (fn: string): string => {
  var Fun = Function
  return new Fun('return ' + fn)()
}

export default calculatorUse