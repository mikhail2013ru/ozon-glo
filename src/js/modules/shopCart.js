const shopCart = () => {
    const cartCounter = document.querySelector('.counter')
    const cart = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : []
    
    if (cart.length !== 0) {
        cartCounter.textContent = cart.length
    } else {
        cartCounter.textContent = 0
    }
}

export default shopCart