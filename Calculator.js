function Calculator(a, b, operator) {
  if (
    operator == "+" ||
    operator == "-" ||
    operator == "*" ||
    operator == "/" ||
    operator == "%"
  ) {
  }
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    default:
      throw new Error("Operator is not a valid mathematical operator");
  }
}

const result = Calculator(3, 4, "+");
console.log("result", result);
