let cardsArray = [
    { 'name': 'CSS', 'img': '/images/css3-logo.png?raw=true', },
    { 'name': 'HTML', 'img': '/images/html5-logo.png?raw=true', },
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

//create the game canvas : target main 'div' and create a 'section' tag
const game = document.getElementById("board-game"); 
const grid = document.createElement("section");
grid.setAttribute("class","grid");
game.appendChild(grid);

//loop through cardsArray and display each dev logo

for(let i=0;i<cardsArray.length;i++){
let card = document.createElement('div');
card.classList.add('card');
card.dataset.name = cardsArray[i].name;
card.style.backgroundImage = `url(${cardsArray[i].img})`;
grid.appendChild(card);
}
