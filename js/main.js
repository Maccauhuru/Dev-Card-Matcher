let cardsArray = [{
        'name': 'Angular',
        'img': '/images/angular-logo.png?raw=true',
    },
    {
        'name': 'AWS',
        'img': '/images/aws-logo.png?raw=true',
    },
    {
        'name': 'Gatsby',
        'img': '/images/gatsby-logo.png?raw=true',
    },
    {
        'name': 'JS',
        'img': '/images/js-logo.png?raw=true',
    },
    {
        'name': 'Node',
        'img': '/images/node-js-logo.png?raw=true',
    },
    {
        'name': 'React',
        'img': '/images/react-logo.png?raw=true',
    },
    {
        'name': 'Redux',
        'img': '/images/redux-logo.png?raw=true',
    },
    {
        'name': 'Vue',
        'img': '/images/vue-logo.png?raw=true',
    },
    {
        'name': 'Sass',
        'img': '/images/sass-logo.png?raw=true',
    },
    {
        'name': 'Netlify',
        'img': '/images/netlify-logo.png?raw=true',
    },
    {
        'name': 'Gulp',
        'img': '/images/gulp-logo.png?raw=true',
    },
    {
        'name': 'GraphQL',
        'img': '/images/graphql-logo.png?raw=true',
    },
];

//duplicate the cards
const gameGrid = cardsArray.concat(cardsArray);
//randomize gameGrid on each page refresh
gameGrid.sort(() => 0.5 - Math.random());

//create the game canvas : target main 'div' and create a 'section' tag
const game = document.getElementById("board-game"); //div
const grid = document.createElement("section"); //section
let count = 0;
let prevTarget = null;
let cardGuess1 = '';
let cardGuess2 = '';
let delay = 1200;
grid.setAttribute("class", "grid");
game.appendChild(grid);

//loop through cardsArray and display each dev logo
for (let i = 0; i < gameGrid.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = gameGrid[i].name;
//create the card placeholders (unflipped)
    const front = document.createElement('div');
    front.classList.add('front');
//create the flipped cards
    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${gameGrid[i].img})`;
//append card to grid
    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
}

//add event listener to grid
grid.addEventListener('click', (e) => {
    const clickedCard = e.target;
    if (clickedCard.nodeName === 'SECTION' || clickedCard === prevTarget || clickedCard.parentNode.classList.contains('match') || clickedCard.parentNode.classList.contains('selected')) {
        return;
    }
    if (count < 2) {
        count++;
        if (count === 1) {
            cardGuess1 = clickedCard.parentNode.dataset.name;
            clickedCard.parentNode.classList.add('selected');
        } else {
            cardGuess2 = clickedCard.parentNode.dataset.name;
            clickedCard.parentNode.classList.add('selected');
        }
        if (cardGuess1 !=='' && cardGuess2 !=='') {
            if (cardGuess1 === cardGuess2) {
                setTimeout(match, delay)
                setTimeout(resetGuesses, delay);
            } else {
                setTimeout(resetGuesses,delay);
            }
        }
        prevTarget = clickedCard;
    }
});

//Add CSS style to matched cards
let match = function () {
    let selected = document.querySelectorAll('.selected');
    for (let i = 0; i < selected.length; i++) {
        selected[i].classList.add('match');
    }
}

//reset guesses after 2 counts
function resetGuesses() {
    count = 0;
    cardGuess1 = '';
    cardGuess2 = '';
    prevTarget = null;

    var selected = document.querySelectorAll('.selected');
    for (i = 0; i < selected.length; i++) {
        selected[i].classList.remove('selected');
    }
}