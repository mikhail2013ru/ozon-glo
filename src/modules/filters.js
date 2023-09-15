export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value 
    })
}

export const priceFilter = (goods, valueMin, valueMax) => {
    return goods.filter((goodsItem) => {
        // if (valueMin) {
        //     return goodsItem.price >= valueMin
        // }

        // if (valueMax) {
        //     return goodsItem.price <= valueMax
        // }

        // if (valueMin && valueMax) {
        //     return goodsItem.price >= valueMin && goodsItem.price <= valueMax
        // }
    })
}