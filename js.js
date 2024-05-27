function toggleCard() {
  // get the card
  var myCard = document.getElementById("show-more");

  // get the current value of the card's display property
  var displaySetting = myCard.style.display;

  // also get the card button, so we can change what it says
  var cardButton = document.getElementById("cardButton");

  // now toggle the CARD and the button text, depending on current state
  if (displaySetting == "block") {
    // card is visible. hide it
    myCard.style.display = "none";
    // change button text
    cardButton.innerHTML =
      'Voir plus <img src="./Images/plus.png" alt="voir plus" class="btn-img">';
  } else {
    // card is hidden. show it
    myCard.style.display = "block";
    // change button text
    cardButton.innerHTML =
      'Voir moins <img src="./Images/minus-sign.png" alt="voir moins" class="btn-img">';
  }
}

function toggleCardPro() {
  var myCardPro = document.getElementById("services-pro");
  var displaySetting = myCardPro.style.display;
  var cardButtonPro = document.getElementById("proCardButton");
  if (displaySetting == "block") {
    // card is visible. hide it
    myCardPro.style.display = "none";
    // change button text
    cardButtonPro.innerHTML =
      'Services professionels <img src="./Images/plus.png" alt="Professionels" class="btn-img">';
  } else {
    // card is hidden. show it
    myCardPro.style.display = "block";
    // change button text
    cardButtonPro.innerHTML =
      'Voir moins <img src="./Images/minus-sign.png" alt="voir moins" class="btn-img">';
  }
}
