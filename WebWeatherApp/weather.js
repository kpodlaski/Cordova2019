//http://api.openweathermap.org/data/2.5/weather?q=Lodz,pl&appid=64c7b98c91f425ed4bd193334c0bd9d6
//ba4e5e220d6ab917912bc97d8e967ba1

$.ajax({
    method : "GET",
    dataType: 'json',
    url: "http://api.openweathermap.org/data/2.5/weather?q=Lodz,pl&appid=64c7b98c91f425ed4bd193334c0bd9d6",
    cache: false
    })
.done(function (resp) {
    alert(JSON.stringify(resp));
})
.fail(function (msg){
  alert(JSON.stringify(msg));
  });