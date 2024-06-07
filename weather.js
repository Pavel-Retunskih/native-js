const API_KEY = "a9511565358aab7af29166962eae96c0";

const city = "Шклов";

const getWeatherData = async () => {
  try {
    const getCityLocation = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const cityLocation = await getCityLocation.json();
    const longitude = cityLocation[0].lon;
    const latitude = cityLocation[0].lat;
    console.log(longitude, latitude);
    const getWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=ru`
    );
    const data = await getWeatherData.json();
    return data;
  } catch (err) {
    console.log("There some error with code " + err);
  }
};
getWeatherData().then((data) => {
  console.log(data);
});
