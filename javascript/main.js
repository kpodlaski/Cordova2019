console.log("Loading script");
var last_btn_id=1;

function add_button(eventObject){
    console.log("Kliknieto :)");
    console.log(eventObject.srcElement.id);
    //alert("Kliknieto");    
    var new_btn = document.createElement("button");
    new_btn.innerText = "Buttonik";
    new_btn.id=last_btn_id++;
    new_btn.addEventListener("click",add_button);
    document.getElementById("new_buttons_div").appendChild(new_btn);
    //console.log(eventObject);
}


var btn = document.getElementsByTagName("button")[0];
btn.innerText="To click";
btn.id=0;
btn.addEventListener("click",add_button);
console.log(btn.style.backgroundImage);
console.log(btn.parametrA);
btn.parametrA=13;
console.log(btn.parametrA);


