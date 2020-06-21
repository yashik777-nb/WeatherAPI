const storage = new Storage();
const storedLocationData = storage.getLocationData();

const weather = new Weather(storedLocationData.city, storedLocationData.state);
const ui = new UI();

// Load Default Weather Data upon dom load
document.addEventListener("DOMContentLoaded", getWeather);

// Change Location Event
document.getElementById("w-changeBtn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  weather.changeLocation(city, state);
  storage.setLocationData(city, state);
  getWeather();
  $("#locModal").modal("hide");
  document.getElementById("city").value = "";
  document.getElementById("state").value = "";
});

function getWeather() {
  weather
    .getWeather()
    .then((data) => ui.showData(data))
    .catch((err) => console.log(err));
}
