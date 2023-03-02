let country;
const icon = document.getElementById("logo");
document.getElementById("city").addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.code === "Enter") {
    country = document.getElementById("city").value;
    getWeatherData();
  }
});

async function getWeatherData() {
  const response = fetch(
    `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${country}&aqi=no`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      document.getElementById(
        "temperature"
      ).innerHTML = `${data.current.temp_c} <sup style="font-size: 36px;">&deg</sup>`;
      document.getElementById(
        "tempFeels"
      ).innerHTML = `${data.current.feelslike_c} <sup style="font-size: 20px;">&deg</sup>`;
    
      logo.src = `${data.current.condition.icon}`;
      if (data.current.is_day == 1) icon.src = "./image/day.svg";
      else if (data.current.is_day == 0) icon.src = "./image/night.svg";
    });
}
