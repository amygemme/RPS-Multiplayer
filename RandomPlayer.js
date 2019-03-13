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
checkPlayers();
//resetplayers();

function checkPlayers() {
    $(".choice").attr('disabled', false);

    database.ref().once('value').then(function (snapshot) {
        var datanow = snapshot.val();
        console.log(datanow);
        if (datanow === null){
            player =1;
            return player;
        }
        else{
            player = 2;
            return player;
        }
        // both players are null
        //if (datanow.user1.player.trim() == '' && datanow.user2.player.trim() == '') {
            // $("#1").attr('disabled', true);
          //  alert("chose player 1 or 2 to get started")
           // database.ref("/user1/player").set("player1");
          //  $(".choice").attr('disabled', false);
           // player = 1;


        //}
        // player 2 is null player 1 is taken
        //else if (!datanow.user1.player.trim() == '' && datanow.user2.player.trim() == '') {
        //    console.log("auto set to player 2");
         
            //database.ref("/user2/player").set("player2");
        $(".choice").attr('disabled', false);
            player = 2;
        //}
      
    
        // both players are taken
       // else if (!datanow.user1.player.trim() == '' && !datanow.user2.player.trim() == '') {
         //   alert("please come back later, we got 2 players already")
          
       // }
   // }); 
    return player;
}) // End check players Function
}

console.log(checkPlayers());
// Function to reset the players in firebase to null and another to reset the lays
function resetplayers() {
    database.ref("user1/player").set("");
    database.ref("user2/player").set("");
} // End reset function

function resetplays() {
    database.ref("/user2/play").set("");
    database.ref("/user1/play").set("")
} // end second reset function


//When Rock is selected
$("#rock").on("click", function () {
    alert("button works");
    console.log(checkPlayers());
    database.ref().set("rock");
    scoregame();
});


// When Paper is selected
$("#paper").on("click", function () {
    alert("button works");
    console.log(player);
    database.ref("user" + player + "/play").set("paper");
    scoregame();
});

// When Scissor is selected
$("#scissor").on("click", function () {
    alert("button works");
    console.log(player);
    database.ref("user" + player + "/play").set("scissor");
    scoregame();
});

function scoregame() {
    database.ref().once('value').then(function (snapshot) {
       var  datanow = snapshot.val();
        console.log(datanow);
        var user1data = datanow.user1;
        var user2data = datanow.user2; 
        console.log(user1data);
        var user1play = user1data.play;
       // console.log(user1["play"]);
        // var c = snapshot.child("name/first").exists(); // true
        if(datanow.user1data(play).exist() && datanow.user2("play").exist()){
      //      if (datanow.user1.play === datanow.user2.play) {
                alert("you tied, chose again")
                resetplays();
                 //   }
        } //temp to close if statement
        else if (datanow.user1.play === "rock") {
                    console.log("user 1 picked rock")
                    }
            else if (datanow.user2.play === "paper") {
                    console.log("user 1 picked paper")
                    }
            else if (datanow.user2.play === "scissor") {
                    }
              //  } // Wrapper if statement checking to make sure two plays have been made
        }) // end the snapshot function
        resetplayers();
        resetplays();
    } // end scroe game function



