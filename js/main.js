const elButton = document.querySelector('.button');
const inputValue = document.querySelector('.inputValue');
const elList = document.querySelector('.js-list');
const elAppend = document.querySelector('.js-append');
const elName = document.querySelector('.name');
const elDesc = document.querySelector('.desc');
const elTemp = document.querySelector('.temp');
const elCoordLat = document.querySelector('.coord-lat');
const elCoordLon = document.querySelector('.coord-lon');
const elCityBtn = document.querySelector('.js-content');


elButton.addEventListener('click', function (evt) {
    elName.textContent = 'loading...'

    // window.location = '../about.html'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=`+inputValue.value+`&appid=d7e4687c725ee7243f21d96180556e3f`)
.then(response => response.json())
.then(data => {
    console.log(data);
    let elNameValue = data[`name`]
    let elTempValue = Math.round(data[`main`][`temp`] - 273) + '°C' // temperatura gradusga otqazildi
    let elDescValue = data[`weather`][0][`description`]
    let elCoordLatValue = data[`coord`][`lat`]
    let elCoordLonValue = data[`coord`][`lon`]

    elName.innerHTML = elNameValue;
    elTemp.innerHTML = elTempValue;
    elDesc.innerHTML = elDescValue;
    elCoordLat.innerHTML = elCoordLatValue;
    elCoordLon.innerHTML = elCoordLonValue;

})


.catch(err => alert("Wrong city name!"), elName.textContent = '') //loading... dgan joy obtashaldi
    
})


elCityBtn.addEventListener('click', item => {
    
    
    localStorage.setItem('lon', item.target.dataset.lon)
    localStorage.setItem('lat', item.target.dataset.lat)
    console.log(window.location.pathname = '/about.html');
    // window.location = '../about.html'

    })


    function handleBtnClick(evt) {
        localStorage.setItem('lon', evt.target.dataset.lon)
        localStorage.setItem('lat', evt.target.dataset.lat)
    window.location.pathname = '/about.html'
    }

    


    function handleInput(evt) {
        elAppend.innerHTML = null
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${evt.target.value}&limit=5&appid=d7e4687c725ee7243f21d96180556e3f`)
        .then(response => response.json())
        .then(data => data.forEach(value => {

            

            let elBttn = document.createElement('button')
            let elItem = document.createElement('LI')

             
          elBttn.textContent = value.name
          
          elItem.appendChild(elBttn)
          elAppend.appendChild(elItem)
        //   elItem.appendChild(elBttn)

        elBttn.classList.add('js-bttn')
        elItem.classList.add('js-items')

        elBttn.dataset.lat = value.lat
        elBttn.dataset.lon = value.lon

        elBttn.addEventListener('click', handleBtnClick)

        
        
        }))
        
    }

    inputValue.addEventListener('input', handleInput)


