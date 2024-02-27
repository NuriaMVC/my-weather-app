function formatDate() {
  let now = new Date();
  console.log(now);

  let hour = now.getHours().toString().padStart(2, "0");
  console.log(now.getHours());

  let minute = now.getMinutes().toString().padStart(2, "0");
  console.log(now.getMinutes());

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  console.log(day);

  let currentDate = `${day} ${hour}:${minute}`;
  console.log(currentDate);

  document.querySelector("#date-placeholder").innerHTML = currentDate;
}

formatDate();

function displayTemperature(response) {
  console.log(Math.round(response.data.temperature.current));
  let temperatureElement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}`;
}

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("#city-name");
  city.innerHTML = cityInput.value;
  let apiKey = "d75bd003f442ft249a6aa4aba8co07bf";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityInput.value}&key=${apiKey}`;
  axios.get(apiUrl).then(displayTemperature);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", searchCity);
