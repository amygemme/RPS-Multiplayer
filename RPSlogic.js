let keys = {
    FIREBASE: "AIzaSyCWeKH7cIkQUMeHPcB-Gewuzet-DhzjL8Q",
    GOOGLE_MAPS: ""
}

var config = {
    apiKey: keys.FIREBASE,
    authDomain: "rock-paper-scissor-beee6.firebaseapp.com",
    databaseURL: "https://rock-paper-scissor-beee6.firebaseio.com",
    projectId: "rock-paper-scissor-beee6",
    storageBucket: "rock-paper-scissor-beee6.appspot.com",
    messagingSenderId: "810100283331"
};
firebase.initializeApp(config);

let database = firebase.database();

//  resetplayers();
//  resetplays();

// End Database Setup

// start with radio buttons unchecked not sure why this isn't working
$("#1").attr('checked', false);
$("#2").attr('checked', false);

//disable choices until players are distinguished
$(".choice").attr('disabled', true);


// Set up the initial players as player1 and player2
checkPlayers(); 

function checkPlayers(){
    database.ref().once('value').then(function(snapshot){
    var datanow = snapshot.val();
    console.log(datanow.user1.player);
    console.log(datanow.user2.player);  
            // both players are null
    if(datanow.user1.player.trim()=='' && datanow.user2.player.trim()==''){
        // $("#1").attr('disabled', true);
        alert("chose player 1 or 2 to get started")
    }
        // player 2 is null player 1 is taken
    else if(datanow.user1.player.trim()=='' && !datanow.user2.player.trim()==''){
        console.log("auto set to player 2");
        $("#2").attr('disabled', true);
        $("#1").attr('checked', true);
        alert("you are player 1, please make your choice");
        database.ref("/user1/player").set("player1");
        $(".choice").attr('disabled', false);
        player =1;
    }
        // player 1 is null and player 2 is taken
    else if(!datanow.user1.player.trim()=='' && datanow.user2.player.trim()==''){
        console.log("auto set to player 1");
        $("#1").attr('disabled', true);
        $("#2").attr('checked', true);
        alert("you are player 2, please make your choice");
        database.ref("/user2/player").set("player2");
        $(".choice").attr('disabled', false);
        player =2;

    }
        // both players are taken
    else if(!datanow.user1.player.trim()=='' && !datanow.user2.player.trim()==''){
        alert("please come back later, we got 2 players already")
        $("#1").attr('disabled', true);
        $("#2").attr('disabled', true);
    }
});
} // End check players Function

// First player can chose to be player 1 or 2 and we listen for that event here
var player = 0;

$("#1").change(function(){
    database.ref("user1/player").set("player1");
    database.ref("user2/player").set("");
    $(".choice").attr('disabled', false);
    player = 1;
});

$("#2").change(function(){
    database.ref("user1/player").set("");
    database.ref("user2/player").set("player2");
    $(".choice").attr('disabled', false);
    player = 2;
});




//This funtion will reset the plays in the case of a tie 
function resetplays(){
    database.ref("/user2/play").set("");  
    database.ref("/user1/play").set("")       
}

// not sure if we will need this function
function resetplayers(){
    database.ref("user1/player").set("");
    database.ref("user2/player").set("");
}


// When Rock is selected
$("#rock").on("click",function (){
    alert("button works");
    console.log(player);
    database.ref("user" + player + "/play").set("rock");
    scoregame();
});


// When Paper is selected
$("#paper").on("click",function (){
    alert("button works");
    console.log(player);
    database.ref("user" + player + "/play").set("paper");
    scoregame();
});

// When Scissor is selected
$("#scissor").on("click",function (){
    alert("button works");
    console.log(player);
    database.ref("user" + player + "/play").set("scissor");
    scoregame();
});

function scoregame(){
database.ref().once('value').then(function(snapshot){
    var datanow = snapshot.val();
    if(!datanow.user1.play=='' && !datanow.user2.play==''){
    console.log(datanow);
    console.log(datanow.user1.play);
    console.log(datanow.user2.play);
    console.log(datanow.user1.player);
    console.log(datanow.user2.player);
    }
    else{
        scoregame();
    }
});
}
