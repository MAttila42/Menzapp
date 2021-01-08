let d = new Date();

let settings = {
  darkmode: localStorage.getItem("darkmode"),
};

if (settings["darkmode"] == undefined) {
  localStorage.setItem("darkmode", false);
  settings["darkmode"] = false;
}

function Load() {
  if (d.getDay() == 0) LunchDisplay(1);
  else if (d.getDay() == 6) LunchDisplay(2);
  else LunchDisplay(0);

  ToggleClass("loading-shade", "hide");

  setTimeout(() => {
    ToggleClass("computer", "flat");
  }, 300);

  setTimeout(() => {
    if (settings["darkmode"] == "true") {
      ToggleClass("body", "darkmode");
      ToggleClass("darkmode-btn", "darkmode-btn-on");
      ToggleClass("darkmode-btn-phone", "darkmode-btn-on");
    }
  }, 500);
}

function LunchDisplay(x) {
  d.setDate(d.getDate() + x);

  let today = `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
  let napok = {
    0: "Vasárnap",
    1: "Hétfő",
    2: "Kedd",
    3: "Szerda",
    4: "Csütörtök",
    5: "Péntek",
    6: "Szombat",
  };
  let day = napok[d.getDay()];

  const doAjax = async () => {
    const response = await fetch("lunches.json");
    if (response.ok) {
      const jVal = await response.json();
      return Promise.resolve(jVal);
    } else return Promise.reject("JSON file not found");
  };
  doAjax().then((lunches) => {
    let firstDay = Object.keys(lunches)[0];
    let lastDay = Object.keys(lunches)[Object.keys(lunches).length - 1];

    setHTML("date", `${today} ${day}`);
    setHTML("lunch", lunches[today]);
    setHTML("date-phone", `${today} ${day}`);
    setHTML("lunch-phone", lunches[today]);

    if (today == firstDay) {
      setHTML("back", "<a></a>");
      setHTML("next", '<a class="useful" onclick="LunchDisplay(+1)"></a>');
      setHTML("back-phone", "<a></a>");
      setHTML(
        "next-phone",
        '<a class="useful" onclick="LunchDisplay(+1)"></a>'
      );
    } else if (today == lastDay) {
      setHTML("back", '<a class="useful" onclick="LunchDisplay(-1)"></a>');
      setHTML("next", "<a></a>");
      setHTML(
        "back-phone",
        '<a class="useful" onclick="LunchDisplay(-1)"></a>'
      );
      setHTML("next-phone", "<a></a>");
    } else {
      setHTML("back", '<a class="useful" onclick="LunchDisplay(-1)"></a>');
      setHTML("next", '<a class="useful" onclick="LunchDisplay(+1)"></a>');
      setHTML(
        "back-phone",
        '<a class="useful" onclick="LunchDisplay(-1)"></a>'
      );
      setHTML(
        "next-phone",
        '<a class="useful" onclick="LunchDisplay(+1)"></a>'
      );
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

function setHTML(id, html) {
  document.getElementById(id).innerHTML = html;
}
