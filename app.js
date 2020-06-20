const weather = new Weather("London", "uk");
const ui = new UI();

// Load Default Weather Data upon dom load
document.addEventListener("DOMContentLoaded", () => {
  weather
    .getWeather()
    .then((data) => ui.showData(data))
    .catch((err) => console.log(err));
});
