const container=document.querySelector(".product_container");
const product_card=document.querySelector(".product_card");
let womensData=[
    { name: 'Ethnic Motifs Printed Kurta with Palazzos & With Dupatta',
      img_url:"http://assets.myntassets.com/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
      brand:"Khushal K",
      price:5099,
      discount:10,
      color:"Black",
      fabric:"'Viscose Rayon",
      category:"Set",
      gender:"women",
      discription:"Black printed Kurta with Palazzos with dupatta",
},
{ name: 'Kurta with Palazzos & Floral Print Dupatta',
img_url:"http://assets.myntassets.com/assets/images/16524740/2021/12/29/17ab2ac8-2e60-422d-9d20-2527415932361640754214931-STRAPPY-SET-IN-ORANGE-WITH-ORGANZA-DUPATTA-5961640754214349-2.jpg",
brand:"InWeave",
price:5899,
discount:20,
color:"Orange",
fabric:"Viscose Rayon",
category:"set",
gender:"women"
},
{ 
name:'Golden Printed Gotta Patti Kurta with Trousers',
img_url:"http://assets.myntassets.com/assets/images/14989470/2022/1/18/aaee9424-201b-4759-ab9c-e72aa3f05a651642490827775-Sangria-Women-Green-Printed-High-Slit-Kurta-with-Trousers-11-1.jpg",
brand:"Sangria",
price:2999,
discount:30,
color:"Green",
fabric:'Polyester',
category:"set",
gender:"women"
},
{ name: 'Women Blue Ethnic Motifs Printed Straight Kurta',
img_url:"http://assets.myntassets.com/assets/images/18998686/2022/7/7/0c291a1d-6017-4b21-a9a4-cf24f6e5fbf21657175622515KALINIWomenBlueEthnicMotifsPrintedFlaredSleevesThreadWorkKur1.jpg",
brand:"Kalini",
price:1999,
discount:14,
color:"Blue",
fabric:"cotton",
category:"Kurta",
gender:"women"
},
{ name: 'Black & Silver Ethnic Motifs Printed  Kurta',
img_url:"http://assets.myntassets.com/assets/images/16927170/2022/3/30/50055617-1a56-4f65-b900-bebda2855cdc1648644211296-HERENOW-Women-Black--Silver-Ethnic-Motifs-Printed-Pure-Cotto-1.jpg",
brand:"HERE&NOW",
price:1899,
discount:25,
color:"Black",
fabric:"Cotton",
category:"Kurta",
gender:"women"
},
{ name: 'Women Magenta Ethnic Motifs',
img_url:"http://assets.myntassets.com/assets/images/17171720/2022/2/16/45d4f27a-4452-4e7f-ab39-09b8a2a0b34a1645005871864KALINIWineKurtaSetwithEmbroidery2.jpg",
brand:"KALINI",
price:4999,
discount:23,
color:"Magenta",
fabric:"cotton",
category:"set",
gender:"female"
},
{ name: 'The Vanca Women Olive Green Hooded Sweatshirt',
img_url:"http://assets.myntassets.com/assets/images/16225448/2021/11/24/3e3903e4-b70f-42ab-af85-09e7dab27f921637754966487TheVancaWomenOliveGreenHoodedSweatshirt1.jpg",
brand:"Vanca",
price:2099,
discount:30,
color:"Olive",
fabric:"Polyester",
category:"Sweat-Shirt",
gender:"Women"
},
{ name: 'Vero Moda Women Blue Sweatshirt',
img_url:"http://assets.myntassets.com/assets/images/16379664/2021/12/6/eb52fcd9-2ad1-499c-bce0-c0f96d6546c11638781413457VeroModaWomenBlueSweatshirt1.jpg",
brand:"Vero Moda",
price:2299,
discount:15,
color:"Blue",
fabric:"cotton",
category:"Sweat-Shirt",
gender:"Women"
},
{ name: 'Aeropostale Women Blue Sweatshirt',
img_url:"http://assets.myntassets.com/assets/images/17980842/2022/4/22/4e4deaa6-7023-4496-b81a-423165c46ec91650594287351AeropostaleWomenBlueSweatshirt1.jpg",		

brand:"Aeropostale",
price:2499,
discount:70,
color:"Blue",
fabric:"cotton",
category:"Sweat-shirt",
fabric:"cotton",

gender:"Women"
},
{ 
name: 'Vero Moda Women Yellow Printed Sweatshirt',
img_url:"http://assets.myntassets.com/assets/images/18536776/2022/5/31/8e22451c-7656-44a7-b108-9a03e05c1af51654005833933Sweatshirts1.jpg",		
brand:"Vero Moda",
price:1799,
discount:40,
color:"Yellow",
fabric:"70% cotton 30% cotton",
category:"Sweat-shirt",
gender:"Women"
},
{ 
    name: ' Women  & Pink Printed Basic Jumpsuit',
    img_url:"http://assets.myntassets.com/assets/images/productimage/2020/10/15/0ed2afd4-a106-4972-9499-111c95fcc15c1602713909748-1.jpg",	
    brand:"KASSUALLY",
    price:2199,
    discount:35,
    color:"Black",
    fabric:"Polyester",
    category:"Jumpsuit",
    gender:"Women"
    },
    { 
        name:'Magenta & White Floral Printed Basic Jumpsuit',
        img_url:"http://assets.myntassets.com/assets/images/13179468/2021/2/2/f949215b-1bd6-4d8b-88ef-8b9ec48036f41612266875758-DressBerry-Women-Magenta--White-Printed-Capri-Jumpsuit-79116-1.jpg",	
        brand:"DressBerry",
        price:3299,
        discount:20,
        color:"Magenta",
        fabric:"Polyester",
        category:"Jumpsuit",
        gender:"Women"
        },
]
let data=[...womensData]
womensData.forEach((val)=>{
    const card=document.createElement("div");
    const image=document.createElement("img");
    const brand=document.createElement("p");
    const name=document.createElement("p");
    const priceDiv=document.createElement("div");
    const price=document.createElement("span");
    const strikePrice=document.createElement("span");
    const discount=document.createElement("span");
    const AddToCart=document.createElement("button");
    image.addEventListener("click",function(){
      setDetails(val);
    })
    name.addEventListener("click",function(){
      setDetails(val);
    })

    const btnDiv=document.createElement("div");
    btnDiv.classList.add("hiddenDiv");
    image.classList.add("prod_img");

    AddToCart.textContent="Add To Cart";
    AddToCart.classList.add("btns");
    AddToCart.addEventListener("click",function(){
      addingToCart(val,this);
      displayCartTotal();

    })
    btnDiv.append(AddToCart);
    card.setAttribute("class", "product_card");
    image.setAttribute("src",val.img_url);
    name.textContent=val.name;
    price.textContent=`₹ ${val.price}`;
    brand.textContent=val.brand;
    strikePrice.textContent=`₹ ${Math.round(val.price + val.price*(val.discount/100))}`;
    discount.textContent=`(${val.discount} % OFF)`;
    
    priceDiv.append(price,strikePrice,discount);
    card.append(image,btnDiv,brand,name,priceDiv);

    container.append(card);
   
    filterColor(val,container,card);
    filterCollar(val,container,card);
    filterBrand(val,container,card);
    filterCategory(val,container,card);
    console.log(val.discount)

});
function ckChange(ckType) {
    var checkboxes = document.querySelectorAll('[name="color"]');
    
    checkboxes.forEach(function (checkbox) {
      if (!ckType.checked) {
        checkbox.disabled = false;
      } else {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        } else {
          checkbox.disabled = false;
        }
      }
     }
   
)};
function ckCollar(ckType) {
let checkboxes = document.querySelectorAll('[name="collar"]');
checkboxes.forEach(function (checkbox) {
if (!ckType.checked) {
checkbox.disabled = false;
      } else {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        } else {
          checkbox.disabled = false;
        }
      }
     }
   
)};
function ckBrand(ckType) {
let checkboxes = document.querySelectorAll('[name="brand"]');
checkboxes.forEach(function (checkbox) {
if (!ckType.checked) {
checkbox.disabled = false;
          } else {
            if (!checkbox.checked) {
              checkbox.disabled = true;
            } else {
              checkbox.disabled = false;
            }
          }
         }
       
)};  
function ckCategories(ckType) {
let checkboxes = document.querySelectorAll('[name="categories"]');
checkboxes.forEach(function (checkbox) {
if (!ckType.checked) {
checkbox.disabled = false;
              } else {
                if (!checkbox.checked) {
                  checkbox.disabled = true;
                } else {
                  checkbox.disabled = false;
                }
              }
             }
           
)};   
function filterColor(val,container,card){
  checkBoxClr=document.querySelectorAll(".checkbox"); 
  let selectedColor="all";       
  checkBoxClr.forEach(checkbox => {
    checkbox.addEventListener('change', function(){
    selectedColor=checkbox.value;
       if(checkbox.checked && selectedColor.toLowerCase()==val.color.toLowerCase()){
          container.append(card);
       }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
        }
        else {
          container.removeChild(card);
        }

        });

        });
};
function filterCollar(val,container,card){
    const checkBoxClr=document.querySelectorAll(".collarChk"); 
        let selectedColor="all";     
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;
        if(checkbox.checked && selectedColor.toLowerCase()==val.neck.toLowerCase()){
          container.append(card);
        

        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
        }
        else {
            container.removeChild(card);
        }
        });

        });
};
function filterBrand(val,container,card){
    const checkBoxClr=document.querySelectorAll(".brandChk"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;
        if(checkbox.checked && selectedColor.toLowerCase()==val.brand.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
        }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
};
function filterCategory(val,container,card){
    const checkBoxClr=document.querySelectorAll(".categoriesChk"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;
        if(checkbox.checked && selectedColor.toLowerCase()==val.category.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
       }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
};
function sortByBetterDiscount(a, b) {
    return b.discount - a.discount;
  }
function sortByHighToLow(a, b) {
    return b.price - a.price;
  }
function sortByLowToHigh(a, b) {
    return a.price - b.price;
  }

const sortDropdown = document.getElementById('sort');
sortDropdown.addEventListener('change', function displaySortedProducts() {
    const container=document.querySelector(".product_container");

    const sort = document.getElementById('sort');
    const sortValue = sort.value;
  
    if (sortValue.toLowerCase() === 'discount') {
     womensData.sort(sortByBetterDiscount);
    } else if (sortValue.toLowerCase() === 'high'){
      womensData.sort(sortByHighToLow);
    }else if(sortValue.toLowerCase() === 'low'){
        womensData.sort(sortByLowToHigh);
    }
    else{
       womensData=[...data]; 
    }
    container.innerHTML="";
    womensData.forEach((val)=>{
      const card=document.createElement("div");
      const image=document.createElement("img");
      const brand=document.createElement("p");
      const name=document.createElement("p");
      const priceDiv=document.createElement("div");
      const price=document.createElement("span");
      const strikePrice=document.createElement("span");
      const discount=document.createElement("span");
      const AddToCart=document.createElement("button");
  
      const btnDiv=document.createElement("div");
      btnDiv.classList.add("hiddenDiv");
      image.classList.add("prod_img");
  
      AddToCart.textContent="Add To Cart";
      AddToCart.classList.add("btns");
      btnDiv.append(AddToCart);
      card.setAttribute("class", "product_card");
      image.setAttribute("src",val.img_url);
      name.textContent=val.name;
      price.textContent=`₹ ${val.price}`;
      brand.textContent=val.brand;
      strikePrice.textContent=`₹ ${Math.round(val.price + val.price*(val.discount/100))}`;
      discount.textContent=`(${val.discount} % OFF)`;
      
      priceDiv.append(price,strikePrice,discount);
      card.append(image,btnDiv,brand,name,priceDiv);
  
      container.append(card);
     
      filterColor(val,container,card);
      filterCollar(val,container,card);
      filterBrand(val,container,card);
      filterCategory(val,container,card);

  });
});

const menu =document.querySelector(".ham");

menu.addEventListener("click",function() {
  const functionality=document.querySelector(".functionality");
  functionality.classList.toggle("hamFilter");
})
let items = JSON.parse(localStorage.getItem("cartData")) || [];
function addingToCart(val,a){
 const existingItem = items.find(item => item.name === val.name);
 if (existingItem) {
  existingItem.quantity = (existingItem.quantity || 1) + 1;
  
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
    quantity: 1
  };
  
  items.push(currFav);

}
        a.classList.add("added");
   localStorage.setItem("cartData", JSON.stringify(items));
}
const count=document.getElementById('count_of_items');
count.textContent=`${womensData.length} items`;

function setDetails(a){
localStorage.setItem("details",JSON.stringify(a));
window.location.assign("./dummyDetails.html")
}
displayCartTotal();
function displayCartTotal() {
  localStorage.setItem("cartTotalBag", JSON.stringify(items.length));
  var addressTotalObj = JSON.parse(localStorage.getItem("cartTotalBag"));
  var cartCurrentItemShow = document.getElementById("cartCurrentItemShow");
  if (addressTotalObj > 0) {
    cartCurrentItemShow.setAttribute("class", "desktop-badge desktop-melon");
    document.getElementById("cartCurrentItemShow").innerText = addressTotalObj;

    localStorage.setItem("cartTotalBag", JSON.stringify(addressTotalObj));
  }
}
  