//http://api.openweathermap.org/data/2.5/weather?q=Lodz,pl&appid=64c7b98c91f425ed4bd193334c0bd9d6
//ba4e5e220d6ab917912bc97d8e967ba1

function getWeather(e){
    console.log("Sprawdzam pogodę");
    navigator.geolocation.getCurrentPosition(onSucess,onError);
    //downloadWeather(document.getElementById("city").value);
    e.preventDefault();
    
}

function onSucess(pos){
    console.log(pos);
    downloadWeatherByLocation(pos.coords.latitude,pos.coords.longitude);
}

function onError(err){
    console.log(err);
}

function downloadWeatherByLocation(lat,lon){
    $.ajax({
        method : "GET",
        dataType: 'json',
        url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=64c7b98c91f425ed4bd193334c0bd9d6",
        cache: false
        })
    .done(function (resp) {
        //alert(JSON.stringify(resp));
        console.log(resp);
        //alert(resp.main.temp+ " "
        //      +resp.main.humidity);
        var tempSpan = document.getElementById("temp");
        tempSpan.innerText=Math.trunc(resp.main.temp-273);
        var humSpan = document.getElementById("wilgotnosc");
        humSpan.innerText = resp.main.humidity;
        var iconImg = document.getElementById("icon");
        iconImg.src="http://openweathermap.org/img/w/"+resp.weather[0].icon+".png"
    })
    .fail(function (msg){
      alert(JSON.stringify(msg));
      });
    }

function downloadWeatherByCity(city){
$.ajax({
    method : "GET",
    dataType: 'json',
    url: "http://api.openweathermap.org/data/2.5/weather?q="+city+",pl&appid=64c7b98c91f425ed4bd193334c0bd9d6",
    cache: false
    })
.done(function (resp) {
    //alert(JSON.stringify(resp));
    console.log(resp);
    //alert(resp.main.temp+ " "
    //      +resp.main.humidity);
    var tempSpan = document.getElementById("temp");
    tempSpan.innerText=Math.trunc(resp.main.temp-273);
    var humSpan = document.getElementById("wilgotnosc");
    humSpan.innerText = resp.main.humidity;
    var iconImg = document.getElementById("icon");
    iconImg.src="http://openweathermap.org/img/w/"+resp.weather[0].icon+".png"
})
.fail(function (msg){
  alert(JSON.stringify(msg));
  });
}