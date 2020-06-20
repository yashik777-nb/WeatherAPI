class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.w_desc = document.getElementById("w-desc");
    this.w_string = document.getElementById("w-string");
    this.w_icon = document.getElementById("w-icon");
    this.w_humidity = document.getElementById("w-humidity");
    this.w_temp = document.getElementById("w-temp");
    this.w_feelslike = document.getElementById("w-feelslike");
    this.w_wind = document.getElementById("w-wind");
    this.k2c = 273.15;
  }

  showData(data) {
    console.log(data);
    this.location.textContent = `${data.name}, ${data.sys.country}`;
    this.w_desc.textContent = data.weather[0].main;
    this.w_string.textContent = data.weather[0].description;
    this.w_icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    );
    this.w_humidity.textContent = `Relative Humidity: ${data.main.humidity}%`;
    this.w_temp.textContent = `Temperature: ${this.convertKelvintoCelcius(
      data.main.temp
    )} &deg`;
    this.w_feelslike.textContent = `Feels Like: ${this.convertKelvintoCelcius(
      data.main.feels_like
    )}`;
    this.w_wind.textContent = `Wind: ${data.wind.speed}`;
  }

  convertKelvintoCelcius(kelvin) {
    return (parseFloat(kelvin) - this.k2c).toFixed(2);
  }
}
