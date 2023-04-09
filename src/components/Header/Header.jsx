import { NavLink, useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./style.scss";
import { useEffect, useState } from "react";
import STORAGE_KEY from "../../utils/constants";

const Header = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (cart) {
      setCart(cart);
    }
  }, []);
  const totalCount = cart.reduce(
    (totalAll, product) => totalAll + +product.quantity,
    0
  );
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  return (
    <>
      <header className="container header">
        <nav>
          <div id="burgerMenuToggle">
            <input type="checkbox" />

            <span></span>
            <span></span>
            <span></span>

            <ul id="menu">
              <Link to="/">Home</Link>
              <Link to="#about">About</Link>
              <Link to="#gallery">Pages</Link>
              <Link to="#shop">Shop</Link>
              <Link to="/#projects">Projects</Link>
              <Link to="/#news">News</Link>
            </ul>
          </div>
        </nav>
        <div className="header__wrapper">
          <div className="logo">
            <NavLink className="header__navLink" to="/">
              <img src="images/products/logo.png" alt="logo" />
              <p>Organic</p>
            </NavLink>
          </div>

          <nav className="header__big-menu">
            <Link to="/#hero">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#shop">Shop</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#news">News</Link>
          </nav>

          <div className="header__controls">
            <div className="header__search">
              <input type="text" />
              <img src="images/products/search_icon.png" alt="search" />
            </div>
            <div className="header__cart">
              <button onClick={navigateToCart}>
                <img src="images/products/cart_icon.png" alt="cart" />
                <p>
                  Cart(<span id="cart">{totalCount}</span>)
                </p>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
