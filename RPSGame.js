////////////// Setup Firebase   /////////////
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

//////////// Begin Code  ////////////////////
$(".choice").attr('disabled', false);

var choice;
var data;

$("#paper").on("click", function () {
   choice = "paper"
   // wait for a child added? then score the game
database.ref().once('value', function(snapshot) {
    // Do whatever
    let data = snapshot.val();
    console.log("something changed");
    console.log(data);
    if (data === ""){
        console.log("null");
        database.ref().set(choice);
    }
    else if (data === "rock"){
    alert("Paper covers Rock. You Win!")    }
    else if (data === "paper"){
        console.log("the other player picked paper")
        alert("Two Papers. Tie")
    }
    else if (data === "scissor"){
        console.log("the other player picked scissor")
        alert("Scissors cut your paper!! You lose.")
    }
});

});

$("#rock").on("click", function () {
    choice = "rock"
    // wait for a child added? then score the game
database.ref().once('value', function(snapshot) {
    // Do whatever
    let data = snapshot.val();
    console.log("something changed");
    console.log(data);
    if (data === ""){
        console.log("null");
        database.ref().set(choice);
    }
    else if (data === "rock"){
        console.log("the other player picked rock. Tie game")
    }
    else if (data === "paper"){
        console.log("the other player picked paper. You lose")
    }
    else if (data === "scissor"){
        console.log("the other player picked scissor. You crushed them!")
    }
});

 });

 $("#scissor").on("click", function () {
    choice = "scissor"
    // wait for a child added? then score the game
database.ref().once('value', function(snapshot) {
    // Do whatever
    let data = snapshot.val();
    console.log("something changed");
    console.log(data);
    if (data === ""){
        console.log("null");
        database.ref().set(choice);
    }
    else if (data === "rock"){
        console.log("the other player picked rock. you got crushed")
    }
    else if (data === "paper"){
        console.log("the other player picked paper. You cut them!")
    }
    else if (data === "scissor"){
        console.log("the other player picked scissor. tie game!")
    }
});

 });


database.ref().on('value',function(snapshot){
    console.log(snapshot.val());});



// var get = getdata();
// console.log(get);

//  $("#paper").on("click", function () {
//      getdata();
//      database.ref().set("paper");
    
//  });

// $("#scissor").on("click", function () {
//     choice = "scissor";
//     database.ref().once('value').then(function(snapshot){
//         let datanow = snapshot.val();
//         console.log(datanow); 
//         if (datanow === ""){
//             //database.ref().set("scissor");
            
//             }
    
        
//         else if (datanow === "scissor"){
//             console.log("they picked scissors")
//             // compare button to the data
//         }
//         else if (datanow === "rock"){

//         }
//         else if (datanow === "paper"){

//         }
//     });
// });


// console.log("we did it");

