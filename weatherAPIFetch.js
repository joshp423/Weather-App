import { Template } from "webpack";



export async function fetchWeather(searchLocation, date, tempFormat) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation}/${date}?key=VAYGT464SV8P4KPCJBRURSBUC&unitGroup=${tempFormat}`
        )
        const weatherData = await response.json();
        console.log(weatherData.currentConditions)
        const temp = weatherData.currentConditions.temp;
        const feelsLike = weatherData.currentConditions.feelslike;
        const humidity = weatherData.currentConditions.humidity;
        const precipitation = weatherData.currentConditions.precip;
        const precipitationChance = weatherData.currentConditions.precipprob;
        const precipType = weatherData.currentConditions.preciptype;
        const conditions = weatherData.currentConditions.conditions;
        const uvIndex = weatherData.currentConditions.uvindex;
        const windSpeed = weatherData.currentConditions.windspeed;
        const windDirection = weatherData.currentConditions.winddir;
        return [temp, feelsLike, humidity, precipitation, precipitationChance, precipType, conditions, uvIndex, windSpeed, windDirection];
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
