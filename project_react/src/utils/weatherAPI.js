function weatherApi(latitude, longitude, APIkey) {
    return getWeatherDataFromApi(latitude, longitude, APIkey)
        .then((data) => processWeatherData(data));
};

function getWeatherDataFromApi(latitude, longitude, APIkey) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=imperial`)

    .then((res) => {
        if (res.ok) {
            return res.json();
        }
    })

    .catch((err) => {
        console.log(err);
    })
};

function processWeatherData(data) {
    const weatherData = {
        temputure: getWeatherData(data.temperature),
    }
};

function getWeatherData(temperature) {
    if (temperature >= 86) {
        return 'hot';
    } else if (temperature >= 66) {
        return 'warm';
    } else {
        return 'cold';
    }
};

export default weatherApi;