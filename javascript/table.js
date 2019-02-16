var plus_btn = document.getElementsByTagName("button")[0];
var last_id = 0;
plus_btn.addEventListener("click",function(e){
    var contact = {
            'id' : last_id++,
            'name' : "Jane",
            'surname' : 'Doe'
    };
    var row = document.createElement("tr");
    var col = document.createElement("td");
    col.innerText=contact.id;
    row.appendChild(col);

    document.getElementById("contacts").appendChild(row);
});