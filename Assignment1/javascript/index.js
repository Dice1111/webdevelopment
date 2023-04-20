setInterval(
    getCurrentDate(),1000
)

function getCurrentDate(){
    let date = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 
              'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let currentDay= date.getDate();
    let currentMonth = months[date.getMonth()];
    let currentYear = date.getFullYear();
    let currentDayLetter = days[date.getDay()]
    let currentDate = currentDay+"-"+currentMonth+"-"+currentYear+"-"+currentDayLetter;
    document.getElementById("date").defaultValue = currentDate;
}

function inputEnable(){
    let find = document.getElementById("find");
    document.getElementById("replace").disabled = false;
    document.getElementById("fsBtn").disabled = false;

    if(find.value == ""){
        document.getElementById("replace").disabled = true;
        document.getElementById("fsBtn").disabled = true;
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

function validateForm(){
    var input = document.getElementById("message").value;

    if(input=="" || input == null){
        alert("pls enter name.");
        return false;

    }
    else if(/[A-Za-z0-9]+/.test(input) == false){
        alert("input does not match the pattern");
    return false;
    }
    return true;
    }