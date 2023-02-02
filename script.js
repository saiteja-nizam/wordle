console.log("welcome to wordle!");
let wordle = "TRAIL"
let ting = new Audio('click.wav');
let won = new Audio('won.mp3');
let boxText = document.getElementsByClassName('box');
let keyText = document.getElementsByClassName('keybox');
let j = 0;
let c = 0;
let door = true;
let enter = document.getElementById('enter');
let del = document.getElementById('del');

// console.log();


Array.from(keyText).forEach((element) => {
    element.addEventListener('click', () => {
        // console.log(i);
        if (door) {
            ting.play();
            boxText[j].innerHTML = element.innerHTML;
            j += 1;
        }
        if (j % 5 == 0) {
            door = false;

        }
    })
});


// ENTER BUTTON

enter.addEventListener('click', () => {
    if (j % 5 == 0) {
        ting.play();

        // For game board keys color status

        for (let k = 0; k < 5; k++) {
            if (boxText[k + j - 5].innerHTML == wordle[k]) {
                boxText[k + j - 5].style.transform = "rotateX(360deg)";
                setTimeout(() => {
                    boxText[k + j - 5].style.backgroundColor = "#00ff00";
                    boxText[k + j - 5].style.transition = `background-color 1s ${k/5}s ease-in-out`;
                }, 1500);
                boxText[k + j - 5].style.transition = `transform 1s ${k/5}s ease-in-out`;

            }
            else if (wordle.includes(boxText[k + j - 5].innerHTML)) {
                boxText[k + j - 5].style.transform = "rotateX(360deg)";
                setTimeout(() => {
                    boxText[k + j - 5].style.backgroundColor = "yellow";
                    boxText[k + j - 5].style.transition = `background-color 1s ${k/5}s ease-in-out`;
                }, 1500);
                boxText[k + j - 5].style.transition = `transform 1s ${k / 5}s ease-in-out`;
            }
            else {
                boxText[k + j - 5].style.transform = "rotateX(360deg)";
                setTimeout(() => {
                    boxText[k + j - 5].style.backgroundColor = "red";
                    boxText[k + j - 5].style.transition = `background-color 1s ${k/5}s ease-in-out`;
                }, 1500);
                boxText[k + j - 5].style.transition = `transform 1s ${k / 5}s ease-in-out`;
            }
        }

        // For keyboard keys color status
        for (let k = 0; k < 5; k++) {
            if ((document.getElementById(boxText[k + j - 5].innerHTML).innerHTML) == wordle[k]) {
                document.getElementById(boxText[k + j - 5].innerHTML).style.backgroundColor = "green";
                // console.log(document.getElementById(boxText[k + j - 5].innerHTML).style.backgroundColor);
            }
            else if ((wordle.includes(document.getElementById(boxText[k + j - 5].innerHTML).innerHTML)) && (document.getElementById(boxText[k + j - 5].innerHTML).style.backgroundColor != "green")) {
                // console.log(document.getElementById(boxText[k + j - 5].innerHTML).style.backgroundColor != "green");
                document.getElementById(boxText[k + j - 5].innerHTML).style.backgroundColor = "yellow";
            }
            else if (document.getElementById(boxText[k + j - 5].innerHTML).style.backgroundColor != "green") {
                document.getElementById(boxText[k + j - 5].innerHTML).style.backgroundColor = "red";
            }
        }
        door = true;
        for (let k = 0; k < 5; k++) {
            if (boxText[k + j - 5].innerHTML == wordle[k]) {
                c = c + 1;
            }
        }
        if (c == 5) {
            door = false;
            if (j == 5) {
                setTimeout(() => {
                    won.play();
                    alert("magnificent!")
                }, 3000);
            }
            else if (j == 10) {
                setTimeout(() => {
                    won.play();
                    alert("Excellent!")
                }, 3000);
            }
            else if (j == 15) {
                setTimeout(() => {
                    won.play();
                    alert("splendid!")
                }, 3000);
            }
            else if (j == 20) {
                setTimeout(() => {
                    won.play();
                    alert("superb!")
                }, 3000);
            }
            else if (j == 25) {
                setTimeout(() => {
                    won.play();
                    alert("great!")
                }, 3000);
            }
            else if (j == 30) {
                setTimeout(() => {
                    won.play();
                    alert("phew!")
                }, 3000);
            }

        }
        else if (j == 30) {
            setTimeout(() => {
                alert(wordle)
            }, 3000);
        }
        else {
            c = 0;
        }
    }
})
// console.log(boxText[4].style)


// DEL BUTTON

del.addEventListener('click', () => {
    ting.play();
    if ((j % 5 != 0) || (boxText[j - 1].style.backgroundColor == "")) {
        j -= 1;
        boxText[j].innerHTML = "";
    }
    if ((j) % 5 == 4) {

        door = true;
    }
})
