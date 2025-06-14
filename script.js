function buyKlepon() {
  let name = prompt("What's your name?");
  let email = prompt("What's your email address?");
  let likeCakes = prompt("Do you like sweet dessert?");

  likeCakes = likeCakes.toLowerCase().trim();

  if (likeCakes === "no") {
    alert("Be brave, " + name + "! Try some Klepon now.");
  } else {
    alert("Fantastic, " + name + "! Enjoy the Klepon.");
  }
}

let buyButton = document.querySelector("button");
buyButton.addEventListener("click", buyKlepon);
