const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35
    }
  ],
  cart: []
};

function removeFromCart(itemName){
  let element = state.cart.find( e => e.name === itemName)
  element.amount += -1
  if (element.amount === 0){
    state.cart.splice(state.cart.indexOf(element), 1)
  }
  renderCart()
}
function addToCart(itemName){

  let element = state.cart.find( e => e.name === itemName)
  if (element !== undefined){
    if (element.name === itemName){
      element.amount += 1
    }
  }else{
    state.items.forEach((element) => {
      if (element.name === itemName){
        let newElement = element
        newElement.amount = 1
        state.cart.push(element)
      }
    })
  }
  renderCart()
}
function renderCart(){
  var target = document.getElementById("shoppingCart")
  target.innerHTML = ''
  state.cart.forEach((element) => {
    target.innerHTML +=`<li>
      <img
        class="cart--item-icon"
        src="assets/icons/${element.id}.svg"
        alt=${element.name}
      />
      <p>${element.name}</p>
      <button onclick="removeFromCart('${element.name}')" class="quantity-btn remove-btn center">-</button>
      <span class="quantity-text center">${element.amount}</span>
      <button onclick="addToCart('${element.name}')"class="quantity-btn add-btn center">+</button>
    </li>`
  })
  getTotalCost()
}
function renderStoreItems(){
  var target = document.getElementById("shopItems")
  target.innerHTML = ''
  state.items.forEach((element) => {
    target.innerHTML += `<li>
          <div class="store--item-icon">
            <img src="assets/icons/${element.id}.svg" alt=${element.name} />
          </div>
          <button onclick="addToCart('${element.name}')">Add to cart</button>
        </li>`
  })
}
function getTotalCost(){
  var target = document.getElementById("cost")
    target.innerHTML =''
  let sum = 0
  state.cart.forEach((element) => {
    sum += element.price * element.amount
  })
  target.innerHTML += `<span id="cost" class="total-number">${sum.toFixed(2)}£</span>`
}
renderStoreItems()