function startCountdown(durationInMinutes) {
    let time = durationInMinutes * 60;
    const timerElement = document.getElementById("timer");

    function updateTimer() {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (time > 0) {
            time--;
            setTimeout(updateTimer, 1000);
        } else {
            timerElement.textContent = "Время вышло!";
        }
    }

    updateTimer();
}

startCountdown(10);

document.getElementById("fetchData").addEventListener("click", function () {
    fetch('https://swapi.dev/api/people/1/')
        .then(response => response.json())
        .then(data => {
            document.getElementById("output").innerHTML = `
                <p><strong>Имя:</strong> ${data.name}</p>
                <p><strong>Рост:</strong> ${data.height} см</p>
                <p><strong>Вес:</strong> ${data.mass} кг</p>
                <p><strong>Цвет волос:</strong> ${data.hair_color}</p>
                <p><strong>Год рождения:</strong> ${data.birth_year}</p>
            `;
        })
        .catch(error => console.error("Ошибка:", error));
});


