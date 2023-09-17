import renderGoods from "./renderGoods"
import getData from "./getData"
import { funcFilter } from "./filters"
import { debounce } from "./helpers"

const price = () => {
    const priceMin = document.getElementById('min')
    const priceMax = document.getElementById('max')
    const check = document.getElementById('discount-checkbox')
    const checkMark = document.querySelector('.filter-check_checkmark')
    const searchInput = document.querySelector('.search-wrapper_input')
    
    const debounceFunc = debounce((min = '', max = '', checkValue = false, searchValue = '') => {
        getData().then((data) => {
            renderGoods(funcFilter(data, min, max, checkValue, searchValue))
        })
    })
    
    priceMin.addEventListener('input', () => {
        debounceFunc(priceMin.value, priceMax.value, check.value, searchInput.value)
    })

    priceMax.addEventListener('input', () => {
        debounceFunc(priceMin.value, priceMax.value, check.checked, searchInput.value)
    })

    check.addEventListener('input', () => {
        if (check.checked) {
            checkMark.classList.add('checked')
        } else {
            checkMark.classList.remove('checked')
        }

        debounceFunc(priceMin.value, priceMax.value, check.checked, searchInput.value)
    })

    return { debounceFunc, priceMin, priceMax, check }
}

export const { debounceFunc, priceMin, priceMax, check } = price()
export default price