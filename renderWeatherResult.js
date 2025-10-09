
export function renderWeatherResult(weatherResult) {
    const weatherSection = document.getElementById('weathersection');

    Object.entries(weatherResult).forEach((section) => {
        let searchConditions = document.createElement('p');
        searchConditions.innerText = section
        weatherSection.append(searchConditions);
    })
}