import { check } from "./price"

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value 
    })
}

export const funcFilter = (goods, minValue, maxValue, checkValue, searchValue) => {
    return goods.filter((goodsItem) => {
        const isMin = minValue.trim() ? goodsItem.price >= parseInt(minValue) : true
        const isMax = maxValue.trim() ? goodsItem.price <= parseInt(maxValue) : true
        const isSale = checkValue ? goodsItem.sale : true
        
        if (check.checked) {
            return isMin && isMax && isSale && goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
        } else {
            return isMin && isMax && goodsItem.title.toLowerCase().includes(searchValue.toLowerCase())
        }
    })
}