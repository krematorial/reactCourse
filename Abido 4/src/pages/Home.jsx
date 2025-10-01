import { Header } from "../components/Header/Header"
import { Card } from "../components/Card/Card"
import { cardArray } from "../constants"


export const Home = () => {
    return (
        <>

            <Header />
            <main>
                <section class="search">
                    <div class="container">
                        <div class="search-box">
                            <input id="search-input" type="text" placeholder="Поиск по объявлениям" />
                            <button id="search-button">
                                <img src="/images/search.svg" alt="search" />
                                <span>Найти</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="container">
                        <div class="content-box">
                            <div class="content-main">
                                <h2 class="content-main_title">
                                    Search results
                                </h2>
                                <div class="content-cards">
                                    {
                                        cardArray.map(card => (
                                            <Card
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                link={card.link}
                                                image={card.image}
                                            />
                                        ))
                                    }
                                </div>

                            </div>
                            <div class="content-sidebar">
                                <div class="content-sidebar_info">
                                    <h4 class="content-sidebar--title">
                                        Сервисы и услуги
                                    </h4>

                                    <div class="content-sidebar_info_wrapper">
                                        <div class="content-sidebar_info_item">
                                            <img src="/images/Truck.svg" alt="logo" />
                                            <h5>Доставка</h5>
                                            <p>Проверка при получении и возможность бесплатно вернуть товар</p>
                                        </div>
                                        <div class="content-sidebar_info_item">
                                            <img src="/images/Sedan.svg" alt="logo" />
                                            <h5>Автотека</h5>
                                            <p>Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах</p>
                                        </div>
                                        <div class="content-sidebar_info_item">
                                            <img src="/images/House.svg" alt="logo" />
                                            <h5>Онлайн-бронирование жилья</h5>
                                            <p>Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="content-sidebar_footer">
                                    <p>© ООО «Абито», 2011-2021</p>
                                    <a href="#!">Политика конфиденциальности</a>
                                    <a href="#!">Обработка данных</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}