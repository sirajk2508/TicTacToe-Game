console.log("Welcome to Tic Tac toe");
let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turnn = "X";
let gameOver = false;

// Function to change the Turn
const changeTurn = ()=>{
    return turnn === "X" ? "O" : "X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,8,5,0],
        [3,4,5,6,18,0],
        [6,7,8,6,30,0],
        [0,3,6,-6,18,90],
        [1,4,7,6,18,90],
        [2,5,8,18,18,90],
        [0,4,8,6,18.2,45],
        [2,4,6,6,18.2,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "240px";
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameOver = true;
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "24vw";
        }
    })
}

// GAME LOGIC

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '') {
            boxtext.innerText = turnn;
            turnn = changeTurn();
            turn.play();
            checkWin();
            if(!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turnn;
            }
        }
    })
})

// Add Listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    document.querySelector(".line").style.width = "0vw";
    turnn = "X";
    gameOver = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turnn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})