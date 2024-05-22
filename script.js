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
    updateCartModal();
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


 const addToCart = (name, price)=>{
    const existingItem = cart.find(item => item.name === name)

    if (existingItem) {
        //Se o item já existe , aumena apenas a quantidade + 1
        existingItem.quantity += 1;

    }else{

        cart.push({
            name,
            price,
            quantity: 1,
        })
    }

    updateCartModal()
    
 }

 //Atualiza o carrinho
 function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0;

          cart.forEach(item => {
            const cartItemElement = document.createElement("div")
            cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")
            
            
            cartItemElement.innerHTML = `
                <div class="flex items-center justify-between">
                
                    <div>
                        <p class="font-medium">${item.name}</p>
                        <p>Qtd: ${item.quantity}</p>
                        <p class="font-medium mt-2 ">R$ ${item.price.toFixed(2)}</p>
                    </div>
                
                

                    <button class="remove-from-cart-btn" data-name="${item.name}">
                        Remover
                    </button>
                    
                </div>    
                
            `
            total += item.price * item.quantity;

            cartItemsContainer.appendChild(cartItemElement)
    
        }) 
    
        cartTotal.textContent = total.toLocaleString("pt-BR", {
            style: "currency",
            currency:"BRL",
        })

        cartCounter.innerHTML = cart.length;
      
    }

    //Função para remover o item do carrinho

cartItemsContainer.addEventListener("click", event=> {
    if(event.target.classList.contains("remove-from-cart-btn")){
        const name = event.target.getAttribute("data-name")

        console.log(name)
    }
})