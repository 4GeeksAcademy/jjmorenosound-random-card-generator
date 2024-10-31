/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let cardSuit = ["hearts", "diamonds", "clubs", "spades"];

  let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  let randomCardSuit = Math.floor(Math.random() * cardSuit.length);
  document.querySelector("#card").innerHTML = `${cardNumber[randomCardNumber]}`;
 
  const suits = document.querySelectorAll(".suit");
  for (let i = 0; i < suits.length; i++) {
    suits[i].classList.add(cardSuit[randomCardSuit]);
  }
};
