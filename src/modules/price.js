import renderGoods from "./renderGoods"
import getData from "./getData"
import { priceFilter } from "./filters"

const price = () => {
    const filterPriceMin = document.getElementById('min')
    const filterPriceMax = document.getElementById('max')
    
    filterPriceMin.addEventListener('input', (e) => {
        const valueMin = e.target.value

        // console.log(value);
        
        getData().then((data) => {
            renderGoods(priceFilter(data, valueMin))
        })
    })

    filterPriceMax.addEventListener('input', (e) => {
        const valueMax = e.target.value

        // console.log(value);
        
        getData().then((data) => {
            renderGoods(priceFilter(data, valueMax))
        })
    })
}

export default price