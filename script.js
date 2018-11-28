//look at this https://codepen.io/april_lutheran/pen/JmpgGw

let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let numClosedDoors;

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  console.log('random num ' + choreDoor);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }
}

const isBot = door => {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
}

const isClicked = door => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const startRound = () => {
  console.log('currently playing is status is ' + currentlyPlaying);
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  numClosedDoors = 3;
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  randomChoreDoorGenerator();
}

const gameOver = status => {
  if (status === 'win') {
    startButton.innerHTML = "You win! Play again?."
  } else {
    startButton.innerHTML = "Game over! Play again?"
  }
  currentlyPlaying = false;
}

const playDoor = door => {
  numClosedDoors--;
  console.log('num doors ' + numClosedDoors);
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying) {
    door1.src = openDoor1;
    playDoor(door1);
  }
}

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying) {
    door2.src = openDoor2;
    playDoor(door2);
  }
}

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
    door3.src = openDoor3;
    playDoor(door3);
  }
}

startButton.onclick = () => {
  console.log('start button got clicked');
  if (!currentlyPlaying) {
    startRound();
  }
}

startRound();
