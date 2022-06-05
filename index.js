function makeid() {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 15; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

let btn1 = document.querySelector("#password-one");
let btn2 = document.querySelector("#password-two");
let btn3 = document.querySelector("#password-three");
let btn4 = document.querySelector("#password-four");

function generatePasswords() {
  btn1.textContent = makeid();
  btn2.textContent = makeid();
  btn3.textContent = makeid();
  btn4.textContent = makeid();
}

// console.log(makeid());
