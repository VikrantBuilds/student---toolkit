let timeLeft = 25 * 60;
let timerInterval;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function startTimer() {
    if (timerInterval) return;

    timerInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("🎉 Study session complete!");
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 25 * 60;
    updateTimer();
}

updateTimer();

function saveNotes() {
    const notes = document.getElementById("notes").value;
    localStorage.setItem("studentToolkitNotes", notes);
    alert("Notes saved! ✅");
}

function clearNotes() {
    document.getElementById("notes").value = "";
    localStorage.removeItem("studentToolkitNotes");
}

function loadNotes() {
    const savedNotes = localStorage.getItem("studentToolkitNotes");

    if (savedNotes !== null) {
        document.getElementById("notes").value = savedNotes;
    }
}

window.addEventListener("DOMContentLoaded", loadNotes);
function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.style.textDecoration =
            li.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    });

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
