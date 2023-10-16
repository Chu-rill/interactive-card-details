let cardNameInput = document.querySelector(".card-name");
let cardNumberInput = document.querySelector(".card-number");
let monthInput = document.querySelector(".MM");
let yearInput = document.querySelector(".YY");
let cvcInput = document.querySelector(".CVC");
let cardNameOutput = document.querySelector(".card-name-output");
let cardNumberOutput = document.querySelector(".card-num-output");
let monthOutput = document.querySelector(".mm-output");
let yearOutput = document.querySelector(".yy-output");
let cvcOutput = document.querySelector(".cvc-output");
let button = document.querySelector(".confirm");
let cardNameError = document.querySelector(".error-card-num");
let expError = document.querySelector(".error-exp");
let cvcError = document.querySelector(".error-cvc");
let remark = document.querySelector(".remark");
let main = document.querySelector("main");

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

button.addEventListener("click", () => {
  //   if (cardNumberInput.contains(letters)) {
  //     cardNameError.style.display = "block";
  //     cardNameError.style.borderColor = "red";
  //   } else
  if (monthInput.value === "") {
    expError.style.display = "block";
    monthInput.style.borderColor = "red";
  } else if (yearInput.value === "") {
    expError.style.display = "block";
    yearInput.style.borderColor = "red";
  } else if (cvcInput.value === "") {
    cvcError.style.display = "block";
    cvcInput.style.borderColor = "red";
  } else {
    cardNameOutput.innerHTML = cardNameInput.value;
    cardNumberOutput.innerHTML = cardNumberInput.value;
    monthOutput.innerHTML = monthInput.value;
    yearOutput.innerHTML = yearInput.value;
    cvcOutput.innerHTML = cvcInput.value;
    remark.style.transform = "scale(1)";
    main.style.transform = "scale(0)";

    expError.style.display = "none";
    monthInput.style.borderColor = "color-mix(in srgb, gray, white 70%)";
    expError.style.display = "none";
    yearInput.style.borderColor = "color-mix(in srgb, gray, white 70%)";
    cvcError.style.display = "none";
    cvcInput.style.borderColor = "color-mix(in srgb, gray, white 70%)";

    cardNameInput.value = "";
    cardNumberInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
    cvcInput.value = "";
  }
});
