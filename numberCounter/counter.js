document.getElementById("increment").addEventListener("click", function() {
    const counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
});

document.getElementById("decrement").addEventListener("click", function() {
    const counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) - 1;
});

document.getElementById("reset").addEventListener("click", function() {
    const counter = document.getElementById("counter");
    counter.textContent = 0;
});