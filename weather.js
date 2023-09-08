
let a=document.getElementById("input")
let tempvalue = document.getElementById("temp1")
let countryvalue = document.getElementById("country")
let humidityvalue = document.getElementById("humidity1")
let windvalue = document.getElementById("wind1")
let search = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${a.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`
    let response = await fetch(url);
    let data = await response.json()
    console.log(data);
    let arr=data.city;
    console.log(arr);
    tempvalue.textContent = data.main.temp+" °C"
    countryvalue.textContent = data.sys.country
    humidityvalue.textContent = data.clouds.all+"% chances"
    windvalue.textContent = data.wind.speed+" km/h"
}
// let date=document.getElementById("date")
//     setInterval(() => {
//         const dateTime=new Date();
//         date.innerHTML= dateTime.toLocaleString();
//     }, 1000);

 

