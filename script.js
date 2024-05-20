const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("card-items")
const cartTotal = document.getElementById("cart-total")
const checkOut = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("cart-count")
const addressInput =document.getElementById("address")
const addressWarn =document.getElementById("address-warn")

let cart = [];

// ABRIR MODAL DO CARRINHO
cartBtn.addEventListener("click", ()=>{
cartModal.style.display = "flex"
})

// FECHAR O MODAL CLICANDO FORA
cartModal.addEventListener("click", (event)=>{
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
})

closeModalBtn.addEventListener("click", ()=>{
    cartModal.style.display = "none"
})

menu.addEventListener("click", (event)=>{


let parentButton = event.target.closest(".add-to-cart-btn")
    if(parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name, price)
    }
})

//Função para adicionar no carrinho


 let addToCart = (name, price)=>{
    
    cart.push({
        name,
        price,
        quantity: 1
    })
 }