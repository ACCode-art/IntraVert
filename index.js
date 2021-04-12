const message__boardBody = document.querySelector('.message__boardBody');
const chat__inputField = document.querySelector('.chat__inputField');
const chat__input = document.querySelector('.chat__input');
const main__left = document.querySelector('.main__left');
const main__right = document.querySelector('.main__right');
const lm = document.querySelector('.lm');
const main = document.querySelector('.main');

const login = document.querySelector('.login');

const login__button = document.querySelector('.login__button');
const signout__button = document.querySelector('.signout__button');

const login__username = document.querySelector('.login__username').value;
const login__password = document.querySelector('.login__password');

console.log(login__username);

const userName = 'adam';
const password = 1234;

let lightModeTrue = false;

let loggedIn = false;

if (loggedIn === false) {
  main.style.display = 'none';
  login.style.display = 'flex';
}

login__button.addEventListener('click', (e) => {
  e.preventDefault();

  loggedIn = !loggedIn;

  if (loggedIn) {
    main.style.display = 'flex';
    login.style.display = 'none';
  }

  if (loggedIn === false) {
    main.style.display = 'none';
    login.style.display = 'flex';
  }
});

signout__button.addEventListener('click', (e) => {
  loggedIn = !loggedIn;

  if (loggedIn) {
    main.style.display = 'flex';
    login.style.display = 'none';
  }

  if (loggedIn === false) {
    main.style.display = 'none';
    login.style.display = 'flex';
  }
});

chat__input.addEventListener('click', () => {
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

  message__boardBody.insertAdjacentHTML('beforeend', HTML);

  chat__inputField.value = '';
});

lm.addEventListener('click', () => {
  main__left.classList.toggle('lightMode');
  main__right.classList.toggle('lightModeTwo');
  lightModeTrue = !lightModeTrue;
  console.log(lightModeTrue);
});
