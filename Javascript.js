let index = 0;
let Data = [];

function OnClickRead(){
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

function change(){
    let inputvalue = prompt("Please enter the index number:");
    for(i = 0; i <= index; i++){
        if(inputvalue == i){
            let Val = prompt("Press the following numbers to update profile: 1 for Contact & 2 for E-mail");
            if(Val == 1){
                let bool = true;
                let Mobval;
                while(bool){
                    MobVal = prompt("Enter 10 digit contact number:");
                      if(MobVal.length != 10){
                          alert("Incorrect input. Please  enter 10 digit valid mobile number!");
                      }
                    else if(MobVal.length == 10){
                        bool = false;
                    }
                      }
                Data[i][1].con = MobVal;
                break;
            }
            else if(Val == 2){
                Data[i][1].email = prompt("Enter new E-mail address:");
                break;
            }
        }
    }
}

function DelEntry(){
    let Delvalue = prompt("Please enter the index number:");
    for(i = 0; i <= index; i++){
        if(Delvalue == i){
            Data.splice(i, 1);
        }
    }
}