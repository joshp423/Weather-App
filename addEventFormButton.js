import { renderWeatherResult } from "./renderWeatherResult";
import { fetchWeather } from "./weatherAPIFetch";

export function addEventFormButton() {
    const searchLocation = document.getElementById('location');
    const date = new Date()
    const searchDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    const submitButton = document.querySelector('#formContainer>form>button');
    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();
        console.log(searchLocation.value, searchDate, "metric")
        const weatherResult = await fetchWeather(searchLocation.value, searchDate, "metric")
        renderWeatherResult(weatherResult);
        
    })
}