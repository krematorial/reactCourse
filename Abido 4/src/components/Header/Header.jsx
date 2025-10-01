import './Header.css'

export const Header = () => {
    return (
        <header class="header">
            <div class="container">
                <div class="header-box">
                    <div class="header-logo">
                        <img src="/images/logo.svg" alt="logo" />
                        <span>Abito</span>
                    </div>
                    <div class="header-controls">
                        <button class="btn btn-outline">Вход и регистрация</button>
                        <button class="btn btn-primary">Подать объявление</button>
                    </div>

                    <div class="header-controls--mobile">
                        <img src="/images/burger.svg" alt="burger" />
                    </div>
                </div>
            </div>
        </header>
    )
}


