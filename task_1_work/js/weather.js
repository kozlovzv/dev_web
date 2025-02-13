const weatherApiKey = '1385f00c44ff06dca90b5bed9a0b313d';

async function getWeather(city) {
    const weatherInfo = document.querySelector('.weather-info');
    
    if (!city) {
        console.error('Город не указан');
        return;
    }

    if (weatherInfo) {
        weatherInfo.classList.add('loading');
        weatherInfo.innerHTML = 'Загрузка погоды...';
    }
    
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${weatherApiKey}&lang=ru`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP ошибка! статус: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (weatherInfo) {
            if (data.main && data.weather && data.weather[0]) {
                weatherInfo.innerHTML = `
                    <div class="weather-temp">${Math.round(data.main.temp)}°C</div>
                    <div class="weather-desc">${data.weather[0].description}</div>
                    <div class="weather-details">
                        Влажность: ${data.main.humidity}%<br>
                        Ветер: ${Math.round(data.wind.speed)} м/с
                    </div>
                `;
            } else {
                throw new Error('Неполные данные о погоде');
            }
            weatherInfo.classList.remove('loading');
        }
    } catch (error) {
        console.error('Ошибка получения погоды:', error);
        if (weatherInfo) {
            weatherInfo.innerHTML = `
                <div class="weather-error">
                    Не удалось загрузить данные о погоде<br>
                    <small>${error.message}</small>
                </div>
            `;
            weatherInfo.classList.remove('loading');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Страница загружена, начинаем проверку API погоды');
    const weatherInfo = document.querySelector('.weather-info');
    if (weatherInfo) {
        const city = weatherInfo.getAttribute('data-city') || 'New York';
        getWeather(city);
    }
});
