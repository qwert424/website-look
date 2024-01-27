const input = document.querySelectorAll("input");
const text = document.querySelector("text");
input[0].addEventListener("input", (e) => {
    text.innerHTML = e.target.value
});
input[1].addEventListener("input", (e) => {
    text.style.fill = e.target.value
});
