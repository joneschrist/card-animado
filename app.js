
const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const cel = document.querySelector(".cel img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector("info h3");
const sizes = document.querySelector(".sizes");

container.addEventListener("mausemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg0)`;
})