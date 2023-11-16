var form=document.querySelector("form")
var username=document.getElementById("username")
var password=document.getElementById("password")
var lstorage=JSON.parse(localStorage.getItem("fashionstreet"))
console.log(lstorage)

form.addEventListener("submit",(e)=>{
    var matching=lstorage.find((f)=>{
        if((f.number==username.value || f.email==username.value) && f.password==password.value){
            return f
        }
    })
    console.log(matching)
    var flag=true

    if(matching){
        alert("Welcome To Fashion Street")
    }
    else{
        alert("Invalid Credentials")
        e.preventDefault()
        flag=false
    }
    if(flag==true){
        localStorage.setItem("login",JSON.stringify(matching))
    }
})