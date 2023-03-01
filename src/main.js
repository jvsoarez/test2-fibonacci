const inputValue = document.querySelector('#number-input');
const button = document.querySelector('#button-verify');
const paragraph = document.querySelector('#result-paragraph');

const checkNumber = () => {
  let number = Number(inputValue.value);  
  let a = 0;
  let b = 1;
  let c = 1;
  while (c < number) {
    c = a + b;
    a = b;
    b = c;
  }
  const response = (c === number) ? 
    `${number} Está na sequência de Fibonacci` 
    : `${number} Não está na sequência de Fibonacci`;
  return response;
};

const showTheAnswer = (event) => {
  event.preventDefault();
  paragraph.innerText = checkNumber();
  inputValue.value = '';
};

button.addEventListener('click', showTheAnswer);

