const input = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerText;
    const operators = ["+", "-", "*", "/", "%", "."];

    if (value === "AC") {
      string = "";
      input.value = "";
      return;
    }

    if (value === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
      return;
    }

    if (value === "=") {
      try {
        if (string.trim() === "") return;

        const result = eval(string);

        if (isNaN(result) || result === Infinity || result === -Infinity) {
          input.value = "Error";
          string = "";
        } else {
          input.value = result;
          string = result.toString();
        }
      } catch (error) {
        input.value = "Error";
        string = "";
      }
      return;
    }

    const lastChar = string.slice(-1);
    if (operators.includes(lastChar) && operators.includes(value)) {
      string = string.slice(0, -1) + value;
    } else {
      string += value;
    }

    input.value = string;
  });
});
