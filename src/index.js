document.addEventListener('DOMContentLoaded', ()=>{

//card options
const cardsArray = [
    {
        name:'fries',
        img: 'src/images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'src/images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'src/images/ice-cream.png'
    },
    {
        name:'pizza',
        img:'src/images/pizza.png'
    },
    {
        name:'milkshake',
        img:'src/images/milkshake.png'
    },
    {
        name:'hotdog',
        img:'src/images/hotdog.png'
    },
    {
        name:'fries',
        img: 'src/images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'src/images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'src/images/ice-cream.png'
    },
    {
        name:'pizza',
        img:'src/images/pizza.png'
    },
    {
        name:'milkshake',
        img:'src/images/milkshake.png'
    },
    {
        name:'hotdog',
        img:'src/images/hotdog.png'
    },
    // {
    //     name:'white',
    //     img:'src/images/white.png'
    // },
    // {
    //     name:'blank',
    //     img:'src/images/blank.png'
    // }
]


cardsArray.sort(() => 0.5 - Math.random()) /*sorts array randomly */
console.log(cardsArray)

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard(){
    for (let i = 0;i<cardsArray.length; i++){
        const card = document.createElement('img') /* how come we use a const instead of let and why doesnt program breakdown when we use for loop here?*/
        card.setAttribute('src','src/images/blank.png') /*sets the img tag to have this img*/
        card.setAttribute('data-id', i) /*each img tag gets a data id to keep track of it */
        card.addEventListener('click', flipCard) /* if img is clicked on then we invoke function flipCard*/
        grid.appendChild(card) /*this adds our image to the div with class grid*/
    }
}



function flipCard(){
    let cardId = this.getAttribute('data-id') /* whatever item(card) is clicked we want to get its attribute*/
    cardsChosen.push(cardsArray[cardId].name) /* the data id of the card is used to find out what the card is*/
    cardsChosenIds.push(cardId) /* keeps track of what cards are picked */
    this.setAttribute('src', cardsArray[cardId].img) /* retrieves image and replaces the blank image with specific card image*/
    if (cardsChosen.length ===2){
        setTimeout(checkForMatch, 500)
    }
    console.log(cardsChosenIds)
}

function checkForMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    if (optionOneId === optionTwoId)
    {
        alert('You have clicked the same image!')
        cards[optionOneId].setAttribute('src', 'src/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png') /* why do we need to do this twice*/
    }

    else if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'src/images/white.png')
        cards[optionTwoId].setAttribute('src', 'src/images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src', 'src/images/blank.png')
        cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length

    if(cardsWon.length === cardsArray.length/2){
        resultDisplay.textContent = 'Congrats you won!'
    }
    

    console.log(cardsChosen)
    console.log(cardsWon)

}


createBoard()

})

/* crash course on htttp
Notes: url is uniform resource locator

your computer (the client) sends a get request to the server(url belongs to server) to display resources for website

once a tcp connection established between these two, a get request(http) is sent to get information
then after information tarnsfer is complete the tcp connection is closed

POST request, PUT request, Delete requests

google.com example - you type url in browser - your browser will extract http part and decide what protocol to use
then the domain name (ie google.com) asks internet domain server return internet protocol - now we know the IP address

then opens a connection to server at address using http protocol, get request is initiated,
GET/HTTP/1.1
keeps connection open and uses one connection more than once ie stylesheets and other content 
http/1.0 every resource request requires seperate conection

http/1.1 has less delay then 1.0 because of this

if its able to get you there it will send a response ie http/1.1 200 OK, content-type: text/html

if not able to find it, result is http/1.1 404 NOT FOUND
*/
