import { Http } from "./http.js";

export class WeatherService {
    #http = new Http();
    #url = "http://api.weatherapi.com/v1/current.json";
    #apiKey = "2ace799443da41d1a2272931231310";

    async getWeather(city) {
        const urlParams = new URLSearchParams({
            key: this.#apiKey,
            q: city,
            aqi: "no"
        });
        return this.#http.get(`${this.#url}?${urlParams}`);
    }
}