// Detecting button press
var buttonsNumber = document.querySelectorAll("button").length;

for (var i = 0; i < buttonsNumber; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonClicked = this.innerHTML;
        
        makeSound(buttonClicked);
        buttonAnimation(buttonClicked);
    });
}

// Detecting Keyboard press

document.addEventListener("keypress",function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})



function makeSound(key) {
    switch (key) {
        case "w":
            var kick = new Audio("sounds/tom-1.mp3");
            kick.play();
            break;
        case "a":
            var kick = new Audio("sounds/tom-2.mp3");
            kick.play();
            break;
        case "s":
            var kick = new Audio("sounds/tom-3.mp3");
            kick.play();
            break;
        case "d":
            var kick = new Audio("sounds/tom-4.mp3");
            kick.play();
            break;
        case "j":
            var kick = new Audio("sounds/snare.mp3");
            kick.play();
            break;
        case "k":
            var kick = new Audio("sounds/crash.mp3");
            kick.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            alert("Escape the computer will Explodes 😂😂");
            break;
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}


// var sounds = ["tom-1","tom-2","tom-3","tom-4","snare","crash","kick-bass"];  
// var audio = new Audio("sounds/"+ sounds[i] +".mp3");
// audio.play();