// variable Declarations

const pageContainer = document.querySelector(".container");
const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const punchlineText = document.createElement("h4");

pageContainer.appendChild(punchlineText);
jokeBtn.before(punchlineText);



jokeBtn.addEventListener("click", function(){

  // Fetch joke from API
 fetch("https://official-joke-api.appspot.com/random_joke")
  .then((response) => response.json())
  .then((data) => {
    jokeContainer.innerText  = data.setup;
    punchlineText.innerText = " ";
    setTimeout(() => {
      punchlineText.innerText = `-${data.punchline} 😂`;
    }, 3000);
  });

});
