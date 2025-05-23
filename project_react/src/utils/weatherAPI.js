function weatherAPI() {
    const [weatherData, setWeatherData] = useState("");
    const [city, setCity] = useState("Reno");

    useEffect(() => {
         fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`)
            .then((response) => response.json())
            .then((data) => {
                const temperature = Math.round(data.main.temp);
                const weatherType = getWeatherData(temperature);
                setWeatherData({ temperature, type: weatherType });
            })
            .catch((error) => console.error("Error fetching weather data:", error));
    }, [city]);

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

export default weatherAPI;