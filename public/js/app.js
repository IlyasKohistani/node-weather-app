const form = document.querySelector('form');
const search = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    fetchData(location).then(() => {
        search.value = '';
    });
})


async function fetchData(location) {
    fetch('http://localhost:3000/weather?address=' + location).then(response => {
        response.json().then((data) => {
            if (data.error)
                error(data.error);
            else {
                document.getElementById('precip').innerHTML = data.forecast.precip + ' %'
                document.getElementById('humidity').innerHTML = data.forecast.humidity + ' %'
                document.getElementById('wind').innerHTML = data.forecast.wind + ' km/h'
                document.getElementById('visibility').innerHTML = data.forecast.visibility + ' km'
                document.getElementById('pressure').innerHTML = data.forecast.pressure + ' hPa'
                document.getElementById('clouds').innerHTML = data.forecast.cloudcover + ' %'
                document.getElementById('day').innerHTML = data.forecast.day
                document.getElementById('date').innerHTML = data.forecast.date
                document.getElementById('location').innerHTML = data.forecast.location + ', ' + data.forecast.country
                document.getElementById('temperature').innerHTML = data.forecast.temperature + '°C'
                document.getElementById('description').innerHTML = data.forecast.description
                document.getElementById('weather-icon').style.backgroundImage = `url('${data.forecast.icon}')`
            }
            return data;
        })
    })
}


function error(message) {
    const errorBox = document.getElementById('error-container');
    errorBox.innerHTML = message;
    errorBox.style.display = 'block';
    setTimeout(() => {
        errorBox.style.display = 'none';
        errorBox.innerHTML = '';
    }, 3000);
}