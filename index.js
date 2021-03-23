const message__boardBody = document.querySelector(".message__boardBody");
const chat__inputField = document.querySelector(".chat__inputField");
const button = document.querySelector("button");
const main__left = document.querySelector(".main__left");
const main__right = document.querySelector(".main__right");
const lm = document.querySelector(".lm");

let lightModeTrue = false;

button.addEventListener("click", () => {
  const dateNow = new Date();
  const date = dateNow.toLocaleString();

  const value = chat__inputField.value;

  const HTML = `<div class="chat__box">
      <div class="chat__boxHeader" >
        <p>@ME</p>
        <p class="chat-box-time">${date}</p>
      </div>
      <div class="chat__boxBody">
        <p>${value}</p>
      </div>
    </div>`;

  message__boardBody.insertAdjacentHTML("beforeend", HTML);

  chat__inputField.value = "";
});

lm.addEventListener("click", () => {
  main__left.classList.toggle("lightMode");
  main__right.classList.toggle("lightModeTwo");
  lightModeTrue = !lightModeTrue;
  console.log(lightModeTrue);
});
