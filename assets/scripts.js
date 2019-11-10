
Date.prototype.toDateInputValue = (function() {
var local = new Date(this);
local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


function addCell(tr, val) {
    var td = document.createElement('td');
    td.innerHTML = val;
    tr.appendChild(td)
}

function addRow(tbl, val_1, val_2) {
    var tr = document.createElement('tr');
    addCell(tr, val_1);
    addCell(tr, val_2);
    tbl.appendChild(tr)
}


function funcky(){
    
    var fm = document.getElementById("form1");
    fm.checkValidity();
    var inputTXT = document.getElementById("myTextField1");
    var dateInput = document.getElementById("waitUntil");
    var userName = document.getElementById("userName");

    if(userName.value == ""){
        console.log("emptyNameField");
        alert("Name is Missing");
    }
    if (inputTXT.value == ""){
        console.log("emptyInputField");
        alert("Message is missing");
    }
    if(dateInput.value == ""){
        console.log("emptyDateField");
        alert("Date is missing");    
    }
    if(inputTXT.value != "" && dateInput.value != "" && userName.value != "" ){
        tbl = document.getElementById('tbl');
        addRow(tbl, userName.value, inputTXT.value);
        addRow(tbl, 'LP CHATBOT', 'En breve un operador te contactará' + 'a mas tardar' + dateInput.value);
    }
}
