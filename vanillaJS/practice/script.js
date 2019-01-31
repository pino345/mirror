const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = "#34495e";
} 

title.addEventListener("click", handleClick);
init();     // 초기값 설정


// offline/onlone event

function handleOffline() {
    console.log("Bye Bye")
}

function handleOnline() {
    console.log("Welcome back")
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);