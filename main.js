var d = new Date();

function Load() {
    if (d.getDay() == 0) LunchDisplay(1);
    else if (d.getDay() == 6) LunchDisplay(2);
    else LunchDisplay(0);
}

function LunchDisplay(x) {
    d.setDate(d.getDate() + x);

    var today = d.getFullYear() + ". " + (d.getMonth() + 1).toString() + ". " + d.getDate() + ".";
    var day;

    var napok = {
        0: "Vasárnap",
        1: "Hétfő",
        2: "Kedd",
        3: "Szerda",
        4: "Csütörtök",
        5: "Péntek",
        6: "Szombat"
    }

    day = napok[d.getDay()]

    document.getElementById("date").innerText = today + " " + day;
    document.getElementById("lunch").innerText = lunch[today];

    if (today == "2020. 2. 8.") {
        document.getElementById("back").innerHTML = '<a>Hátra</a>';
    } else if (today == lastDay) {
        document.getElementById("next").innerHTML = '<a>Előrre</a>';
    } else {
        document.getElementById("back").innerHTML = '<a onclick="LunchDisplay(-1)">Hátra</a>';
        document.getElementById("next").innerHTML = '<a onclick="LunchDisplay(+1)">Előrre</a>';
    }
}

function Darkmode() {
    document.getElementById("body").classList.toggle("darkmode");
    document.getElementById("darkmode-btn").classList.toggle("darkmode-btn-on");
}