let homeBtn = document.getElementById("home-count");
let guestBtn = document.getElementById("guest-count");
let homeCount = 0;
let guestCount = 0;

function homeOne() {
    homeCount += 1;
    homeBtn.textContent = homeCount;

    if (homeCount >= 25) {
        homeBtn.textContent = "Winner!";
        homeCount = 0;
    }
}

function homeTwo() {
    homeCount += 2;
    homeBtn.textContent = homeCount;

    if (homeCount >= 25) {
        homeBtn.textContent = "Winner!";
        homeCount = 0;
    }
}

function homeThree() {
    homeCount += 3;
    homeBtn.textContent = homeCount;

    if (homeCount >= 25) {
        homeBtn.textContent = "Winner!";
        homeCount = 0;
    }
}

function guestOne() {
    guestCount += 1;
    guestBtn.textContent = guestCount;

    if (homeCount >= 25) {
        homeBtn.textContent = "Winner!";
        homeCount = 0;
    }
}

function guestTwo() {
    guestCount += 2;
    guestBtn.textContent = guestCount;

    if (guestCount >= 25) {
        guestBtn.textContent = "Winner!";
        guestCount = 0;
    }
}

function guestThree() {
    guestCount += 3;
    guestBtn.textContent = guestCount;

    if (guestCount >= 25) {
        guestBtn.textContent = "Winner!";
        guestCount = 0;
    }
}