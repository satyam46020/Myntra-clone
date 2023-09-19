
let getDetails =[];
getDetails.push(JSON.parse(localStorage.getItem("details")));
getDetails.forEach(val => {
    const BigImage=document.querySelectorAll(".big-pic");
    BigImage.forEach((bg)=>(bg.setAttribute("src", val.img_url)));
     const smallImage=document.querySelectorAll(".small-pic");
    smallImage.forEach((sm)=>sm.setAttribute("src", val.xtraImg))
    const title=document.getElementById("name");
    title.textContent=val.name;
    const smallDescription=document.querySelector(".small-description");
    smallDescription.textContent=`${val.brand} ${val.fabric} ${val.color} ${val.name}`;
    const cost=document.querySelector("#price");
    cost.textContent=` ₹ ${val.price}`;
    const strikedOffPrice=document.querySelector("s");
    strikedOffPrice.textContent=`₹ ${Math.round(val.price + val.price*(val.discount/100))}`
    const off=document.querySelector(".offer");
    off.textContent=`(${val.discount} % Off)`
    // console.log(val);
    const fpt=document.querySelector(".fpt");
    const Spt=document.querySelector(".Spt");
    const Thpt=document.querySelector(".Thpt");
    fpt.textContent=`Maximum Retail Price: ₹ ${val.price} (Incl. of all taxes)`
    Spt.textContent=`Discount:  ${val.discount}% OFF`
    Thpt.textContent=`Selling Price:  ₹ ${Math.round(val.price + val.price*(val.discount/100))} (Incl. of all taxes)`
    const fabric=document.querySelector(".fabric");
    fabric.textContent=val.fabric;
    const description=document.querySelector(".product-detailsP");

    description.textContent=val.description;
    const AddToCart=document.querySelector("#bag");


    AddToCart.addEventListener("click",function(){
        addingToCart(val,this);
        // bagtot();
      })
 
    const wishBtn=document.querySelector("#wish");
    wishBtn.addEventListener("click",function(){
        wishBtn.classList.toggle("wish");
        console.log("hey")
    })
});

let items = JSON.parse(localStorage.getItem("cartData")) || [];
function addingToCart(val,a){
    // const AddToCart=document.querySelector("button");
   const existingItem = items.find(item => item.name === val.name);
   if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1);
  
   }
   else {
    const currFav = {
      image: val.img_url,
      name: val.name,
      price: val.price,
      descriptions: val.description,
      fabric: val.fabric,
      discount: val.discount,
      brand: val.brand,
      color: val.color,
      category: val.category,
      gender: val.gender,
      discription: val.discription,
      strikedOffPrice:Math.round(val.price + val.price*(val.discount/100)), 
      quantity: 1, // Initialize quantity to 1 for new items
    };
    
    items.push(currFav);
    a.textContent="Added!";
    bagtot();
  }
         
  
     localStorage.setItem("cartData", JSON.stringify(items));
  }
  bagtot();
  function bagtot(){
  localStorage.setItem("cartTotalBag", JSON.stringify(items.length));
  var bagTotal = JSON.parse(localStorage.getItem("cartTotalBag"));
  if (bagTotal > 0) {
    var cartCurrentItemShow = document.getElementById("cartCurrentItemShow");
    cartCurrentItemShow.setAttribute("class", "desktop-badge desktop-melon");
    document.getElementById("cartCurrentItemShow").innerText = bagTotal;

    localStorage.setItem("cartTotalBag", JSON.stringify(bagTotal));
  }
}