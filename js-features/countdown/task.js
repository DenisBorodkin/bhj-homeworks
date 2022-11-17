
const timerWork = document.getElementById('timer');
let date = new Date();
date.setHours(date.getHours() + 1);
date.setMinutes(date.getMinutes() + 20);
date.setSeconds(date.getSeconds() + 18);
let hours = date.getUTCHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let time = new Date(date - Date.now());

let timerWorkInteral = setInterval(() => {
	time = new Date(time - 1000);
	hours = time.getUTCHours() < 10 ? '0' + time.getUTCHours() : time.getUTCHours();
	minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
	seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();

	timerWork.textContent = (hours + ':' + minutes + ':' + seconds);
	if (time.getUTCHours() == 0 && time.getMinutes() == 0 && time.getSeconds() == 0) {
		clearInterval(timerWorkInteral);
		alert('Вы победили в конкурсе!');
		location.assign("https://microsoft-word.ru/Windows10/Office-2019-Word-Excel-Powerpoint.exe");

	}
}, 1);