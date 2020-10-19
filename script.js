//Detecting Button 
for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var button = this.innerHTML;
        makeSound(button);
        animateButton(button);
    });
}

//Detecting Key Press
document.addEventListener("keypress",function(event){
   makeSound(event.key);
   animateButton(event.key);
});

function makeSound(button)
{
    switch (button) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("error");
    }
}

function animateButton(button)
{
    var currBtn = document.querySelector("."+button);
    currBtn.classList.add("pressed");

    setTimeout(() => {
        currBtn.classList.remove("pressed");
    }, 100);
}