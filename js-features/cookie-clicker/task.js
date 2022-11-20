const text = document.getElementsByClassName("clicker__status");  // блок надписей на странице
text[0].innerHTML = 'Всего кликов <span id="clicker__counter">0</span><br>Скорость клика:  <span id="clicker__speed">0</span>'; // меняем содержимое блока надписи на странице, не исправляя исходный task.html
let clickerCounter = document.getElementById("clicker__counter"); // счётчик нажатий
const clickSpeed = document.getElementById("clicker__speed");     // скорость клика
const cookie = document.getElementById("cookie");                 // сама печенька
let timeStart = 0, timeEnd = 0;                                   // переменные для фиксации времени клика

cookie.onclick = function () {          // обработчик событий - клик на печеньке
	timeEnd = !+clickerCounter.textContent ? timeStart = Date.now() : Date.now(); // фиксируем время кликов
	clickerCounter.textContent++;         // увеличение счётчика нажатий
	if (clickerCounter.textContent > 1) { // чтобы при первом клике не появлялось Infinity
		clickSpeed.textContent = ((clickerCounter.textContent - 1) / ((timeEnd - timeStart) / 1000)).toFixed(2);
		//console.log(`прошло сек.: ${(timeEnd - timeStart) / 1000} : кол-во кликов: ${+clickerCounter.textContent - 1} = ${clickSpeed.textContent}`); // отладочная инфа
	}

	if (clickerCounter.textContent == 20); // для паузы при автовыполнеии кликов

	if (cookie.width == "200") {         // если у печеньки исходный размер, то
		cookie.width = cookie.width * 1.2; // увеличиваем печеньку на 20%
	} else {                             // иначе
		cookie.width = cookie.width / 1.2; // уменьшаем печеньку на 20%
	}
}

















