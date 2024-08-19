const inputes = document.querySelectorAll("input");
const submitButton = document.querySelector("button");
const checkTick = document.getElementById("check-tick");
const textMessage = document.getElementById("text-input");
const emailAddress = document.getElementById("email-address");
const errTickBox = document.getElementById("err-tickbox");
const radioButtons = document.querySelectorAll(".radio-button");
const errRadioButton = document.getElementById("err-radio");
const message = document.getElementById("message");
const form = document.getElementById("form");
console.log(textMessage.style);
let tickBox = false;
let selected = null;
let statusInput = 0;
const showMessage = () => {
  message.style.display = "block";
  form.style.marginTop = "0";
};
const checkFormValues = () => {
  statusInput = 0;
  inputes.forEach((input) => {
    if (!input.value) {
      input.nextElementSibling.style.display = "block";
      input.classList.add("error-inpute");
    } else {
      statusInput++;
      input.nextElementSibling.style.display = "none";
      input.classList.remove("error-inpute");
    }
  });
  if (!emailAddress.value.includes("@")) {
    emailAddress.nextElementSibling.style.display = "block";
    emailAddress.classList.add("error-inpute");
  } else {
    statusInput++;
    emailAddress.nextElementSibling.style.display = "none";
    emailAddress.classList.remove("error-inpute");
  }
  if (!textMessage.value) {
    textMessage.nextElementSibling.style.display = "block";
    textMessage.classList.add("error-inpute");
  } else {
    statusInput++;
    textMessage.nextElementSibling.style.display = "none";
    textMessage.classList.remove("error-inpute");
  }
  if (!tickBox) {
    errTickBox.style.display = "block";
  } else {
    statusInput++;
    errTickBox.style.display = "none";
  }
  if (!selected) {
    errRadioButton.style.display = "block";
  } else {
    statusInput++;
    errRadioButton.style.display = "none";
  }
  return statusInput;
};
const submitHandler = () => {
  let checkValue = checkFormValues(statusInput);
  if (checkValue >= 7) {
    showMessage();
    reloadForm();
    setTimeout(() => {
      message.style.display = "none";
      form.style.marginTop = "80px";
    }, 3000);
  }
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
    button.classList.remove("button-selected");
  });
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
  radioButtons.forEach((button) => {
    if (button.id === selected) {
      button.children[0].classList.add("radio-button-select");
      button.classList.add("button-selected");
    } else {
      button.children[0].classList.remove("radio-button-select");
      button.classList.remove("button-selected");
    }
  });
};
radioButtons.forEach((button) => {
  button.addEventListener("click", selectHandler);
});
checkTick.addEventListener("click", checkTickHandler);
submitButton.addEventListener("click", submitHandler);
