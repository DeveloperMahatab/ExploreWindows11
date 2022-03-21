function getTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    if (hour.toString().length == 1) {
        hour = "0" + hour;
    }
    if (minute.toString().length == 1) {
        minute = "0" + minute;
    }
    if (second.toString().length == 1) {
        second = "0" + second;
    }
    let time = hour + ":" + minute + ":" + second;
    return time;
}

// example usage: realtime clock
setInterval(function () {
    currentTime = getTime();
    document.getElementById("digital-clock").innerHTML = currentTime;
}, 1000);

function getDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    if (month.toString().length == 1) {
        month = "0" + month;
    }
    if (day.toString().length == 1) {
        day = "0" + day;
    }
    let dateTime = year + "/" + month + "/" + day;
    return dateTime;
}

// example usage: realtime clock
setInterval(function () {
    currentDate = getDate();
    document.getElementById("digital-date").innerHTML = currentDate;
}, 1000);

const thisPC = document.getElementById("thisPCBtn");
thisPC.addEventListener("click", function () {
    const startMenu = document.getElementById("thisPC");
    const startMenuDisplay = startMenu.style.display;

    if (startMenuDisplay == "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
    const exp = document.getElementById("explorer");
    exp.style.background = "#dddddd17";
});
const thisPCExp = document.getElementById("explorer");
thisPCExp.addEventListener("click", function () {
    const startMenu = document.getElementById("thisPC");
    const startMenuDisplay = startMenu.style.display;

    if (startMenuDisplay == "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
    const exp = document.getElementById("explorer");
    exp.style.background = "#dddddd17";
});
const thisPCClose = document.getElementById("close-thisPC");
thisPCClose.addEventListener("click", function () {
    const startMenu = document.getElementById("thisPC");
    const startMenuDisplay = startMenu.style.display;
    if (startMenuDisplay == "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
    const exp = document.getElementById("explorer");
    exp.style.background = "#dddddd00";
});

const windowButton = document.getElementById("window");
windowButton.addEventListener("click", function () {
    const startMenu = document.getElementById("window-start");
    const startMenuDisplay = startMenu.style.display;
    if (startMenuDisplay == "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
    document.getElementById("window-search").style.display = "none";
});
const windowSearch = document.getElementById("search");
windowSearch.addEventListener("click", function () {
    const startMenu = document.getElementById("window-search");
    const startMenuDisplay = startMenu.style.display;
    if (startMenuDisplay == "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
    document.getElementById("window-start").style.display = "none";
});

const desktop = document.getElementById("desktop");
desktop.addEventListener("dblclick", function () {
    document.getElementById("window-start").style.display = "none";
    document.getElementById("window-search").style.display = "none";
});

const powerOnOFF = document.getElementById("pc-power-of");
powerOnOFF.addEventListener("click", function () {
    const startMenu = document.getElementById("power-on-off");
    const startMenuDisplay = startMenu.style.display;
    if (startMenuDisplay == "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
});

const calculatorOpen = document.getElementById("calculator-open-btn");
calculatorOpen.addEventListener("click", function () {
    const startMenu = document.getElementById("calculator-soft");
    const startMenuDisplay = startMenu.style.display;
    if (startMenuDisplay == "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
    document.getElementById("window-start").style.display = "none";
    document.getElementById("window-search").style.display = "none";
});
const calculatorClose = document.getElementById("calculator-close-btn");
calculatorClose.addEventListener("click", function () {
    const startMenu = document.getElementById("calculator-soft");
    const startMenuDisplay = startMenu.style.display;
    if (startMenuDisplay == "block") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "block";
    }
});

/**
 *
 * Calculator Software
 *
 */
function DeleteMe() {
    document.getElementById("MyResult").value = "";
}
function calculator(NewValue) {
    document.getElementById("MyResult").value += NewValue;
}
function Answer() {
    let ans = document.getElementById("MyResult").value;
    let answer = eval(ans);
    document.getElementById("MyResult").value = answer;
}


/**
 * 
 * Mouse Events
 * 
 */
const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

const normalizePozition = (mouseX, mouseY) => {
    // ? compute what is the mouse position relative to the container element (scope)
    let { left: scopeOffsetX, top: scopeOffsetY } = scope.getBoundingClientRect();

    scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
    scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;

    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;

    // ? check if the element will go out of bounds
    const outOfBoundsOnX = scopeX + contextMenu.clientWidth > scope.clientWidth;

    const outOfBoundsOnY = scopeY + contextMenu.clientHeight > scope.clientHeight;

    let normalizedX = mouseX;
    let normalizedY = mouseY;

    // ? normalize on X
    if (outOfBoundsOnX) {
        normalizedX = scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
    }

    // ? normalize on Y
    if (outOfBoundsOnY) {
        normalizedY = scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
    }

    return { normalizedX, normalizedY };
};

scope.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    //  === Window Start Menu Hide
    document.getElementById("window-start").style.display = "none";
    document.getElementById("window-search").style.display = "none";

    const { clientX: mouseX, clientY: mouseY } = event;

    const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

    contextMenu.classList.remove("visible");

    contextMenu.style.top = `${normalizedY}px`;
    contextMenu.style.left = `${normalizedX}px`;

    setTimeout(() => {
        contextMenu.classList.add("visible");
    });
});

scope.addEventListener("click", (e) => {
    // ? close the menu if the user clicks outside of it
    if (e.target.offsetParent != contextMenu) {
        contextMenu.classList.remove("visible");
    }
});