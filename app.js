/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;


//html dökümalarının içeriğini değiştirmek için  iki yol vardır.
//Birinicisi aşağıdaki gibidir;
//document.querySelector("#current-" + activePlayer).textContent = dice;
//html dökümanların içeriğini değiştirmek için ikinciyol ise
//document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "</em>";

//let x =document.querySelector("#score-0").textContent;
//console.log(x);

document.querySelector(".dice").style.display = "none";
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function () {
    //1.rastgele bir zar sayisi üretme
    let dice = Math.floor(Math.random() * 6 + 1);

    //2.zar sonucunu göster
    let diceDom = document.querySelector(".dice");
    console.log(diceDom);
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";
    //3. score güncelleme
    if (dice !== 1) {
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;

    } else {
        //next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById("current-0").textContent = "0";
        document.getElementById("current-1").textContent = "0";
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");

       // document.querySelector(".player-0-panel").classList.remove("active");
       // document.querySelector(".player-1-panel").classList.add("active");
        document.querySelector(".dice").style.display = "none";
    }
});

document.querySelector(".btn-language").addEventListener("click", function () {
    let languageDom = document.querySelector(".btn-language");
    if (languageDom.textContent === "İngilizce") {
        languageDom.textContent = "Türkçe";
        document.querySelector("#name-0").textContent = "Oyuncu 1";
        document.querySelector("#name-1").textContent = "Oyuncu 2";
        document.querySelector("#current-text-0").textContent = "Mevcut";
        document.querySelector("#current-text-1").textContent = "Mevcut";
        document.querySelector(".ion-ios-loop").textContent = "Zar Atmak";
        document.querySelector(".ion-ios-plus-outline").textContent = "Yeni Oyun";
        document.querySelector("#hold").textContent = "  Ambar";
        console.log(languageDom.textContent);
    } else {
        languageDom.textContent = "İngilizce";
        document.querySelector("#name-0").textContent = "Player 1";
        document.querySelector("#name-1").textContent = "Player 2";
        document.querySelector("#current-text-0").textContent = "Current";
        document.querySelector("#current-text-1").textContent = "Current";
        document.querySelector(".ion-ios-loop").textContent = "Roll Dice";
        document.querySelector(".ion-ios-plus-outline").textContent = "New Game";
        document.querySelector("#hold").textContent = "  Hold";
        console.log(languageDom.textContent);
    }

});
