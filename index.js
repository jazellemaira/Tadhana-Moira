if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var buyTickets = document.getElementsByClassName("tour-btn");
  for (var i = 0; i < buyTickets.length; i++) {
    var buyButton = buyTickets[i];
    buyButton.addEventListener("click", buyTicketsClicked);
  }
}

function buyTicketsClicked() {
  alert(
    "\nThank you for your purchase. \n\n \u2665\u2665\u2665 \nSee you sa tagpuan!"
  );
}
