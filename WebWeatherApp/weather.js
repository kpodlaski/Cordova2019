//http://api.openweathermap.org/data/2.5/weather?q=Lodz,pl&appid=64c7b98c91f425ed4bd193334c0bd9d6
//ba4e5e220d6ab917912bc97d8e967ba1

function getWeather(e){
    console.log("Sprawdzam pogodę");
    downloadWeather(document.getElementById("city").value);
    e.preventDefault();
    
}

function downloadWeather(city){
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