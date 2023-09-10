const getData = () => {
    return fetch('https://ozone-glo-70f5c-default-rtdb.firebaseio.com/goods.json')
    .then((response) => {
        return response.json()
    })
}

export default getData