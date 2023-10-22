const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Full Stack Web Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Frontend";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Backend";
    }, 8000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);