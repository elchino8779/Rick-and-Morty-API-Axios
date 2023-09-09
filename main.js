import { getData } from "./getdata.js"

const $container = document.querySelector(".container-tarjetas");
const $search = document.getElementById("search");

window.addEventListener("DOMContentLoaded", (e) => {
    getData($container, $search);
})