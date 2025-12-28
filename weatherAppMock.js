const btn=document.getElementById("btn");
const spinner=document.getElementById("spinner");
const btnText=document.getElementById("btnText");
const result=document.getElementById("result");
const cityInput=document.getElementById("city");

const weatherData = {
  mumbai: { temp: 32, condition: "Sunny ☀️" },
  delhi: { temp: 28, condition: "Cloudy ☁️" },
  pune: { temp: 30, condition: "Clear 🌤️" },
  chennai: { temp: 34, condition: "Hot 🔥" }
};

//fake api call
function fakeWeatherFetch(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (weatherData[city]) {
        resolve(weatherData[city]);
      } else {
        reject("City not found");
      }
    }, 1500);
  });
}
async function getWeather() {
  const city = cityInput.value.trim().toLowerCase();

  if (!city) {
    result.textContent = "Please enter a city name";
    return;
  }
    try{
        btn.disabled=true;
        spinner.style.display="inline-block";
        btnText.textContent="Loadin...";

        const data=await fakeWeatherFetch(city);

        result.innerHTML=`  <h3>${city.toUpperCase()}</h3>
      <p>🌡️ Temperature: ${data.temp} °C</p>
      <p>${data.condition}</p>`;
    }
    catch(error){
        result.textContent=error;
    }finally{
        spinner.style.display = "none";
    btnText.textContent = "Get Weather";
    btn.disabled = false;
    }
}
btn.addEventListener("click",getWeather);
