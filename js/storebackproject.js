let shop = document.getElementById('shop');

let shopItemsData = [{
    id:"RisingSun",
    name:"Rising sun",
    price: 35,
    desc:"Set of 4 glasses",
    img: "images/8_8.jpg"

},
{
    id:"Iceberg",
    name:"Iceberg",
    price: 35,
    desc:"Set of 4 glasses",
    img: "images/iceberg1500_.jpg"
},
{
    id:"Shards",
    name:"Shards",
    price: 35,
    desc:"Set of 4 glasses",
    img: "images/shards_1.jpg"
},
{
    id:"Stripes",
    name:"Stripes",
    price: 25,
    desc:"Set of 4 glasses",
    img: "images/lefteris.jpg"
},
{
    id:"Classic",
    name:"Classic",
    price: 25,
    desc:"Set of 4 glasses",
    img: "images/adam2.jpg"
},
{
    id:"Spiral",
    name:"Spiral",
    price: 35,
    desc:"Set of 4 glasses",
    img: "images/spiral_2.jpg"
},
{
    id:"ice",
    name:"Ice",
    price: 15,
    desc:"ice x6",
    img: "images/ice_6_2.png"}
];

let basket = JSON.parse(localStorage.getItem("aca")) || [];

let generateShop = () => {
    return (shop.innerHTML  = shopItemsData
        .map((a) => { 
        let { id, name, price, img} = a;
        let search = basket.find((a)=>a.id === id) || []
        return `
        <tbody id="shop">
                        <tr id=product-id-${id}>
                          <td class="product-thumbnail">
                            <img src=${img} alt="" class="img-fluid">
                          </td>
                          <td class="product-name">
                            <h2 class="h5 text-black">${name}</h2>
                          </td>
                          <td class="price-item" id="tf">${price}</td>
                          <td>
                            <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
                              <div class="input-group-prepend">
                                <button onclick="decrement(${id})" class="btn btn-outline-black decrease" type="button">&minus;</button>
                              </div>
                              <i id =${id} class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                              ${search.item === undefined ? 0 : search.item}
                              </i>
                              <div class="input-group-append">
                                <button onclick="increment(${id})" class="btn btn-outline-black increase" type="button">&plus;</button>
                              </div>
                            </div>
        
                          </td>
                          <td>${a.price}</td>
                          <td><a href="#" class="btn btn-black btn-sm product-remove">X</a></td>
                        </tr>
                      </tbody>`
    }));
};
generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search  = basket.find((a)=> a.id === selectedItem.id);
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    } else {
        search.item +=1;
    }
    
    //console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("aca", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search  = basket.find((a)=> a.id === selectedItem.id);
    
    if(search === undefined) return
    
    else if(search.item === 0) return;
    
    else {
        search.item -=1;
    }
    //console.log(basket);
    update(selectedItem.id);
    basket = basket.filter((g)=>g.item !==0);
    
    localStorage.setItem("aca", JSON.stringify(basket));
};


let update = (id) => {
    let search = basket.find((a)=> a.id === id);
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    //calculation()
};
let calculation = () => {
   let cartIcon = document.getElementById();
   cartIcon.innerHTML =basket.map((x)=> x.item).reduce((x,y)=> x + y, 0); 
}
calculation();