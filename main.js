// TicTacToeJS

// Declaring the counter
var counter = 0;
var playerToken;
var clickedBoxes = []


// Assigining gameSheet (9 boxes) to a variable
var gameSheet = document.querySelector(".gameSheet")
// If you don't call the event in the function ( ) it won't be assigned to anything
// Event gets assigned to an object
// When using an addEventListener and you need an event you add "event" to a function
gameSheet.addEventListener("click", function(event) {
  let id = event.target.id
  let playerHasClicked = clickedBoxes.includes(id)
  if(playerHasClicked) {
    return
  }
  // Add the string click to label it
  console.log("clicked" , clickedBoxes.includes(id))

  // counting by 1
  counter += 1
  console.log("counter", counter)



  // Even/Odd
  if (counter % 2 === 0) {
    playerToken = "O"
  } else {
    playerToken = "X"
  }



  // Targeting the id within the target in the event
  console.log("id", id)
  document.querySelector(id)
//in order to get a specific box (other than box one) we created a variable (id) which relates to our event listener.
  let getBox = document.getElementById(id);
  // console.log("box" + id)
  getBox.innerText = playerToken;
  console.log(playerToken)
  clickedBoxes.push(id)
})
