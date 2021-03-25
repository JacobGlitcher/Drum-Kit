function makeSound(key) {
    let shadowProp = "0px 0px 25px rgba(255, 255, 255, .8)";
    switch (key) {
        case "a":
            document.querySelector(".item1").style.boxShadow = shadowProp;
            let audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "s":
            document.querySelector(".item2").style.boxShadow = shadowProp;
            let audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "d":
            document.querySelector(".item3").style.boxShadow = shadowProp;
            let audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "j":
            document.querySelector(".item4").style.boxShadow = shadowProp;
            let audio4 = new Audio("sounds/snare.mp3");
            audio4.play();
            break;
        case "k":
            document.querySelector(".item5").style.boxShadow = shadowProp;
            let audio5 = new Audio("sounds/kick-bass.mp3");
            audio5.play();
            break;
        case "l":
            document.querySelector(".item6").style.boxShadow = "0px 0px 25px rgba(255, 255, 255, .8)";
            let audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        default: console.log()
    }
}

function clearShadow(key) {
    let shadowNone = "none";
    switch (key) {
        case "a":
            document.querySelector(".item1").style.boxShadow = shadowNone;
            break;
        case "s":
            document.querySelector(".item2").style.boxShadow = shadowNone;
            break;
        case "d":
            document.querySelector(".item3").style.boxShadow = shadowNone;
            break;
        case "j":
            document.querySelector(".item4").style.boxShadow = shadowNone;
            break;
        case "k":
            document.querySelector(".item5").style.boxShadow = shadowNone;
            break;
        case "l":
            document.querySelector(".item6").style.boxShadow = shadowNone;
            break;
        default: console.log();
    }
}

function handleClick() {
    let boxes = document.querySelectorAll(".drum__kit-box");
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mousedown", function() {
            let key = this.innerHTML;
            makeSound(key);
        });
    }
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseup", function() {
            let key = this.innerHTML;
            clearShadow(key);
        });
    }
}

function handleKey() {
    document.addEventListener("keydown", function(event) {
        let key = event.key;
        makeSound(key);
    })
    document.addEventListener("keyup", function(event) {
        let key = event.key;
        clearShadow(key);
    })
}

function inBlock() {
    handleClick();
    handleKey();
}

inBlock();