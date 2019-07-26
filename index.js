const input = document.querySelector("#input");
const button = document.querySelector("#button");
const value = input.value;

//Function that calculates/checks narcissist number and returns a boolean value based on check
const narcissistNum = num => {
  const value = input.value;
  const length = value.length;
  const digits = value
    .toString()
    .split("")
    .map(num => parseInt(num));
  const sumOfDigits = digits.reduce((total, currentVal) => {
    return total + Math.pow(currentVal, length);
  }, 0);
  return sumOfDigits.toString() === num.toString();
};

// Button click listener function
button.addEventListener("click", () => {
  const value = input.value;
  const display = document.querySelector("#answer");
  if (!value || Number.isNaN(Number(value))) {
    alert("Please Enter a number to be checked");
    display.innerHTML = "";
    return;
  }

  const isNarcissistNum = narcissistNum(value);
  if (isNarcissistNum) {
    display.textContent = `${value} is a Narcissistic Number`;
  } else {
    display.textContent = `${value} is not a Narcissistic Number`;
  }
});

// Clear input field
input.addEventListener("keyup", event => {
  const value = input.value;
  const display = document.querySelector("#answer");
  if (event.keyCode === 8 || event.keyCode === 46) {
    if (display.innerHTML !== "") {
      display.innerHTML = "";
    }
  }
});
