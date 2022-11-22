const clickMole = document.getElementsByClassName("hole");
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let counterDead = 0;
let counterLost = 0;
for (holeIndex = 1; holeIndex < clickMole.length; holeIndex++) {
	getHole = index => document.getElementById(`hole${index}`);// выбор дыры по index
	let hole = getHole(holeIndex);
	hole.addEventListener('click', function () {
		if (hole.classList.contains(`hole_has-mole`)) {
			counterDead++;
			dead.textContent = counterDead;
			if (counterDead >= 10) {
				alert("Вы победили!");
				counterDead = 0;
				counterLost = 0;
				dead.textContent = counterDead;
				lost.textContent = counterLost;
			}
		}
		else {
			counterLost++;
			lost.textContent = counterLost;
			if (counterLost >= 5) {
				alert("Вы проиграли!");
				counterDead = 0;
				counterLost = 0;
				dead.textContent = counterDead;
				lost.textContent = counterLost;
			}
		}
	});
}

