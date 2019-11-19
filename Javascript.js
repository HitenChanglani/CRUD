let index = 1;
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
    window.index = index + 1;
    window.Data[index].push = [index, entry];
    console.log(entry);
    
}

function display(){
    for(i = 1; i <= index; i++){
        console.log(window.Data[i]);
    }
}


function gender(){
    let i, gen;
    for(i = 0; i< G.length; i++){
        if(){
            gen = document.getElementsByName(Gender).value;
            break;
        }
    }
    return gen;
}