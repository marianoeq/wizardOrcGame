const hero = {
  elementId: "hero",
  name: "Wizard",
  avatar: "images/wizard.png",
  health: 60,
  diceCount: 3,
};
const monster = {
  elementId: "monster",
  name: "Orc",
  avatar: "images/orc.png",
  health: 10,
  diceCount: 1,
};

function getDiceRollArray(diceCount) {
  let arrOfNumbers = [];
  for (let i = 0; i < diceCount; i++) {
    arrOfNumbers.push(Math.floor(Math.random() * 6) + 1);
}
return arrOfNumbers;
}

function getDiceHtml(diceCount){
  return getDiceRollArray(diceCount).map((num)=>{
      return `<div class="dice">${num}</div>`
  }).join("")
   
}


function renderCharacter(data) {
  const { elementId, name, avatar, health, diceCount } = data; //Destructuring data from both objects above.
  const diceHtml = getDiceHtml(diceCount)


  document.getElementById(
    `${elementId}`
  ).innerHTML = `<div class= "character-card" >
        <h4 class="name">${name}</h4>
        <img class="avatar" src="${avatar}"/>
        <p class="health">health: <b> ${health} </b></p>
        <div class="dice-container"> ${diceHtml}</div>
    </div>`;
}

renderCharacter(hero);
renderCharacter(monster);
