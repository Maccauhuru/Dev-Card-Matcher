let cardsArray = [
    { 'name': 'Angular', 'img': '/images/angular-logo.png?raw=true', },
    { 'name': 'AWS', 'img': '/images/aws-logo.png?raw=true', },
    { 'name': 'Gatsby', 'img': '/images/gatsby-logo.png?raw=true', },
    { 'name': 'JS', 'img': '/images/js-logo.png?raw=true', },
    { 'name': 'Node', 'img': '/images/node-js-logo.png?raw=true', },
    { 'name': 'React', 'img': '/images/react-logo.png?raw=true', },
    { 'name': 'Redux', 'img': '/images/redux-logo.png?raw=true', },
    { 'name': 'Vue', 'img': '/images/vue-logo.png?raw=true', },
    { 'name': 'Sass', 'img': '/images/sass-logo.png?raw=true', },
    { 'name': 'Netlify', 'img': '/images/netlify-logo.png?raw=true', },
    { 'name': 'Gulp', 'img': '/images/gulp-logo.png?raw=true', },
    { 'name': 'GraphQL', 'img': '/images/graphql-logo.png?raw=true', },
];

//duplicate the cards
const gameGrid = cardsArray.concat(cardsArray);
//randomize gameGrid on each page refresh
gameGrid.sort(()=> 0.5 - Math.random());

//create the game canvas : target main 'div' and create a 'section' tag
const game = document.getElementById("board-game"); //div
const grid = document.createElement("section");//section
let count  = 0;
let cardGuess1 = '';
let cardGuess2 = '';
grid.setAttribute("class","grid");
game.appendChild(grid);

//loop through cardsArray and display each dev logo
for(let i=0;i<gameGrid.length;i++){
const card = document.createElement('div');
card.classList.add('card');
card.dataset.name = gameGrid[i].name;
card.style.backgroundImage = `url(${gameGrid[i].img})`;
grid.appendChild(card);
}

//add event listener to grid
grid.addEventListener('click',(e)=>{
const clicked = e.target;
if(count < 2){
count++;
(clicked.nodeName === "DIV") ? clicked.classList.add('selected') : null;
console.log(clicked.dataset.name);
}
});

function checkCardMatch(){
if(clicked.dataset.name)
console.log('value: ' + clicked.dataset.name);   
};
