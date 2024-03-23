const drums = document.querySelectorAll(".drum");

function highlightKey(pressedKey) {
    let button = document.querySelector("." + pressedKey);
    if (button != null) {
        button.classList.add("pressed");
        button.classList.add("played-drum");

        setTimeout(function () {
            button.classList.remove("pressed");
            button.classList.remove("played-drum");
        }, 500);
    }

}

function drumSound(pressedKey) {
    let audio;
    switch (pressedKey) {
        case "w":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "l":
            audio = new Audio("sounds/crash.mp3");
            break;
    }

    if (audio != null) {
        audio.play();
    }
}

let playDrumByButton = function () {
    let pressedButton = this.classList.item(0);
    drumSound(pressedButton)
    highlightKey(pressedButton);
}

let playDrumByKeyBoard = function (pressedKey) {
    drumSound(pressedKey.key);
    highlightKey(pressedKey.key);
}

for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", playDrumByButton);
}

document.addEventListener("keydown", playDrumByKeyBoard)

