var form=document.querySelector("form")
var firstname=document.getElementById("firstname")
var lastname=document.getElementById("lastname")
var number=document.getElementById("number")
var email=document.getElementById("email")
var pass1=document.getElementById("pass1")
var pass2=document.getElementById("pass2")
console.log(pass1);
var storage=[]
var local=JSON.parse(localStorage.getItem("fashionstreet"))
if(local){
    storage=local
}

form.addEventListener("submit",(e)=>{
    var regx=/^[a-zA-Z]{2,15}$/
    var regx1=/^[6-9][0-9]{9}$/
    var regx2=/^[0-9a-zA-Z!@]{6,15}$/
    var flag=true
    
    if(regx.test(firstname.value && lastname.value)){}
    else{
        alert("Invalid First Name or Last Name")
        e.preventDefault()
        flag=false
    }

    if(regx1.test(number.value)){}
    else{
        alert("Invalid Contact")
        e.preventDefault()
        flag=false
    }
    if(regx2.test(pass1.value)){}
    else{
        alert("Invalid Password")
        e.preventDefault()
        flag=false
    }
    if(pass1.value==pass2.value){

    }
    else{
        alert("Password and Confirm Password should be same")
        e.preventDefault()
        flag=false 
    }
    if(flag==true){
        alert("Sign Up Sucessfully")

        var obj={
            firstname:firstname.value,
            lastname:lastname.value,
            number:number.value,
            email:email.value,
            password:pass2.value
        }
        storage.push(obj)
        localStorage.setItem("fashionstreet",JSON.stringify(storage))
    }
})