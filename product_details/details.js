

////////////////////////////////////////////////////////////////////////
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
//     const qty=document.getElementById("qty");
//  let qty_value=1;
//     qty.addEventListener("change",function(){
//         qty_value=parseInt(qty.value);
//     })

    AddToCart.addEventListener("click",function(){
        addingToCart(val,this);
    
      })
 
    const wishBtn=document.querySelector("#wish");
    wishBtn.addEventListener("click",function(){
        wishBtn.classList.toggle("wish");
        console.log("hey")
    })
});

function addingToCart(val,a){
    // const AddToCart=document.querySelector("button");
   let items = JSON.parse(localStorage.getItem("cartData")) || [];
   const existingItem = items.find(item => item.name === val.name);
   if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 1);
  
    // console.log(item.qty+b);
   }
   else {
    // If the product is not in the cart, add it as a new entry with quantity 1
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
  
  }
         
  
     localStorage.setItem("cartData", JSON.stringify(items));
     console.log("items")
  }