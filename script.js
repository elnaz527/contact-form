// const emailAddress = document.getElementById("email-address");
const inputes = document.querySelectorAll("input");
const submitButton = document.querySelector("button");
const checkTick = document.getElementById("check-tick");
const textMessage = document.getElementById("text-input");
const errTickBox = document.getElementById("err-tickbox");
const radioButtons = document.querySelectorAll(".radio-button");
const errRadioButton = document.getElementById("err-radio");
const message = document.getElementById("message");
const form = document.getElementById("form");
let tickBox = false;
let selected = null;
let statusInput = 0;
const checkValues = () => {
  statusInput = 0;
  inputes.forEach((input) => {
    if (!input.value) {
      input.nextElementSibling.style.display = "block";
      input.classList.add("error-inpute");
    } else {
      statusInput++;
    }
  });
  if (!textMessage.value) {
    textMessage.nextElementSibling.style.display = "block";
    textMessage.classList.add("error-inpute");
  } else {
    statusInput++;
  }
  !tickBox ? (errTickBox.style.display = "block") : statusInput++;
  !selected ? (errRadioButton.style.display = "block") : statusInput++;
  return statusInput;
};
const submitHandler = () => {
  let value = checkValues(statusInput);
  console.log(value);
  if (value >= 6) {
    showMessage();
    reloadForm();
    setTimeout(() => {
      message.style.display = "none";
      form.style.marginTop = "80px";
    }, 3000);
  }
  console.log(statusInput);
};
const reloadForm = () => {
  inputes.forEach((input) => {
    input.nextElementSibling.style.display = "none";
    input.value = null;
    input.classList.remove("error-inpute");
  });
  textMessage.value = null;
  textMessage.nextElementSibling.style.display = "none";
  errTickBox.style.display = "none";
  checkTick.classList.remove("check-tick-true");
  tickBox = false;
  errRadioButton.style.display = "none";
  selected = null;
  radioButtons.forEach((button) => {
    button.children[0].classList.remove("radio-button-select");
  });
};
const showMessage = () => {
  message.style.display = "block";
  form.style.marginTop = "0";
};
const checkTickHandler = () => {
  if (!tickBox) {
    checkTick.classList.add("check-tick-true");
    tickBox = true;
  } else {
    checkTick.classList.remove("check-tick-true");
    tickBox = false;
  }
};
const selectHandler = (event) => {
  selected = event.target.id;
  console.log(selected);
  radioButtons.forEach((button) => {
    if (button.id === selected) {
      button.children[0].classList.add("radio-button-select");
    } else {
      button.children[0].classList.remove("radio-button-select");
    }
  });
};
radioButtons.forEach((button) => {
  button.addEventListener("click", selectHandler);
});
checkTick.addEventListener("click", checkTickHandler);
submitButton.addEventListener("click", submitHandler);
