let title = document.createElement('h2')
title.innerHTML = "Words Count"
let container = document.querySelector('.container');
container.appendChild(title)
let apps = document.createElement('div')
apps.className = "containerApps";
container.appendChild(apps)

let label = document.createElement('label');
label.className = "title";
label.innerHTML = "Message";
apps.appendChild(label);

let textArea = document.createElement('textarea');
textArea.placeholder = "Tulis Pesan disini..."
textArea.className = "textArea";
apps.appendChild(textArea)

let infoWords = document.createElement('div');
infoWords.className = "infoWords";
apps.appendChild(infoWords)

let spanCountWords = document.createElement('span');
spanCountWords.className  = "WordsCounts";
spanCountWords.innerHTML ="0 "
infoWords.appendChild(spanCountWords)
let spanCharactersCounts = document.createElement('span');
spanCharactersCounts.className="CharactersCounts";
spanCharactersCounts.innerHTML = "0";
infoWords.appendChild(spanCharactersCounts)
let spanInside = document.querySelector('.CharactersCounts')
let strongText  = document.createElement('strong');
spanInside.appendChild(strongText);

let countTarget = document.querySelector('.textArea')
let wordsTargetCount = document.querySelector('.WordsCounts');
let CharactersCount = document.querySelector('.CharactersCounts');

let count = function () {
    let characters = countTarget.value;
    let charactersLength = characters.length;

    let words = characters.split(/[\n\r\s]+/g).filter((word) => {
        return word.length > 0;
    });
    wordsTargetCount.innerHTML  = words.length;
    CharactersCount.innerHTML = charactersLength;
}

window.addEventListener('input', (e) => {
    if(e.target.matches('.textArea')){
        count();
    }
});