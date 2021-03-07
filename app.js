// Requesting from api
const key = "41d0b3521b5079d62f148acc876fe96b";
let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", showWeather);
async function showWeather() {
  let cityName = document.getElementById("search-city").value;
  let responseText = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
  );

  let response = await responseText.json();
  console.log(response);
}
