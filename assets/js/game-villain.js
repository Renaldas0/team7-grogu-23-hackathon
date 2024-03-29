"use strict";
const fightingField = document.getElementById("fighting-point-field");
const villainModalBody = document.querySelector("#villain-modal-body");
// this is a a file that deals with villain modifications

// ..............................................................................................

const villainlist = [
  {
    name: "Darth Vader",
    picture: "assets/images/villians/darth-vader.png",
    description: "A high ranking Jedi Knight who fought for Galactic Republic.",
    strongAgainst: "Prefers Blue and Red",
    colorProcentages: {
      red: 30,
      blue: 30,
      green: 20,
      yellow: 20,
      black: 0,
    },
    rewardProcentage: { color: 35, black: 10, health: 20, extraStorage: 20, extraBlackStorage: 15 },
    colorReward: { red: 25, blue: 30, green: 10, yellow: 35 },
    minimum: 5,
    maximum: 7,
  },
  {
    name: "Emperor Palpatine",
    picture: "assets/images/villians/emperor-palpatine.png",
    description: "A Dark lord who plans to destroy Jedi and take permanenet control of the galaxy.",
    strongAgainst: "Prefers Green and Yellow",
    colorProcentages: {
      red: 15,
      blue: 10,
      green: 40,
      yellow: 35,
      black: 0,
    },
    rewardProcentage: { color: 40, black: 10, health: 10, extraStorage: 20, extraBlackStorage: 20 },
    colorReward: {
      red: 25,
      blue: 30,
      green: 10,
      yellow: 35,
    },
    minimum: 5,
    maximum: 7,
  },
  {
    name: "General Grievous",
    picture: "assets/images/villians/general-grievous.png",
    description: "Extremely proficient lightstaber, notorious for visual design and powerful presence.",
    strongAgainst: "Prefers Yellow and Red",
    colorProcentages: {
      red: 35,
      blue: 10,
      green: 10,
      yellow: 45,
      black: 0,
    },
    rewardProcentage: { color: 30, black: 10, health: 30, extraStorage: 15, extraBlackStorage: 15 },
    colorReward: {
      red: 35,
      blue: 20,
      green: 10,
      yellow: 35,
    },
    minimum: 5,
    maximum: 7,
  },
  {
    name: "Darth Maul",
    picture: "assets/images/villians/darth-maul.png",
    description: "A formidable warrior strong with dark side. A mastermind who plotted his return to power.",
    strongAgainst: "Prefers Green and blue",
    colorProcentages: {
      red: 15,
      blue: 30,
      green: 40,
      yellow: 15,
      black: 0,
    },
    rewardProcentage: { color: 20, black: 15, health: 25, extraStorage: 25, extraBlackStorage: 15 },
    colorReward: {
      red: 15,
      blue: 30,
      green: 30,
      yellow: 25,
    },
    minimum: 5,
    maximum: 7,
  },
  {
    name: "200 iQ Stormtrooper",
    picture: "assets/images/villians/stormtrooper.png",
    description: "Managed to hit a Jedi with his blaster and dodged a closing door.",
    strongAgainst: "Prefers yellow and red",
    colorProcentages: {
      red: 35,
      blue: 20,
      green: 15,
      yellow: 30,
      black: 0,
    },
    rewardProcentage: { color: 30, black: 10, health: 20, extraStorage: 20, extraBlackStorage: 20 },
    colorReward: {
      red: 30,
      blue: 20,
      green: 20,
      yellow: 30,
    },
    minimum: 5,
    maximum: 7,
  },
  {
    name: "Jabba",
    picture: "assets/images/villians/jabba.png",
    description: "A fat, slug-like alien gangster, one of the most successful crime lords in the entire galaxy.",
    strongAgainst: "Prefers green and Red",
    colorProcentages: {
      red: 35,
      blue: 10,
      green: 40,
      yellow: 10,
      black: 5,
    },
    rewardProcentage: { color: 30, black: 20, health: 30, extraStorage: 10, extraBlackStorage: 10 },
    colorReward: {
      red: 40,
      blue: 15,
      green: 30,
      yellow: 15,
    },
    minimum: 5,
    maximum: 7,
  },
  {
    name: "Kylo-ren",
    picture: "assets/images/villians/kylo-ren.png",
    description: "Dark, powerful and extremely wrathful master of the Knightsmof Ren.",
    strongAgainst: "Preferes Green and Yellow",
    colorProcentages: {
      red: 15,
      blue: 20,
      green: 30,
      yellow: 35,
      black: 0,
    },
    rewardProcentage: { color: 30, black: 20, health: 20, extraStorage: 10, extraBlackStorage: 20 },
    colorReward: {
      red: 15,
      blue: 20,
      green: 30,
      yellow: 35,
    },
    minimum: 5,
    maximum: 7,
  },
];

let currentVillainData = {};

/**
 * chooses villian randomly from the list provided
 * pushes two villian onto the choice list
 */
let villianChoice = [];
function choseRandomVillain() {
  villianChoice = [];
  let intList = [];
  for (let i = 0; i < 2; i++) {
    let generatedInt = randomInt(0, villainlist.length - 1);

    while (intList.includes(generatedInt)) {
      generatedInt = randomInt(0, villainlist.length - 1);
    }

    intList.push(generatedInt);
  }
  for (let i of intList) {
    villianChoice.push(villainlist[i]);
  }
}

