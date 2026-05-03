let display = document.getElementById("display");

// Add value
function appendValue(value) {
  if (display.value === "0") {
    display.value = value;
    return;
  }

  let lastChar = display.value.slice(-1);

  // Prevent double operators
  if ("+-*/".includes(lastChar) && "+-*/".includes(value)) {
    return;
  }

  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "0";
}

// Backspace
function backspace() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

// Calculate result
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", function (event) {
  let key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});