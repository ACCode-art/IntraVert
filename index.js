const message__boardBody = document.querySelector('.message__boardBody');
const chat__inputField = document.querySelector('.chat__inputField');
const chat__input = document.querySelector('.chat__input');
const chat__inputName = document.querySelector('.chat__inputName');
const main__left = document.querySelector('.main__left');
const main__right = document.querySelector('.main__right');
const lm = document.querySelector('.lm');
const main = document.querySelector('.main');

const send__button = document.querySelector('.send__button');

const login = document.querySelector('.login');

const login__button = document.querySelector('.login__button');
const signout__button = document.querySelector('.signout__button');

const login__username = document.querySelector('.login__username');
const login__password = document.querySelector('.login__password');

const users = [{ name: 'adam', password: 1234 }];

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

send__button.addEventListener('click', () => {
  const dateNow = new Date();
  const date = dateNow.toLocaleString();
  const valueofName = chat__inputName.value;
  const value = chat__inputField.value;

  const HTML = `<div class="chat__box">
      <div class="chat__boxHeader" >
        <p>@${valueofName}</p>
        <p class="chat-box-time">${date}</p>
      </div>
      <div class="chat__boxBody">
        <p>${value}</p>
      </div>
    </div>`;

  message__boardBody.insertAdjacentHTML('beforeend', HTML);

  chat__inputField.value = '';
  chat__inputName.value = '';
});

lm.addEventListener('click', () => {
  main__left.classList.toggle('lightMode');
  main__right.classList.toggle('lightModeTwo');
  lightModeTrue = !lightModeTrue;
});
