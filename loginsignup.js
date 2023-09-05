// function display(event) {

//     if (event.innerHTML=="Click here to View"){
//     document.getElementsByTagName("button")[0].innerHTML="hide"
//     document.getElementById("body1").style.display="flex"
// }
// else{
//     document.getElementsByTagName("button")[0].innerHTML="Click here to View"
//     document.getElementById("body1").style.display="none"
// }
// }

function login(event){

if(event.innerHTML=="Sign Up"){
    document.getElementById("signbtn").style.color="red"
    
    document.getElementById("body11").style.display="block"
    document.getElementById("body12").style.display="none"
    document.getElementById("signbtn").style.textDecoration="none"
    document.getElementById("loginbtn").style.textDecoration="underline"
} 
else{
    document.getElementById("signbtn").style.color="black";
    document.getElementById("body11").style.display="none"
    document.getElementById("body12").style.display="block"
}

}
function signup(e){
if(e.innerHTML=="Log In"){
    document.getElementById("loginbtn").style.textDecoration="none"
    document.getElementById("signbtn").style.textDecoration="underline"
    document.getElementById("loginbtn").style.color="red";
    document.getElementById("body11").style.display="none"
    document.getElementById("body12").style.display="block"
}
else{
    document.getElementById("loginbtn").style.color="black";
    document.getElementById("body11").style.display="block"
    document.getElementById("body12").style.display="none"
}

}

function fullname(e){
    var s1=e.value
    
    var exp1=/^[a-zA-Z ]{3,}$/i
    if(! exp1.test(s1)){
        if(s.length<=3){
        document.getElementById("fullnameerr").innerHTML="name should >3 letters"
        }
       
        document.getElementById("fullnameerr").style.visibility="visible"
    }
    else{
        document.getElementById("fullnameerr").style.visibility="hidden"
    }
}
function email(e){
    var s2=e.value
var exp2=/^[a-z0-9_]+[.]?[a-z0-9]+[@][a-z]+[.](com|co.in|in|asia|org|)$/i
if(! exp2.test(s2)){
    document.getElementById("emailerr").innerHTML="Invalid Email"
    document.getElementById("emailerr").style.visibility="visible"

}
else{
        document.getElementById("fullnameerr").style.visibility="hidden"

}
}

function password(e){
    var s3=e.value
    var exp3=/[0-9a-zA-Z@#!?&*$^]{8,}$/i
    if(! exp3.test(s3)){
        document.getElementById("passworderr").innerHTML="Password is weak"
        document.getElementById("passworderr").style.visibility="visible"
    
    }
    else{
            document.getElementById("passworderr").style.visibility="hidden"
    
    }
}

function contact(e){
    var s4=e.value
    var exp4=/[0-9]{10}$/i
    if(! exp4.test(s4)){
        document.getElementById("contacterr").innerHTML="invalid Number"
        document.getElementById("contacterr").style.visibility="visible"
    
    }
    else{
            document.getElementById("contacterr").style.visibility="hidden"
    
    }
}

function verify(){
    let condcheck=document.getElementById("condcheck")
    if (! document.getElementById("cond").checked){
     condcheck.style.color="red"
     condcheck.style.fontWeight="800"   
    }

    else{
        condcheck.style.fontWeight="200" 
        condcheck.style.color="black"
    }
    
}

