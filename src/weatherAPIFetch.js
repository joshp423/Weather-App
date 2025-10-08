


export async function fetchWeather(searchLocation, date, tempFormat) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchLocation}/${date}?key=VAYGT464SV8P4KPCJBRURSBUC&?unitGroup=${tempFormat}`
        )
        const weatherData = await response.json();
        console.log(weatherData.currentConditions)
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
