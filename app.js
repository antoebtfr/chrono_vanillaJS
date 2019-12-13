// Config - Chronometre

let second = 0;
let minute = 0;
let hour = 0;
let day = 0;
let stopped = false;


// fonction de lancement appelée dans le html
function io() {
    let interval = setInterval(() => {

        if (stopped === true) { //Checker si on a cliqué sur le bouton stop 
            clearInterval(interval);
        }

        second++;
        console.log(interval)
        startTimer();
    }, 1000);

};

function startTimer() {

    //Déclaration de fonction 
    function lengthCheker() {

        let strSecond = `${second}`;
        let strMinute = `${minute}`;

        const digitSecond = (strSecond.length <= 1);
        const digitMinute = (strMinute.length <= 1);

        const screen = document.getElementById("chronometre");

        if (digitSecond && digitMinute) {
            screen.innerHTML = `${hour} : 0${minute} : 0${second}`
        } else if (digitSecond) {
            screen.innerHTML = `${hour} : ${minute} : 0${second}`
        } else if (digitMinute) {
            screen.innerHTML = `${hour} : 0${minute} : ${second}`
        }
    };

    function addSecond() {
        const secondeReset = (second > 59);
        const minuteReset = (minute > 59);
        const hourReset = (hour > 23);

        if (secondeReset) { second = 0; minute++; }
        if (minuteReset) { minute = 0; hour++; }
        if (hourReset) { hour = 0; day++; }
    }

    //Appel des fonctions

    addSecond();
    lengthCheker();
}


//Page config -----

let isStarted = false;

function toggle() {
    isStarted = !isStarted
    console.log(isStarted);
};
function displaySecondary() {
    const secondary = document.getElementById("secondary").style;
    if (isStarted === true) {
        secondary.display = 'flex';
    } else {
        secondary.display = 'none';
    }
};

function displayStart() {
    const startButton = document.getElementById("start").style;

    if (isStarted === true) {
        startButton.display = "none";
    } else {
        startButton.display = "block";
    }
};

function isStart(btn) {

    if (isStarted === false) {
        toggle(btn);
        displayStart()
        displaySecondary();

    } else {
        toggle(btn);
        displayStart();
        displaySecondary();
    }
};

// Fonctions secondaires 

function reset() {
    const screen = document.getElementById("chronometre");

    second = 0;
    minute = 0;
    hour = 0;

    screen.innerHTML = `${hour} : 0${minute} : 0${second}`
};

function stop() {
    console.log("Je suis lancée");
    stopped = true;
    console.log(stopped);

    setTimeout(() => {
        console.log(" je suis le timeout ");

        toggle();
        displaySecondary();
        displayStart();
        restart();
    }, 3000)
};

function restart() {
    stopped = false;
    const screen = document.getElementById("chronometre");
    screen.innerHTML = "";

    second = 0;
    minute = 0;
    hour = 0;
    day = 0;
}