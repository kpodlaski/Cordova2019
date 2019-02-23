var plus_btn = document.getElementsByTagName("button")[0];
var last_id = 0;
plus_btn.addEventListener("click",function(e){
    var contact = {
            'id' : last_id++,
            'name' : (last_id%2==0) ? "Jane" : "John",
            'surname' : 'Doe'
    };
    var row = document.createElement("tr");
    row.id="tbl_row"+last_id;
    var col = document.createElement("td");
    col.innerText=contact.id;
    row.appendChild(col);
    col = document.createElement("td");
    col.innerText=contact.name;
    row.appendChild(col);
    col = document.createElement("td");
    col.innerText=contact.surname;
    row.appendChild(col);
    new_btn = document.createElement("button");
    new_btn.innerText="X";
    col = document.createElement("td");
    col.appendChild(new_btn);
    row.appendChild(col);

    document.getElementById("contacts").appendChild(row);
    new_btn.addEventListener("click",function(e){
        var to_delete = row.id; 
        var row_to_delete = document.getElementById(to_delete);
        document.getElementById("contacts").removeChild(row_to_delete);
    });
});