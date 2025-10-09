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
        console.log(weatherResult)
        renderWeatherResult(weatherResult[0]);
        
    })
}

 async function renderWeatherResult(weatherResult) {
    const weatherSection = document.getElementById('weathersection');

    const conditionsTemp = document.createElement('h3');
    conditionsTemp.innerText = await `${weatherResult.conditions} - ${weatherResult.temp}°C`;
    

    const feelsLike = document.createElement('p');
    feelsLike.innerText = await `Feels Like: ${weatherResult.feelsLike}°C`;

    const precipitation = document.createElement('p');
    precipitation.innerText = await `Precipitation: ${weatherResult.precipitation}ml`;
    
    const precipitationChance = document.createElement('p');
    precipitationChance.innerText = await `Precipitation Chance: ${weatherResult.precipitationChance}%`;

    const precipType = document.createElement('p');
    precipType.innerText = await `Precipitation Type: ${weatherResult.precipType}`;

    const humidity = document.createElement('p');
    humidity.innerText = await `Humidity: ${weatherResult.humidity}%`;

    const windSpeed = document.createElement('p');
    windSpeed.innerText = await `Wind Speed: ${weatherResult.windSpeed}km/h`;

    const windDirection = document.createElement('p');
    windDirection.innerText = await `Wind Direction: ${weatherResult.windDirection}°`;

    const uvIndex = document.createElement('p');
    uvIndex.innerText = await `UV Index: ${weatherResult.uvIndex}`;

    weatherSection.append(conditionsTemp, feelsLike, precipitation, precipitationChance, precipType, humidity, windSpeed, windDirection, uvIndex);
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
        return [{"temp":temp, "feelsLike":feelsLike, "humidity":humidity, "precipitation":precipitation, "precipitationChance":precipitationChance, "precipType":precipType, "conditions":conditions, "uvIndex":uvIndex, "windSpeed":windSpeed, "windDirection":windDirection}];
    } catch (error) {
        console.error("Fetch error:", error);
    }
}