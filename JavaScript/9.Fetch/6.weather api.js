import { WeatherService } from "./clases/weather-service.js";

const form = document.getElementById("cityForm");
const icono = document.getElementById("icono");
const tiempo = document.getElementById("tiempo");

const weatherService = new WeatherService();

form.addEventListener("submit", async e => {
    e.preventDefault();
    const city = form.city.value;
    const result = await weatherService.getWeather(city);
    tiempo.textContent = result.current.condition.text;
    icono.src = "https:" + result.current.condition.icon;
});

