let sum= 0
let hasBlackJack = false
let isAlive =true
let message=""
let messagenew=document.getElementById("message-el");
let sumnew=document.getElementById("sum");
let cardsnew= document.getElementById("cards");


function startGame()
{
    isAlive = true
    hasBlackJack = false
    let firstCard = randomNum()
    let secondCard = randomNum()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    document.getElementById("button").disabled=false;
    document.getElementById("gameover").textContent=""
    renderGame()
}

function renderGame()
{
    sumnew.textContent = "Sum: " + sum
    cardsnew.textContent=`Cards: ${cards.map(item=>item)}`
    if (sum <= 20) {
        message="Do you want to draw a new card? 🙂" 
    } else if (sum === 21) {
        message="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message="You're out of the game! 😭"
        isAlive=false
    }
    messagenew.textContent = message
}

function randomNum()
{
    let num=Math.floor(Math.random()*13)+1
    console.log(num)
    if(num>10)
    {
        return 10
    }
    else if(num===1)
    {
        return 11
    }
    else
    return num
}

function newCard()
{
    if(isAlive === true && hasBlackJack === false)
    {
        let card=randomNum()
        console.log(card)
        sum=sum+card
        cards.push(card)
        if(sum>21)
        {
        document.getElementById("button").disabled=true;
        document.getElementById("gameover").textContent="GameOver"
        }
    renderGame();
   
    }

}
