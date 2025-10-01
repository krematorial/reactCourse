import './Card.css'

export const Card = ({title, price, address, date, image}) => {
    return (

        <a href="product.html" class="content-cards_item">
            <div class="content-cards_item--img">
                <img src={image} alt="product" />
            </div>

            <h5 class="content-cards_item--title">
                {title}
            </h5>

            <strong class="content-cards_item--price">
                {price}
            </strong>
            <p class="content-cards_item--rating">
                {address}
                <p>{date}</p>
            </p>
        </a>
    )
}

