import Notify from 'simple-notify'

const getData = (str) => {
    return fetch(
        `https://ozone-glo-70f5c-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}`: ''}`
        )
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Ошибка запроса')
            }
        })
        .catch(error => {
            new Notify({
                status: 'error',
                title: 'Ошибка!',
                text: error.message,
                effect: 'slide',
                type: 3,
                autoclose: true,
            })

        })
}

export default getData