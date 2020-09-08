var d = new Date();

var settings = {
    "darkmode": localStorage.getItem("darkmode")
}

if (settings["darkmode"] == undefined) {
    localStorage.setItem("darkmode", false);
    settings["darkmode"] = false;
}

function Load() {
    if (d.getDay() == 0) LunchDisplay(1);
    else if (d.getDay() == 6) LunchDisplay(2);
    else LunchDisplay(0);

    ToggleClass('loading-shade', 'hide');

    setTimeout(() => {
        ToggleClass("computer", "flat");
    }, 300);

    setTimeout(() => {
        if (settings["darkmode"] == "true") {
            ToggleClass('body', 'darkmode');
            ToggleClass('darkmode-btn', 'darkmode-btn-on');
            ToggleClass('darkmode-btn-phone', 'darkmode-btn-on');
        }
    }, 500);
}

function LunchDisplay(x) {
    d.setDate(d.getDate() + x);

    var today = d.getFullYear() + ". " + (d.getMonth() + 1).toString() + ". " + d.getDate() + ".";
    var napok = {
        0: "Vasárnap",
        1: "Hétfő",
        2: "Kedd",
        3: "Szerda",
        4: "Csütörtök",
        5: "Péntek",
        6: "Szombat"
    }
    var day = napok[d.getDay()]

    const doAjax = async () => {
        const response = await fetch('lunches.json');
        if (response.ok) {
            const jVal = await response.json();
            return Promise.resolve(jVal);
        } else return Promise.reject('JSON file not found');
    }
    doAjax().then((lunches) => {
        // console.log(lunches["2020. 8. 11."]);
        // lunches.forEach(i => {
        //     console.log(lunches[i]);
        // });
        var firstDay = Object.keys(lunches)[0];
        var lastDay = Object.keys(lunches)[Object.keys(lunches).length - 1];

        document.getElementById("date").innerText = today + " " + day;
        document.getElementById("lunch").innerText = lunches[today];
    
        document.getElementById("date-phone").innerText = today + " " + day;
        document.getElementById("lunch-phone").innerText = lunches[today];

        if (today == firstDay) {
            document.getElementById("back").innerHTML = '<a></a>';
            document.getElementById("next").innerHTML = '<a class="useful" onclick="LunchDisplay(+1)"></a>';
    
            document.getElementById("back-phone").innerHTML = '<a></a>';
            document.getElementById("next-phone").innerHTML = '<a class="useful" onclick="LunchDisplay(+1)"></a>';
        } else if (today == lastDay) {
            document.getElementById("back").innerHTML = '<a class="useful" onclick="LunchDisplay(-1)"></a>';
            document.getElementById("next").innerHTML = '<a></a>';
    
            document.getElementById("back-phone").innerHTML = '<a class="useful" onclick="LunchDisplay(-1)"></a>';
            document.getElementById("next-phone").innerHTML = '<a></a>';
        } else {
            document.getElementById("back").innerHTML = '<a class="useful" onclick="LunchDisplay(-1)"></a>';
            document.getElementById("next").innerHTML = '<a class="useful" onclick="LunchDisplay(+1)"></a>';
    
            document.getElementById("back-phone").innerHTML = '<a class="useful" onclick="LunchDisplay(-1)"></a>';
            document.getElementById("next-phone").innerHTML = '<a class="useful" onclick="LunchDisplay(+1)"></a>';
        }
    });
}

function ToggleClass(id, className) {
    document.getElementById(id).classList.toggle(className);
}

function ToggleSetting(setting) {
    if (settings[setting] == "true") {
        localStorage.setItem(setting, false);
        settings[setting] = "false";
    } else {
        localStorage.setItem(setting, true);
        settings[setting] = "true";
    }
}