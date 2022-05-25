import characterData from "./data.js";
import Character from "./character.js";

function render(nameOfCharacter) {
  const newCharac = new Character(nameOfCharacter);
  document.getElementById(nameOfCharacter.elementId).innerHTML =
    newCharac.getCharacterHtml();
}

render(characterData.hero);
render(characterData.monster);
