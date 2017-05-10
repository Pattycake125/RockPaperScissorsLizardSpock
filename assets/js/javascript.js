/* Firebase connection */
var config = {
    apiKey: "AIzaSyBUEHFHNdSrSi5V44tzQcbpxk5u3t4IkQo",
    authDomain: "myfirstdataproject.firebaseapp.com",
    databaseURL: "https://myfirstdataproject.firebaseio.com",
    projectId: "myfirstdataproject",
    storageBucket: "myfirstdataproject.appspot.com",
    messagingSenderId: "443535397763"
};
// Initialize Firebase
firebase.initializeApp(config);
// Create a variable to reference the database
    var database = firebase.database();
    var player = "";
    var wins1 = 0;
    var loses1 = 0;
    var ties1 = 0;
    var wins2 = 0;
    var loses2 = 0;
    var ties2 = 0;
/* register users name Determine if this is player one or two, label him*/
/* get this users name*/
$("#enterPlayer").on("click", function(event) {
    event.preventDefault();
    
    // Grabs user input
    player = $("#playerTmp").val().trim();

    // check last upload entry
  /*firebase.database().ref().once('value').then(function(snapshot){
    var sp = snapshot.val();
        console.log("sp:", sp);
    
    if (sp.player2 = ""){
          player2= player;
          database.ref().set ({
          player2: player2
         })
          console.log("I'm " + player2);

        } else { 
          console.log("I'm player1");
            player1= player;
            console.log (player1);
        var newgame = {
            player1: player1,
            wins1: wins1,
            loses1: loses1,
            ties1: ties1,
            wins2: wins2,
            loses2: loses2,
            ties2: ties2
          };
          firebase.database().ref().child('posts').push(newgame).key;
}});
  // Uploads employee data to the database
 
  });

//-------------------------------------------------------------------------------------------

database.ref().child().on("value", function(snapshot) {
   var sv = snapshot.val();

        wins1= sv.wins1;
        wins2 = sv.wins2;
        loses1 = sv.loses1;
        loses2 = sv.loses2;
        ties1 = sv.ties1;
        ties2 = sv.ties2;
        player1 = sv.player1;
        player2= sv.player2;
        choice1= sv.choice1;
        choice2 = sv.choice2;

        
    */

    /* display users name  and score*/
    var p1 = "<p> Player1 is : " + player1;
    p1 = p1 + " Won: " + wins1;
    p1 = p1 + " Lost: " + loses1;
    p1 = p1 + " Tied: " + ties1 + "</p>";

    var p2 = "<p> Player2 is : " + player2;
    p2 = p2 + " Won: " + wins2;
    p2 = p2 + " Lost: " + loses2;
    p2 = p2 + " Tied: " + ties2 + "</p>";

    var score = p1 + p2;
    //console.log(score);

    $("#displayScore").html(score);


});
choice2 = "scissors";
/*$("#data-term").on("mouseover", function() { 
  $("#displayScore").html($("#data-term").value);
};*/
$("#data-term").on("click", function() {
var choice1 = $("#data-term").value;

console.log(choice1);
/* when both players have selected choice... determine winner: */
if (choice1 = "rock"){
/*If Player1 picks rock and if Player2 picks scissors then Player1 wins. */
switch (choice1) {
  case 'scissors':
    console.log('rock beats scissors');
    $("#displayScore").append("Winner Player1: rock breaks scissors");
    wins1 = wins1 ++;
    break;
/* If Player1 picks rock and if Player2 picks scissors then Player1 wins. */
  case 'lizard':
    console.log('rock crushes lizard');
    $("#displayScore").append("Winner Player1: rock crushes lizard");
    wins1 = wins1 ++;
    break;
}}
//---------------------------------------------------------------------------
if (choice1='scissors'){
/* If Player1 picks scissors and if Player2 picks paper then Player1 wins. */
    switch (choice1) {
  case 'lizard':
    console.log('scissors decapitate lizard');
    $("#displayScore").append("Winner Player1: scissors decapitate lizard");
    wins1 = wins1 ++;
    break;
/* If Player1 picks scissors and if Player2 picks scissors then Player1 wins. */
  case 'paper':
    console.log('scissors cut paper');
    $("#displayScore").append("Winner Player1: scissors cut paper");
    wins1 = wins1 ++;
    break;
}}
//----------------------------------------------------------------------------
if (choice1='paper'){
/* If Player1 picks paper and if Player2 picks Spock then Player1 wins. */
switch (choice1) {
  case 'spock':
    console.log('paper disproves Spock');
    $("#displayScore").append("Winner Player1: paper disproves Spock");
    wins1 = wins1 ++;
    break;
/* If Player1 picks paper and if Player2 picks rock then Player1 wins. */
  case 'rock':
    console.log('rock hides paper');
    $("#displayScore").append("Winner Player1: rock hides paper");
    wins1 = wins1 ++;
    break;
}}
//-----------------------------------------------------------------------------
if (choice1='lizard'){
/* If Player1 picks lizard and if Player2 picks Spock then Player1 wins. */
switch (choice1) {
  case 'spock':
    console.log('lizard poisons Spock');
    $("#displayScore").append("Winner Player1: lizard poisons Spock");
    wins1 = wins1 ++;
    break;
/* If Player1 picks lizard and if Player2 picks rock then Player1 wins. */
  case 'paper':
    console.log('lizard eats paper');
    $("#displayScore").append("Winner Player1: lizard eats paper");
    wins1 = wins1 ++;
    break;
}}
//-----------------------------------------------------------------------------
if (choice1='spock'){
/* If Player1 picks Spock and if Player2 picks Spock then Player1 wins. */
switch (choice1) {
  case 'rock':
    console.log('Spock vaporizes rock');
    $("#displayScore").append("Winner Player1: Spock vaporizes rock");
    wins1 = wins1 ++;
    break;
/* If Player1 picks Spock and if Player2 picks rock then Player1 wins. */
  case 'scissors':
    console.log('Spock smashes scissors');
    $("#displayScore").append("Winner Player1: Spock smashes scissors");
    wins1 = wins1 ++;
    break;
}}
});
//-----------------------------------------------------------------------------
/* If Player1 picks the same as Player2 then they tie. */
if (choice1 = choice2) {
  ties1 = ties1 ++;
  ties2 = ties2 ++;
}

/*  We then add to their score. */

/* If either player wins then we add one to their wins. */

/* If either player loses then we add one to their losses. */

/* If either player ties then we add one to their ties. */


/* Either player then chooses a button choice to play again. */

/* Either player can select 'Good Game' to end the play  automated trash talk or good response.*/