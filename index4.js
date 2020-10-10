function change() {
    var box=document.getElementById("user")
    var box2=document.getElementById("pass")
    

    if (box.value.trim().length<5 || box2.value.trim().length<5) {
        alert("the field is empty");
        return false;
    }
     
    else{
        window.location="index.html";
    }
}
function change2() {
    var pho= document.getElementById("pho").value;
    var mail=document.getElementById("mail").value;
    var name=document.getElementById("name1").value

    var regx= /^[7-9][0-9]{9}$/;
    var regx2=/[@gmail,@yahoo].com$/  
    var regx3=/^[A-Z]/

    if(regx.test(pho)&&regx2.test(mail)&&regx3.test(name)) {
        document.getElementById("invalid").innerHTML="valid";
        document.getElementById("invalid").style.color="green";
        document.getElementById("invalid").style.visibility="visible";
    }
    else{
        
        document.getElementById("invalid").innerHTML="invalid";
        document.getElementById("invalid").style.visibility="visible"
        document.getElementById("invalid").style.color="red";
    }
}