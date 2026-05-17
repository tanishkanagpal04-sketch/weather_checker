const apiKey = "e853859df00afa943e25f982dfb73110";

async function getWeather() {

  const city = document.getElementById("cityInput").value;

  if(city === ""){
    alert("Please enter a city name");
    return;
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {

    const response = await fetch(url);
    const data = await response.json();

    if(data.cod == "404"){

      document.getElementById("weatherData").innerHTML =
        `<p>City not found</p>`;

      return;
    }

    document.getElementById("weatherData").innerHTML = `

      <img
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
      >

      <div class="temp">
        ${data.main.temp}°C
      </div>

      <div class="city">
        ${data.name}
      </div>

      <div class="description">
        ${data.weather[0].description}
      </div>

      <div class="details">

        <div>
          <h3>${data.main.humidity}%</h3>
          <p>Humidity</p>
        </div>

        <div>
          <h3>${data.wind.speed} km/h</h3>
          <p>Wind Speed</p>
        </div>

      </div>
    `;

  }
  catch(error){
    console.log(error);
  }
}