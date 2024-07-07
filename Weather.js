async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '4fc7e482a360410087144105240607'; 
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        const temperature = data.current.temp_c;
        const climate = data.current.condition.text;
        document.getElementById('weather').innerHTML = `Temperature in ${city}: ${temperature} °C and ${climate}`;
    } catch (error) {
        document.getElementById('weather').innerHTML = `Error: ${error.message}`;
    }
}