import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

function Character(data) {
  Object.assign(this, data);

  this.takeDamage = function (attackScoreArray) {
    const totalAttackScore = attackScoreArray.reduce((cur, acc) => {
      return cur + acc;
    });
    this.health = this.health - totalAttackScore;
    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
        }
  };

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map((num) => {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  this.getCharacterHtml = function () {
    const { name, avatar, health, diceArray } = this;

    return `<div class= "character-card" >
                  <h4 class="name">${name}</h4>
                  <img class="avatar" src="${avatar}"/>
                  <p class="health">health: <b> ${health} </b></p>
                  <div class="dice-container"> ${diceArray}</div>
            </div>`;
  };
}

export default Character;
