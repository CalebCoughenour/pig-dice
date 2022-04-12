import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Player } from './scripts.js';




let player1 = new Player(true);
let player2 = new Player(false);
  
$("#ai-checkbox").click(function() {
  let checked = document.querySelector("#ai-checkbox:checked") !== null;
  
  do {
    if (player1.currentPlayersScore[0] === 1) {
      player1.turn = false;
      player2.turn = true;
    } if (player1.turn === false) {
      $("#player2-current-score").show();
      player2.aiRoll();
        if (player2.currentPlayersScore[0] === 1)  {
          player1.turn = true;
          player2.turn = false;
          player2.currentPlayersScore.pop();
        }
      }
  } 
  while (checked === true && player2.turn === true)  
})
  
  
$("#roll").on("click", "#roll-button", function() {    
  player1.diceRoll();
  player2.diceRoll();
  $("#end").show();
  $("#kenblock").hide();
  $("#player1-current-score").text("Current Rolls " + player1.currentPlayersScore);
  $("#player2-current-score").text("Current Rolls " + player2.currentPlayersScore);
  if (player1.currentPlayersScore[0] === 1) {
    player1.turn = false;
    player2.turn = true;
    player1.currentPlayersScore.pop();
    $("#player2-current-score").show();
    $("#player1-current-score").hide();
    $("#kenblock").show();
    alert("You rolled a 1 :(");
    $('#ryu').hide();
    $('#ken').hide();
    $('#bros').hide();
    $("#ryublock").hide();
    $("#end").hide();
    $('#ryu-defense').hide();
    $('#ken-defense').hide();
  } else if (player2.currentPlayersScore[0] === 1)  {
    player1.turn = true;
    player2.turn = false;
    player2.currentPlayersScore.pop();
    $("#player1-current-score").show();
    $("#player2-current-score").hide();
    $("#ryublock").show();
    alert("You rolled a 1 :(");
    $('#ryu').hide();
    $('#ken').hide();
    $("#kenblock").hide();
    $("#end").hide();
    $('#ryu-defense').hide();
    $('#ken-defense').hide();
  }
})
  
  $("#end").on("click", "#end-turn", function() {   
    player1.updatePlayerScore();
    player2.updatePlayerScore();
    $("#player1-current-score").hide();
    $("#player2-current-score").hide();
    if (player1.turn === true) {
    $("#end").hide();
    $('#ryu').show();
    $('#ken-defense').show();
    $('#ken').hide();
    $('#bros').hide();
    $("#kenblock").hide();
    $("#ryublock").hide();
    $('#ryu-defense').hide();
    $("#player2-current-score").show();
      player1.turn = false;
      player2.turn = true;
    } else { 
    $("#end").hide();
    $('#ken').show();
    $('#ryu-defense').show();
    $('#ken-defense').hide();
    $('#ryu').hide();
    $('#bros').hide();
    $("#kenblock").hide();
    $("#ryublock").hide();
    $("#player1-current-score").show();

      player2.turn = false;
      player1.turn = true;
    }
    $("#player1-score-display").text(player1.score);
    $("#player2-score-display").text(player2.score);
  
    if (player1.score >= 100) {
      $("#player1-win").show();
      $("#kenwin").show();
      $('#ryu').hide();
      $('#bros').hide();
      $("#kenblock").hide();
      $("#ryublock").hide();
      $('#ryu-defense').hide();
      $('#ken-defense').hide();
    } else if (player2.score >= 100) {
      $("#player2-win").show();
      $("#ryuwin").show();
      $('#ryu').hide();
      $('#bros').hide();
      $("#kenblock").hide();
      $("#ryublock").hide();
      $('#ryu-defense').hide();
      $('#ken-defense').hide();
  }
})
  
