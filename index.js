import characterData from "./data.js";
import Character from "./character.js";

function render() {
  document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
  document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();

document.getElementById("attack-button").addEventListener("click", attack);

function attack() {
  wizard.getDiceHtml();
  orc.getDiceHtml();
  wizard.takeDamage(orc.currentDiceScore);
  orc.takeDamage(wizard.currentDiceScore);
  render();
  if (orc.dead || wizard.dead) {
    endGame();
  }
}

function endGame() {
  const endEmoji = wizard.health > 0 ? "🔮" : "☠️";

  const endMessage =
    wizard.health === 0 && orc.health === 0
      ? `No victors - all creatures are dead ${endEmoji}`
      : wizard.health > 0
      ? `The Wizard Wins ${endEmoji}`
      : `The Orc is Victorious ${endEmoji}`;

  return (document.body.innerHTML = `<div class="end-game">
  <h2>Game Over</h2>
  <h3>${endMessage}</h3>
  <p class="end-emoji">${endEmoji}</p>
  </div>`);
}
