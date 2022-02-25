let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let backSpace = document.getElementById("backSpace");

backSpace.addEventListener("click", () => {
  screen.value = screen.value.slice(0, -1);
  screenValue = screen.value;
});
let screenValue = "";
for (let item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      screenValue = screen.value;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
