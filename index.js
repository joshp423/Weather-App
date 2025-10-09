addEventListener('DOMContentLoaded', (event) => {
    addEventFormButton()
})



function addEventFormButton() {
    const searchLocation = document.getElementById('location');
    const date = new Date()
    const searchDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    const submitButton = document.querySelector('#formContainer>form>button');
    submitButton.addEventListener('click', async (event) => {
        event.preventDefault();
        console.log(searchLocation.value, searchDate, "metric")
        const weatherResult = await fetchWeather(searchLocation.value, searchDate, "metric")
        console.log(weatherResult)
        renderWeatherResult(weatherResult, searchLocation.value);
        
    })
}

 async function renderWeatherResult(weatherResult, searchLocation) {
    const weatherSection = document.getElementById('weathersection')
    const weather = document.getElementById('weather');
    weather.innerText = "";

    const locationTitle = document.getElementById('locationTitle');
    locationTitle.innerText = "";
    const title = document.createElement('h2');
    title.innerText = await searchLocation;

    const conditionsTemp = document.createElement('h3');
    conditionsTemp.innerText = await `${weatherResult.conditions}: ${weatherResult.temp}°C`;
    
    const feelsLike = document.createElement('p');
    feelsLike.innerText = await `Feels Like: ${weatherResult.feelsLike}°C`;

    const precipitation = document.createElement('p');
    precipitation.innerText = await `Precipitation: ${weatherResult.precipitation}ml`;
    
    const precipitationChance = document.createElement('p');
    precipitationChance.innerText = await `Precipitation Chance: ${weatherResult.precipitationChance}%`;

    const humidity = document.createElement('p');
    humidity.innerText = await `Humidity: ${weatherResult.humidity}%`;

    const windSpeed = document.createElement('p');
    windSpeed.innerText = await `Wind Speed: ${weatherResult.windSpeed}km/h`;

    const windDirection = document.createElement('p');
    switch (true) {
        case (await weatherResult.windDirection <45):
            windDirection.innerText = "Wind Direction: N";
            break;
        case (await weatherResult.windDirection >= 45 && await weatherResult.windDirection < 90):
            windDirection.innerText = "Wind Direction: NE";
            break;
        case (await weatherResult.windDirection >= 90 && await weatherResult.windDirection < 135):
            windDirection.innerText = "Wind Direction: E";
            break;
        case (await weatherResult.windDirection >= 135 && await weatherResult.windDirection < 180):
            windDirection.innerText = "Wind Direction: SE";
            break;
        case (await weatherResult.windDirection >= 180 && await weatherResult.windDirection < 225):
            windDirection.innerText = "Wind Direction: S";
            break;
        case (await weatherResult.windDirection >= 225 && await weatherResult.windDirection < 270):
            windDirection.innerText = "Wind Direction: SW";
            break;
        case (await weatherResult.windDirection >= 270 && await weatherResult.windDirection < 315):
            windDirection.innerText = "Wind Direction: W";
            break;
        case (await weatherResult.windDirection >= 315 && await weatherResult.windDirection < 360):
            windDirection.innerText = "Wind Direction: NW";
            break;
    }
    const uvIndex = document.createElement('p');
    uvIndex.innerText = await `UV Index: ${weatherResult.uvIndex}`;

    locationTitle.append(title);
    weather.append(conditionsTemp, feelsLike, precipitation, precipitationChance, humidity, windSpeed, windDirection, uvIndex);
    weather.style.border = "2px solid #2D3142"
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
        return {"temp":temp, "feelsLike":feelsLike, "humidity":humidity, "precipitation":precipitation, "precipitationChance":precipitationChance, "precipType":precipType, "conditions":conditions, "uvIndex":uvIndex, "windSpeed":windSpeed, "windDirection":windDirection};
    } catch (error) {
        console.error("Fetch error:", error);
    }
}