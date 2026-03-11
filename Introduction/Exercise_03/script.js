function changeName(){
    document.getElementById("studentName").innerHTML ="Imakshi Siumi"
}

function changeStatus(){
    document.getElementById("studentStatus").innerHTML ="Status: Complete JavaScript Into" 
}

function showDate(){
    let date = new Date();
    document.getElementById("todayDate").innerHTML= "Date : " + date.toDateString();
}

function changeTheme(){
    document.body.style.backgroundColor="lightblue"
}

console.log("Student card demo loaded successfuly")
