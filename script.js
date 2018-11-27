let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

let currentlyPlaying = true;

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

const playDoor = door => {
  numClosedDoors--;
  console.log('num doors ' + numClosedDoors);
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  }
}

if (!isClicked(doorImage1) && currentlyPlaying) {
  doorImage1.onclick = () => {
  	door1.src = openDoor1
    playDoor(door1);
	}
}

if (!isClicked(doorImage2) && currentlyPlaying) {
  doorImage2.onclick = () => {
  	door2.src = openDoor2;
    playDoor(door2);
	}
}

if (!isClicked(doorImage3) && currentlyPlaying) {
  doorImage3.onclick = () => {
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

const startRound = () => {
  console.log('currently playing is ' + currentlyPlaying);
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  numClosedDoors = 3;
  doorImage1 = closedDoorPath;
  doorImage2 = closedDoorPath;
  doorImage3 = closedDoorPath;
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
    playDoor();
  } else {
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
    playDoor();
  }
}

startRound();
