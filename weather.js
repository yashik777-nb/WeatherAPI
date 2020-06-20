class Weather {
  constructor(city, state) {
    this.apiKey = "5771d15df416400c075fd15cbec46486";
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}..`
    );
    const data = await response.json();
    return data;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
