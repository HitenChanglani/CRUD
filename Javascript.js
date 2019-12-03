let index = 0;
let Data = [];

function OnClickRead(){
    "use strict";
    let a, v1, v2, v3, v4, v5, v6, v7, v8;

    let entry = {
        fName: document.getElementById("FirstName").value,
        lName: document.getElementById("LastName").value,
        con: document.getElementById("Contact").value,
        TaxID: document.getElementById("TaxID").value,
        gender: gender(),
        uName: document.getElementById("Username").value,
        email: document.getElementById("Email").value,

    }
    let confpwd = document.getElementById("cnf").value;
    let password = document.getElementById("Pass").value;

    if(entry.fName == ""){
        v1 = false;
        alert("Please enter a valid First Name!");
    }
    else{ v1 = true;}

    if(entry.lName == ""){
        v2 = false;
        alert("Please enter a valid Last Name!");
    }
    else{ v2 = true;}

    if(entry.con.length != 10 || UniqueValue(1)){
        v3 = false;
        alert("Please enter a valid contact number!");
    }
    else{ v3 = true;}

    if(entry.TaxID.length != 12 || UniqueValue(2)){
        v4 = false;
        alert("Please enter a valid Tax ID!");
    }
    else{ v4 = true;}

    if(entry.gender == undefined){
        v5 = false;
        alert("Please select a gender!");
    }
    else{v5 = true;}

    if(entry.uName == "" || UniqueValue(3)){
        v6 = false;
        alert("Please enter a valid Username!");
    }
    else{ v6 = true;}

    if(entry.email == "" || UniqueValue(4)){
        v7 = false;
        alert("Please enter a valid e-mail ID!");
    }
    else{ v7 = true;}

    if(password == "" || password != confpwd){
        v8 = false;
        alert("Passwords do not match!");
    }
    else{ v8 = true;}

    a = v1 & v2 & v3 & v4 & v5 & v6 & v7 & v8;


    if(a){
        let x = confirm("Are you sure you want to submit?");
        if(x){
            Data.push([index, entry]);
            index = index + 1;
            console.log(entry);
        }
    }    

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
    let inputvalue = prompt("Please enter the Username:");
    for(i = 0; i <= index; i++){
        if(inputvalue == Data[i][1].uName){
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
            else{
                alert("Please select the numbers mentioned in the pop-up box!");
                break;
            }
        }
    }
}

function DelEntry(){
    let Delvalue = prompt("Please enter the Username:");
    for(i = 0; i <= index; i++){
        if(Delvalue == Data[i][1].uName){
            Data.splice(i, 1);
            break;
        }
    }
}

function UniqueValue(arg){
    let z, univalue;
    switch(arg){
        case 1:
            univalue = document.getElementById("Contact").value;
            if(Data.length == 0){
                return false;
                break;
            }
            else{
                for(i = 0; i < index; i++){
                    if(univalue == Data[i][1].con){
                        alert("This mobile number is already registered!");
                        z = i;
                        break;
                    }
                }
                if(z >= 0 && z <= index){
                    return true;
                }
                else{return false;}
            }
            break;
        case 2:
            univalue = document.getElementById("TaxID").value;
            if(Data.length == 0){
                return false;
                break;
            }
            else{
                for(i = 0; i < index; i++){
                    if(univalue == Data[i][1].TaxID){
                        alert("There is already an account associated with this Tax ID!");
                        z = i;
                        break;
                    }
                }
                if(z >= 0 && z <= index){
                    return true;
                }
                else{return false;}
            }
            break;
        case 3:
            univalue = document.getElementById("Username").value;
            if(Data.length == 0){
                return false;
                break;
            }
            else{
                for(i = 0; i < index; i++){
                    if(univalue == Data[i][1].uName){
                        alert("This Username has already been taken!");
                        z = i;
                        break;
                    }
                }
                if(z >= 0 && z <= index){
                    return true;
                }
                else{return false;}
            }
            break;
        case 4:
            univalue = document.getElementById("Email").value;
            if(Data.length == 0){
                return false;
                break;
            }
            else{
                for(i = 0; i < index; i++){
                    if(univalue == Data[i][1].email){
                        alert("This e-mail ID is already registered!");
                        z = i;
                        break;
                    }
                }
                if(z >= 0 && z <= index){
                    return true;
                }
                else{return false;}
            }
            break;
    }
}