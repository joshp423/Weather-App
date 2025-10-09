addEventFormButton()

function addEventFormButton() {
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

function renderWeatherResult(weatherResult) {
    const weatherSection = document.getElementById('weathersection');

    Object.entries(weatherResult).forEach((section) => {
        let searchConditions = document.createElement('p');
        searchConditions.innerText = section
        weatherSection.append(searchConditions);
    })
}

async function fetchWeather(searchLocation, date, tempFormat) {
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