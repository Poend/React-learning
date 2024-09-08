import  { Routes, Route, Link } from 'react-router-dom'
import { Payment } from "./Payment"

export const Header = () => {
  return (
    <>
    <header className="header center">
      <div className="header__content container">
        <a href="#">
          <img className="header__logo" src="/public/img/logo.svg" alt="logo" />
        </a>
        <nav className="header__nav">
          <a href="#" className="header__navlink">
            Главная
          </a>
          <a href="index.html" className="header__navlink">
            Каталог
          </a>
          <a href="about.html" className="header__navlink">
            О нас
          </a>
          <a href="#" className="header__navlink">
            Доставка
          </a>
          <a href="payment.html" className="header__navlink">
            Оплата
          </a>
          <a href="#" className="header__navlink">
            Контакты
          </a>
        </nav>
        <div className="header__personal">
          <a href="tel:+79780413141" className="header__mobile">
            +7(978) 041-31-41
          </a>
          <div
            id="personal-container"
            className="header__personal-container"
          ></div>
          <div className="header__basket-container">
            <a href="basket.html">
              <svg
                className="header__personalIcon"
                width="21.875000"
                height="25.000000"
                viewBox="0 0 21.875 25"
                fill="CurrentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <path
                  id="Vector"
                  d="M17.18 6.81L17.18 6.25C17.18 2.8 14.38 0 10.93 0C7.49 0 4.68 2.8 4.68 6.25L4.68 7.81L0 7.81L0 21.09C0 23.25 1.74 25 3.9 25L17.96 25C20.12 25 21.87 23.25 21.87 21.09L21.87 7.81L17.18 7.81L17.18 6.81ZM20.87 8.81L16.21 8.81Q16.87 8.92 17.25 9.3Q17.79 9.85 17.79 10.93Q17.79 12.02 17.25 12.56Q16.71 13.1 15.62 13.1Q14.53 13.1 13.99 12.56Q13.45 12.02 13.45 10.93Q13.45 9.85 13.99 9.3Q14.37 8.92 15.03 8.81L6.84 8.81Q7.49 8.92 7.87 9.3Q8.42 9.85 8.42 10.93Q8.42 12.02 7.87 12.56Q7.33 13.1 6.25 13.1Q5.16 13.1 4.62 12.56Q4.07 12.02 4.07 10.93Q4.07 9.85 4.62 9.3Q5 8.92 5.65 8.81L1 8.81L1 21.09Q1 22.54 1.72 23.27Q2.45 24 3.9 24L17.96 24Q19.42 24 20.14 23.27Q20.87 22.54 20.87 21.09L20.87 8.81ZM5.68 8.8L5.68 6.25Q5.68 5.17 6.06 4.25Q6.44 3.31 7.22 2.53Q8 1.76 8.94 1.37Q9.86 1 10.93 1Q12.01 1 12.92 1.37Q13.86 1.76 14.64 2.53Q15.42 3.31 15.81 4.25Q16.18 5.17 16.18 6.25L16.18 8.8Q15.92 8.76 15.62 8.76Q15.32 8.76 15.06 8.8L15.06 6.25Q15.06 5.4 14.76 4.67Q14.46 3.94 13.85 3.33Q13.24 2.72 12.5 2.42Q11.78 2.12 10.93 2.12Q10.08 2.12 9.36 2.42Q8.63 2.72 8.02 3.33Q7.41 3.94 7.11 4.67Q6.81 5.4 6.81 6.25L6.81 8.8Q6.55 8.76 6.25 8.76Q5.94 8.76 5.68 8.8ZM9.34 4.65Q9.87 4.12 10.93 4.12Q12 4.12 12.53 4.65Q13.06 5.18 13.06 6.25L13.06 6.81L8.81 6.81L8.81 6.25Q8.81 5.18 9.34 4.65ZM6.12 11.06Q6.07 11.02 6.07 10.93Q6.07 10.85 6.12 10.8Q6.16 10.76 6.25 10.76Q6.33 10.76 6.37 10.8Q6.42 10.85 6.42 10.93Q6.42 11.02 6.37 11.06Q6.33 11.1 6.25 11.1Q6.16 11.1 6.12 11.06ZM15.49 11.06Q15.45 11.02 15.45 10.93Q15.45 10.85 15.49 10.8Q15.53 10.76 15.62 10.76Q15.71 10.76 15.75 10.8Q15.79 10.85 15.79 10.93Q15.79 11.02 15.75 11.06Q15.71 11.1 15.62 11.1Q15.53 11.1 15.49 11.06Z"
                  fill="CurrentColor"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </svg>
            </a>
            <div id="basketCounterContainer" className="header__counter">
              <p id="basketCounter" className="header__count"></p>
            </div>
          </div>

          <div className="menu">
            <input
              type="checkbox"
              id="burger-checkbox"
              className="burger-checkbox"
            />
            <label for="burger-checkbox" className="burger"></label>
            <ul className="menu-list">
              <li>
                <a
                  href="tel:+79780413141"
                  className="menu-item menu-item_mobile"
                >
                  +7(978) 041-31-41
                </a>
              </li>
              <li>
                <a href="#" className="menu-item">
                  Главная
                </a>
              </li>
              <li></li>
              <li>
                <a href="#" className="menu-item">
                  О нас
                </a>
              </li>
              <li></li>
              <li>
                <a href="#" className="menu-item">
                  Каталог
                </a>
              </li>
              <li></li>
              <li>
                <a href="#" className="menu-item">
                  Контакты
                </a>
              </li>
              <li></li>
              <li>
                <a href="#" className="menu-item">
                  Доставка
                </a>
              </li>
              <li></li>
              <li>
                <a href="/payment" className="menu-item">
                  Оплата
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>


    <Routes> 

        <Route exact path="/" component={ Payment }/>

    </Routes>
    </>
  );
};
