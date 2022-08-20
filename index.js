// Detect Button Click //

var  numberOfButton = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonPosition = this.innerHTML;
        makeSound(buttonPosition);
        animation(buttonPosition);
    })
}

// Detect keyboard button press//

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    animation(event.key);
})

//Adding Sound To Buttons//

function makeSound(buttonSound){
    switch(buttonSound){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            alert("try to press any listed below");
            break;
    }
}

//Adding animation to button//

function animation(buttonAnimation){
    var buttonPlace = document.querySelector("." + buttonAnimation);
    buttonPlace.classList.add("pressed");

    setTimeout(function(){
        buttonPlace.classList.remove("pressed");
    }, 100);
}