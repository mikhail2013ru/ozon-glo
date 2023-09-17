import { debounceFunc, priceMin, priceMax, check } from './price'

const search = () => {
    const searchInput = document.querySelector('.search-wrapper_input')
    
    searchInput.addEventListener('input', () => {
        debounceFunc(priceMin.value, priceMax.value, check.value, searchInput.value)
    })
}

export default search