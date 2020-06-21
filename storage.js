var x= document.getElementById('highscore');
var submit = document.getElementById('submit');

submit.addEventListener('click',mystorage) {

function mystorage (){
var highscore = document.getElementById('highscore', highscore).value;


if(highscore===""){
    displayMessage("Please enter your score");
}else{
    displayMessage("Score submitted successfully.")
}

localStorage.setItem("highscore", highscore);

};
}