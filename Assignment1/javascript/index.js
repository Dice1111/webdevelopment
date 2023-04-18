

function getCurrentDate(){
    let date = new Date();
    let currentDay= String(date.getDate()).padStart(2, "0");
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    let currentDate = currentDay+"-"+currentMonth+"-"+currentYear;
    document.getElementById("date").value = currentDate;
}

function inputEnable(){
    let find = document.getElementById("find");
    document.getElementById("replace").disabled = false;
    if(find.value == ""){
        document.getElementById("replace").disabled = true;
    }
}

function findAndReplace(){
    let find = document.getElementById("find").value.trim();
    let replace = document.getElementById("replace").value.trim();
    let message = document.getElementById("message").value.trim();

    let re = new RegExp(find,"g");
    let count = message.match(re).length;
    if(message.includes(find)){
        document.getElementById("message").value = message.replaceAll(find,replace);
        document.getElementById("count").innerHTML=count;
        
    }else{
        alert("Not Found!");
    }
    
}