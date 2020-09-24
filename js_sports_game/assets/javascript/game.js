//let shoot = math.random();
//if (shoot < 0.4) {
// teamonenumshots++;
//teamonegoals.innerHTML = teamtwogoals
//}

// teamone
const teamOneNumshots = document.querySelector("#teamone-numshots");
const teamOneShootButton = document.querySelector("#teamone-shoot-button");
const teamOneGoals = document.querySelector("#teamone-numgoals");
teamOneShootButton.addEventListener("click", function () {
  console.log("teamone's shoot button clicked");
  let newCounterValue = Number(teamOneNumshots.innerHTML) + 1;
  teamOneNumshots.innerHTML = newCounterValue;
  if (Math.floor(Math.random() * (10 - 0) + 1) % 2 == 0) {
    let newGoalValue = Number(teamOneGoals.innerHTML) + 1;
    teamOneGoals.innerHTML = newGoalValue;
  }
});

const teamTwoNumshots = document.querySelector("#teamtwo-numshots");
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
const teamTwoGoals = document.querySelector("#teamtwo-numgoals");
teamTwoShootButton.addEventListener("click", function () {
  console.log("teamtwo's shoot button clicked");
  let newCounterValue = Number(teamTwoNumshots.innerHTML) + 1;
  teamTwoNumshots.innerHTML = newCounterValue;
  if (Math.floor(Math.random() * (10 - 0) + 1) % 2 == 0) {
    let newGoalValue = Number(teamTwoGoals.innerHTML) + 1;
    teamTwoGoals.innerHTML = newGoalValue;
  }
});

const resetContainer = document.querySelector("#reset-container");
const resetButton = document.querySelector("#reset-button");
const resetCount = document.querySelector("#num-resets");

resetButton.addEventListener("click", function () {
  console.log("the reset button had been clicked");
  let newCounterValue = Number(resetCount.innerHTML) + 1;
  resetCount.innerHTML = newCounterValue;

  teamOneNumshots.innerHTML = 0;
  teamOneGoals.innerHTML = 0;
  teamTwoNumshots.innerHTML = 0;
  teamTwoGoals.innerHTML = 0;
});
