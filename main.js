//-----------------------------Login----------------------------
var header=document.querySelector(".fa-user")
var login = JSON.parse(localStorage.getItem("login"))
// console.log(header,login)
if(login){
    header.innerHTML=`<span>${login.firstname}</span><span>   </span><button id="logout"><i class="fa-solid fa-right-from-bracket"></i></button>`
    var logout=document.getElementById("logout")
    console.log(logout)
    logout.addEventListener("click",()=>{
        localStorage.removeItem("login")
        header.innerHTML = `<ul>
        <a href="./cart.html"><li><i class="fa-solid fa-cart-shopping"> CART</i></li></a>
        <a href="./login.html"><li><i class="fa-solid fa-user"> LOGIN</i></li></a>
    </ul>` 
    })
} 

//======================================================Shop Section======================================================
var tshirt=document.getElementById("tshirt")
var tshirtStorage=[
    {id:"tshirt1",src:"./image/AllenSolly-MenTshirt.jpg",name:"Men's Regular Fit Polo",price:"499"},
    {id:"tshirt2",src:"./image/EYEBOGLERT-Shirt.jpg",name:"Mens Colorblocked Polo T-Shirt ",price:"449"},
    {id:"tshirt3",src:"./image/RoundNeck.jpg",name:"Men's Super Rich Striped Round Neck ",price:"699"},
    {id:"tshirt4",src:"./image/FullSleeveSlimFit.jpg",name:"Men's Printed Full Sleeve Slim Fit ",price:"349"},
    {id:"tshirt5",src:"./image/DesignerT-Shirt.jpg",name:"Men's Cotton Designer T-Shirt",price:"499"},
    {id:"tshirt6",src:"./image/OversizedT-Shirt.jpg",name:"Oversized Loose Fit Relaxed T-Shirt",price:"399"},

]
function tshirtFunction(){
    tshirtStorage.forEach((e) => {
        tshirt.innerHTML +=`<nav class="box" id=${e.id}> 
        <img src=${e.src} alt="">
       <h3>${e.name}</h3>
        <nav class="rating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
        </nav>
       <p>RS ${e.price}</p>
       <button class="addcart">Add to Cart</button>
    </nav>`
        
    })
}
// ---------------------------------------------------------------------------------------------------
var shirt=document.getElementById("shirt")
var shirtStorage=[{id:"shirt1",src:"./image/DennisLingoPrintedCasualShirt.jpg",name:"Dennis Lingo Men's Printed Slim Fit Cotton Casual Shirt",price:"699"},
                  {id:"shirt2",src:"./image/DennisLingoshirt.jpg",name:"Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt",price:"649"},
                  {id:"shirt3",src:"./image/DennisLingoDenimShirt.jpg",name:"Dennis Lingo Men's Denim Solid Casual Shirt",price:"649"},
                  {id:"shirt4",src:"./image/DennisLingoCheckeredShirt.jpg",name:"Dennis Lingo Men's Checkered Slim Fit Casual Shirt",price:"649"},
                  {id:"shirt5",src:"./image/DennisLingoCasualShirt.jpg",name:"Dennis Lingo Men Casual Shirt",price:"799"},                  
                  {id:"shirt6",src:"./image/DennisLingoStripedCasualShirt.jpg",name:"Dennis Lingo Men's Striped Slim Fit Cotton Casual Shirt",price:"549"},             
                 ]
function shirtFunction(){
shirtStorage.forEach((e) => {
        shirt.innerHTML +=`<nav class="box" id=${e.id}> 
            <img src=${e.src} alt="">
            <h3>${e.name}</h3>
            <nav class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
            </nav>
            <p>RS ${e.price}</p>
            <button class="addcart">Add to Cart</button>
            </nav>`
                 })
                 }
// ---------------------------------------------------------------------------------------------------
var jeans=document.getElementById("jeans")
var jeansStorage=[{id:"jeans1",src:"./image/LevisMidRiseJeans.jpg",name:"Levi's Men's Mid Rise 511 Slim Jeans",price:"1599"},
                  {id:"jeans2",src:"./image/USPOLOASSNSkinnyJeans.jpg",name:"U.S. POLO ASSN. Men's Skinny Jeans",price:"2219"},
                  {id:"jeans3",src:"./image/AlphaArraySlimFitJeans.jpg",name:"Alpha Array Men Comfort Slim Fit Jeans",price:"1699"},
                  {id:"jeans4",src:"./image/BillfordMenJeans.jpg",name:"Billford Men Jeans",price:"599"},
                  {id:"jeans5",src:"./image/UrbanoFashionStretchable.jpg",name:"Urbano Fashion Men's Slim Fit Jeans Stretchable",price:"699"},                  
                  {id:"jeans6",src:"./image/PepeJeansMenJeans.jpg",name:"Pepe Jeans Men Jeans",price:"1499"}, 
                  {id:"jeans7",src:"./image/CampusSutraJeans.jpg",name:"Campus Sutra Men's Slim Jeans",price:"799"}, 
                  {id:"jeans8",src:"./image/RedTapeJeans.jpg",name:"Red Tape Men's Grey Skinny Jeans",price:"1799"}            
                 ]
function jeansFunction(){
    jeansStorage.forEach((e) => {
        jeans.innerHTML +=`<nav class="box" id=${e.id}> 
            <img src=${e.src} alt="">
            <h3>${e.name}</h3>
            <nav class="rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
            </nav>
            <p>RS ${e.price}</p>
            <button class="addcart">Add to Cart</button>
            </nav>`
                 })
                 }
tshirtFunction()
shirtFunction()
jeansFunction()

//======================================================Cart Section======================================================
var storage=[]
var storage1=JSON.parse(localStorage.getItem("cart"))
if(storage1){
    storage=storage1
}

function mainCart() {
    var allitems = [tshirtStorage,shirtStorage,jeansStorage]
    var btn = document.querySelectorAll(".addcart")
    // console.log(btn)
    btn.forEach((button) => {
        button.addEventListener("click", () => {
            var parent = button.parentElement.id
            allitems.forEach((items) => {
                items.find((check) => {
                    if (check.id == parent) {
                        storage.push(check)
                      localStorage.setItem("cart",JSON.stringify(storage))
                    //   localStorage.removeItem("cart")
                    alert("Added to Cart")
                    }
                })
            })
        })
    })
}
mainCart()