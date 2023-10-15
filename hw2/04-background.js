// Add your code here
let isColorChanging = false;
let intervalId = null;

const startOrStopButton = document.getElementById('startOrStopBtn');

startOrStopButton.onclick = function onBtnClick() {
    const intervalEle = document.querySelector('#interval');
    const interval = intervalEle.value ? parseInt(intervalEle.value) : 3;
    if (isColorChanging) {
        clearInterval(intervalId);
        isColorChanging = false;
        startOrStopButton.textContent = 'Start';
        startOrStopButton.classList.remove('bg-danger');
        intervalEle.removeAttribute('disabled');
    } else {
        intervalId = setInterval(changeBackgroundColor, interval * 1000);
        isColorChanging = true;
        startOrStopButton.textContent = 'Stop';
        startOrStopButton.classList.add('bg-danger');
        intervalEle.setAttribute('disabled', true);
    }
}

function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.6;
    document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}