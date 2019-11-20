let index = 0;
let Data = [];

function OnClickRead() {
    "use strict";
    let entry = {
    fName: document.getElementById("FirstName").value,
    lName: document.getElementById("LastName").value,
    con: document.getElementById("Contact").value,
    TaxID: document.getElementById("TaxID").value,
    gender: gender(),
    uName: document.getElementById("Username").value,
    email: document.getElementById("Email").value,
    password: document.getElementById("Pass").value
    }
    Data.push([index, entry]);
    index = index + 1;
    console.log(entry);
    
}

function display(){
    for(i = 0; i < Data.length; i++){
        console.log(Data[i]);
    }
}


function gender(){
    let gen; 
    let radiovalue = document.getElementsByName('Gender');
    for(i = 0; i < radiovalue.length; i++){
        if(radiovalue[i].checked){
            gen = radiovalue[i].value;
            break;
        }
    }
    return gen;
}