// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const likeElement = document.querySelectorAll(".like-glyph");
  const errorModal = document.getElementById("modal");

  errorModal.classList.add("hidden");

    likeElement.forEach((heart) =>
      heart.addEventListener("click", () => {
        mimicServerCall()

        .then(() => {
          if(heart.classList.contains("activated-heart")) {
            heart.classList.remove("activated-heart");
            heart.textContent = EMPTY_HEART;
          } else{
            heart.classList.add("activated-heart");
            heart.textContent = FULL_HEART;
          }
        })

        .catch((error) => {
          errorModal.classList.remove("hidden");
          errorModal.querySelector("#modal-message").textContent = error;
        })
      }
      
      ))}
);

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
