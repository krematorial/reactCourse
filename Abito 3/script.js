const cardWrapper = document.querySelector('.content-cards')
const searchInput = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')

const cardArray = [
    {
        id: 0,
        title: 'Пвх материал 2й сорт',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        link: '/product.html',
        image: '/images/product.png'
    },
    {
        id: 0,
        title: 'Пвх материал 2й сорт',
        price: '200 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        link: '/product.html',
        image: '/images/product.png'
    },
    {
        id: 0,
        title: 'Пвх материал 2й сорт',
        price: '300 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        link: '/product.html',
        image: '/images/product.png'
    },
    {
        id: 0,
        title: 'Пвх материал 2й сорт',
        price: '866 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        link: '/product.html',
        image: '/images/product.png'
    },
    {
        id: 0,
        title: 'Пвх материал 2й сорт',
        price: '179 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        link: '/product.html',
        image: '/images/product.png'
    },
    {
        id: 0,
        title: 'Коробка',
        price: '189 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        link: '/product.html',
        image: '/images/product.png'
    }
]

const render = (array) => {
    cardWrapper.innerHTML = ''

    array.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `<a href="${item.link}" class="content-cards_item">
                                <div class="content-cards_item--img">
                                    <img src="${item.image}" alt="${item.title}">
                                </div>

                                <h5 class="content-cards_item--title">
                                ${item.title}
                                </h5>

                                <strong class="content-cards_item--description">
                                    ${item.price}
                                </strong>


                                <div class="content-cards_item--rating">
                                    <span>${item.address}</span>
                                    <span>${item.date}</span>
                                </div>
                            </a>
                            `)
    })
}

searchButton.addEventListener('click', () => {
    render(cardArray.filter((item) => item.title.includes(searchInput.value)))
})

render(cardArray)
