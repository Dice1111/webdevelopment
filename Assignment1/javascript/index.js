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
    let inputName = document.getElementById("name").value;
    let inputCode = document.getElementById("moduleCode").value;
    let inputMes = document.getElementById("message").value;

    let valid = true;

    if(inputName=="" || inputName == null){
        document.getElementById("errorName").innerHTML = "Text box must not be empty."
        valid = false;

    }
    else if(/[A-Za-z0-9]+/.test(inputName) == false){
        document.getElementById("errorName").innerHTML = "Cannot enter special character."
        valid = false;
    }else{
        document.getElementById("errorName").innerHTML = "";
    }

    if(inputCode=="" || inputCode == null){
        valid = true;
    }

    else if(/^[A-Z][a-z][2-9]{3}$/.test(inputCode) == false){
        document.getElementById("errorCode").innerHTML = "the content must start with 1 upper case and 1 lower case alphabets and follows by 3 digits in the range of 2 to 9."
        valid = false;
    }else{
        document.getElementById("errorCode").innerHTML = "";
    }

    if(inputMes=="" || inputMes == null){
        document.getElementById("errorMes").innerHTML = "Text box must not be empty.";
        valid = false;
    }else{
        document.getElementById("errorMes").innerHTML = "";
    }
    return valid;
    }