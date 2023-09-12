
function fetchWeatherData() {
 
    const apiKey = 'YOUR_API_KEY';

    const city = 'YOUR_CITY';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const weatherDataElement = document.querySelector('.weather-data');
            weatherDataElement.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
            `;
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            const weatherDataElement = document.querySelector('.weather-data');
            weatherDataElement.innerHTML = 'Failed to fetch weather data.';
        });
}


window.addEventListener('load', fetchWeatherData);