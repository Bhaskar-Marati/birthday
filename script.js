import cardArray from "./data.js";

// alert("Thanks for making my Birthday much more special")
// function to add greet message when button is clicked
let greet = function(card, cardObj){
 card.append(cardObj.greetMessage)
 let btn = card.querySelector(".card-btn");
 btn.remove();
}
// function to fill each cardObj content into card
function content(x, cardObj) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <h4>Name: ${cardObj.name}</h4>
      <img src="${cardObj.imageAdr}" alt="screenshot of the message" >
      <span>Friend from ${cardObj.friendFrom}</span>
      <span>wished ${cardObj.timeWished()} ago</span>
      <button class = "card-btn" >click here!</button>
      `;
  x.append(card);

  let button = card.querySelector(".card-btn");
  button.addEventListener("click",()=>{
    greet(card, cardObj)
  });
}
// switch ladder to find -  where should the card go?
cardArray.forEach((cardObj) => {
  switch (true) {
    case cardObj.app == "wa":
      {
        let x = document.querySelector(".whatsapp .card-container");
        content(x, cardObj);
      }
      break;

    case cardObj.app == "fb":
      {
        let x = document.querySelector(".facebook .card-container");
        content(x, cardObj);
      }
      break;

    case cardObj.app == "pc":
      {
        let x = document.querySelector(".phone-call .card-container");
        content(x, cardObj);
      }
      break;

    case cardObj.app == "email":
      {
        let x = document.querySelector(".email .card-container");
        content(x, cardObj);
      }
      break;
  }
  
});
window.onscroll = function() {
  myFunction()
};

var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
