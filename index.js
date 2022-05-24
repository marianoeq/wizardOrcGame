function getDiceRollArray(diceCount) {
  return new Array(diceCount).fill(0).map(() => {
    return Math.floor(Math.random() * 6) + 1;
  });
}
function getDiceHtml(diceCount) {
  return getDiceRollArray(diceCount)
    .map((num) => {
      return `<div class="dice">${num}</div>`;
    })
    .join("");
}
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

function Character(data){
    this.elementId = data.elementId;
    this.name = data.name;
    this.avatar = data.avatar;
    this.health = data.health;
    this.diceCount = data.diceCount;
    this.getCharacterHtml = function(){
        /* const { elementId, name, avatar, health, diceCount } = this;  */
        const diceHtml = getDiceHtml(this.diceCount);
        document.getElementById(`${this.elementId}`).innerHTML = `<div class= "character-card" >
                <h4 class="name">${this.name}</h4>
                <img class="avatar" src="${this.avatar}"/>
                <p class="health">health: <b> ${this.health} </b></p>
                <div class="dice-container"> ${diceHtml}</div>
            </div>`;    
        
            
    }        
}    

const orc = new Character(monster)
const wizard = new Character(hero)
orc.getCharacterHtml()
wizard.getCharacterHtml()


