const elCoordLat = document.querySelector('.coord-lat');
const elCoordLon = document.querySelector('.coord-lon');
const elNames = document.querySelector('.js-name');
const elTemps = document.querySelector('.js-temp');
const elDescs = document.querySelector('.js-desc');
const elDeg = document.querySelector('.js-deg');
const elSpeed = document.querySelector('.js-speed');
const elLat = document.querySelector('.js-lat');
const elLon = document.querySelector('.js-lon');


const elBtn = document.querySelector('.btn')

elBtn.addEventListener('click', function (e) {
    console.log("gggg");
    e.preventDefault()
    window.location = '../index.html'

    
})

let infoLat = localStorage.getItem('lat')    
let infoLon = localStorage.getItem('lon')
console.log(infoLat);


fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${infoLat}&lon=${infoLon}&limit=5&appid=d7e4687c725ee7243f21d96180556e3f`)
.then(response => response.json())
.then(data => {
    console.log(data);

    let elNamesValue = data[`name`]
let elTempsValue = '🌡'+" - "+ Math.round(data[`main`][`temp`] - 273) + '°C' // temperatura gradusga otqazildi
let elDescsValue = '⛈'+" - "+ data[`weather`][0][`description`]
let elDegValue = '🌬'+ " - " + data[`wind`][`deg`] + 'WSW'
let elSpeedValue = '💨'+ " - " + data[`wind`][`speed`] + 'm/s'
let elLatValue = 'Lat'+ "... -  " + data[`coord`][`lat`]
let elLonValue = 'Lon'+ "... - " + data[`coord`][`lon`]

elNames.innerHTML = elNamesValue;
elTemps.innerHTML = elTempsValue;
elDescs.innerHTML = elDescsValue;
elDeg.innerHTML = elDegValue;
elSpeed.innerHTML = elSpeedValue;
elLat.innerHTML = elLatValue;
elLon.innerHTML = elLonValue;

})
 