function renderVillainModal() {
  villainModalBody.innerHTML = "";
  choseRandomVillain();
  for (let i = 0; i < villianChoice.length; i++) {
    const mainDiv = document.createElement("div");
    const pictureDiv = document.createElement("img");
    const titleDiv = document.createElement("h5");
    const descriptionDiv = document.createElement("div");
    mainDiv.setAttribute("data-villain-id", `${i}`);
    let activeImage = i == 0 ? "active" : "not-active";
    mainDiv.classList.add("carousel-item", `${activeImage}`, "villain-modal-description");

    descriptionDiv.innerHTML = villianChoice[i].description;

    descriptionDiv.classList.add("w-100", "d-block", "m-auto", "text-center");

    titleDiv.innerHTML = villianChoice[i].name;
    titleDiv.classList.add("w-100", "d-block", "m-auto", "text-center");

    pictureDiv.setAttribute("src", villianChoice[i].picture);
    pictureDiv.classList.add("d-block", "hero-img", "m-auto", "text-center");

    mainDiv.appendChild(pictureDiv);
    mainDiv.appendChild(titleDiv);
    mainDiv.appendChild(descriptionDiv);
    villainModalBody.appendChild(mainDiv);
  }
}

function saveVillainData(index) {
  currentVillainData = villianChoice[index];
}

function renderVillian() {
  renderVillianGameProfile();
  const sizeArray = decideRectangleSize(); // Change later
  generateVillainGameStats(sizeArray);
  generateVillianNumbers();
  renderFightingPointRectangle();
}

function renderVillianGameProfile() {
  let villianImage = document.getElementById("villain-image");
  let villianDescription = document.getElementById("villian-description");
  let villianTitle = document.getElementById("villian-title");
  console.log(currentVillainData);
  villianImage.setAttribute("src", currentVillainData.picture);
  villianDescription.innerHTML = currentVillainData.description;
  villianTitle.innerHTML = currentVillainData.name;
}

function decideRectangleSize() {
  const randomBaseNumber = randomInt(currentVillainData.minimum, currentVillainData.maximum);
  let villainfightingPoint = currentGameSettings.level * 2 + randomBaseNumber;

  let squareSize = [];
  while (villainfightingPoint > 0) {
    let randomSize;
    if (villainfightingPoint > 2) {
      randomSize = randomInt(1, 3);
    } else {
      randomSize = randomInt(1, villainfightingPoint);
    }
    squareSize.push(randomSize);
    villainfightingPoint -= randomSize;
  }
  return squareSize;
}

function generateVillainGameStats(array) {
  currentVillainData.squareSizes = array;
  currentVillainData.colorChoices = [];
  console.log(currentVillainData);
  const red = currentVillainData.colorProcentages.red;
  const blue = currentVillainData.colorProcentages.blue;
  const green = currentVillainData.colorProcentages.green;
  const yellow = currentVillainData.colorProcentages.yellow;
  for (let i = 0; i < array.length; i++) {
    const randomNo = randomInt(0, 100);

    let color;
    if (randomNo < red) {
      color = "red";
    } else if (randomNo < red + blue) {
      color = "blue";
    } else if (randomNo < red + blue + green) {
      color = "green";
    } else if (randomNo < red + blue + green + yellow) {
      color = "yellow";
    } else {
      color = "black";
    }
    currentVillainData.colorChoices.push(color);
  }
}

function generateVillianNumbers() {
  const data = currentVillainData.squareSizes;
  currentVillainData.fightingNumbers = [];
  for (let i = 0; i < data.length; i++) {
    currentVillainData.fightingNumbers.push(randomInt(data[i], data[i] * 6));
  }
}

function renderFightingPointRectangle() {
  const dataNumbers = currentVillainData.fightingNumbers;
  const dataSquares = currentVillainData.squareSizes;
  const dataColors = currentVillainData.colorChoices;
  let renderData = "";
  for (let i = 0; i < dataNumbers.length; i++) {
    renderData += ` <div class="size-${dataSquares[i]} ${dataColors[i]}-area combat-box position-relative" data-area-no="${dataNumbers[i]}"></div>`;
  }
  fightingField.innerHTML = renderData;
  callAllDropables();
  renderFightingBadges();
}

function renderFightingBadges() {
  for (let i = 0; i < dropBoxesCenters.length; i++) {
    if (dropBoxesCenters[i].element.classList[2] == "combat-box") {
      const dice = dropBoxesCenters[i].diceScore;
      const total = dropBoxesCenters[i].requiredScore;

      if (dropBoxesCenters[i].element.children.length == 0) {
        dropBoxesCenters[
          i
        ].element.innerHTML = `<span class="position-absolute top-0 start-100 translate-middle points-badge bg-danger border border-light rounded-circle">
    <span class="score-points"> ${dice}/${total}</span>
  </span>`;
      } else {
        dropBoxesCenters[i].element.getElementsByTagName("span")[1].innerHTML = `${dice}/${total}`;
      }
    }
  }
}
