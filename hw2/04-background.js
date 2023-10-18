const startOrStopButton = document.getElementById("startOrStopBtn");

const getRandomNumer = (max) => {
    return Math.floor(Math.random() * max);
};

const changeBackgroundColor = () => {
    const r = getRandomNumer(256);
    const g = getRandomNumer(256);
    const b = getRandomNumer(256);
    const a = 0.6;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
};
let intervalId = setInterval(() => {
    changeBackgroundColor();
}, 3000);

startOrStopButton.onclick = () => {
    const intervalEle = document.querySelector("#interval");
    const interval = intervalEle.value ? parseInt(intervalEle.value) : 3;
    if (startOrStopButton.textContent.trim() === "Stop") {
        clearInterval(intervalId);
        startOrStopButton.textContent = "Start";
        startOrStopButton.classList.add("bg-primary");
        startOrStopButton.classList.remove("bg-danger");
        intervalEle.removeAttribute("disabled");
    } else {
        intervalId = setInterval(changeBackgroundColor, interval * 1000);
        startOrStopButton.textContent = "Stop";
        startOrStopButton.classList.remove("bg-primary");
        startOrStopButton.classList.add("bg-danger");
        intervalEle.setAttribute("disabled", true);
    }
};
