var input = document.getElementById('input')
var btn = document.getElementById('btn')
var temp = document.getElementById('temp')
var humid = document.getElementById('humid')
var cityname = document.getElementById('city')
var weath = document.getElementById('weath')
var visib = document.getElementById('visib')
var winds = document.getElementById('wind')

btn.addEventListener('click',()=>{
    var city = input.value
    const apiKey = '529bb0217cfa427383f89ebd2bd110e4'
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(url)
    .then(data=>data.json())
    .then((res)=>{
        console.log(res)
        const text1 = `City : ${city}`
        cityname.innerText = text1
        const celsius = res.main.temp - 273
        const text2 = `Temp : ${celsius.toFixed(2)} °C.`
        temp.innerText = text2 
        humid.innerText = `Humidity : ${res.main.humidity}`
        //Right
        weath.innerText = `Weather : ${res.weather[0].main}`
        visib.innerText = `Visibility : ${res.visibility}`
        winds.innerText = `Wind speed : ${res.wind.speed} m/s`
    })
})

var date = document.getElementById('date')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today ='Date: ' + mm + '/' + dd + '/' + yyyy;
date.innerText = today