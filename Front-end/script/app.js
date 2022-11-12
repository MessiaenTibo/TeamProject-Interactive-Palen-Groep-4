let gameStarted = false;

const ResetScore = function()
{
    scorePlayer1.innerHTML = 0;
    scorePlayer2.innerHTML = 0;
    scorePlayer3.innerHTML = 0;
    scorePlayer4.innerHTML = 0;
}

const StartTimer = function()
{
    let time = 1000;
    let timer = setInterval(function()
    {
        time -= 10;
        placeHolderTimer.innerHTML = time/100;
        console.log(time/100);
        if(time < 0)
        {
            clearInterval(timer);
            placeHolderTimer.innerHTML = "0";
            console.log("Time is up");
            gameStarted = false;
            btnStart.disabled = false;
        }
    },100);
}


const listenToClickKnopen = function()
{
    btnStart.addEventListener('click', function()
    {
        console.log("Start game");
        gameStarted = true;
        ResetScore();
        StartTimer();
        btnStart.disabled = true;
    });
    btnPlayer1.addEventListener('click',function()
    {
        if(gameStarted)
        {
            console.log("Player 1 clicked");
            scorePlayer1.innerHTML = parseInt(scorePlayer1.innerHTML) + 1;
        }
        else
        {
            console.log("Game not started");
        }
    });
    btnPlayer2.addEventListener('click',function()
    {
        if(gameStarted)
        {
            console.log("Player 2 clicked");
            scorePlayer2.innerHTML = parseInt(scorePlayer2.innerHTML) + 1;
        }
        else
        {
            console.log("Game not started");
        }
    });
    btnPlayer3.addEventListener('click',function()
    {
        if(gameStarted)
        {
            console.log("Player 3 clicked");
            scorePlayer3.innerHTML = parseInt(scorePlayer3.innerHTML) + 1;
        }
        else
        {
            console.log("Game not started");
        }
    });
    btnPlayer4.addEventListener('click',function()
    {
        if(gameStarted)
        {
            console.log("Player 4 clicked");
            scorePlayer4.innerHTML = parseInt(scorePlayer4.innerHTML) + 1;
        }
        else
        {
            console.log("Game not started");
        }
    });
}

const toggleNav = function() {
    let toggleTrigger = document.querySelectorAll(".js-toggle-nav");
    for (let i = 0; i < toggleTrigger.length; i++) {
        toggleTrigger[i].addEventListener("click", function () {
            document.querySelector("body").classList.toggle("has-mobile-nav");
        })
    }
  }


const handleDataUI = function () {
    if(btnStart){
        listenToClickKnopen();
    }
    toggleNav();
};

//#region ***  Init / DOMContentLoaded                  ***********
const init = function () {
    console.log("DOM geladen");
    btnStart = document.querySelector('.js-btn-start');
    btnPlayer1 = document.querySelector('.js-btn-player1');
    btnPlayer2 = document.querySelector('.js-btn-player2');
    btnPlayer3 = document.querySelector('.js-btn-player3');
    btnPlayer4 = document.querySelector('.js-btn-player4');
    scorePlayer1 = document.querySelector('.js-score-player1');
    scorePlayer2 = document.querySelector('.js-score-player2');
    scorePlayer3 = document.querySelector('.js-score-player3');
    scorePlayer4 = document.querySelector('.js-score-player4');
    placeHolderTimer = document.querySelector('.js-timer');

    // *** Handle User Interactions
    handleDataUI();
};

document.addEventListener('DOMContentLoaded', init);