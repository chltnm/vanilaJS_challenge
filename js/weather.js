const API_KEY = "2d857b6a22c1c29b3faabed49ea57e8e";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const degree = document.querySelector('#weather span:last-child');
            const city = document.querySelector('#location span.city');
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}`;
            degree.innerHTML = `${Math.floor(data.main.temp)}°C`;
        });//network창에 url 불러짐
    //url부르고 시간걸려서 가져오는 data 식

}
function onGeoError() {
    alert("Can't find you:(");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

