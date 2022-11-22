import characterData from './data.js';
import Character from './Character.js';

function attack() {
    wizard.getDiceHtml();
    orc.getDiceHtml();
    wizard.takeDamage(orc.currentDiceScore);
    orc.takeDamage(wizard.currentDiceScore);

    if (wizard.dead || orc.dead) {
        endGame();
    }

    render()
}

function endGame() {
    console.log('Game Over!');
}

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml();
    document.getElementById('monster').innerHTML = orc.getCharacterHtml();
}

document.getElementById("attack-button").addEventListener('click', attack);

const wizard = new Character(characterData.hero);
const orc = new Character(characterData.monster);
render();