import "./style.scss";
import "./../Count/style.scss";
import "./../GalleryItem/style.scss";
import "./../Button/style.scss";
import "./../ButtonClose/style.scss";
import "./../Count/style.scss";
import "./../ModalOrder/style.scss";
import STORAGE_KEY from "../../utils/constants";
import CartItem from "../CartItem/CartItem";
import { useEffect, useState } from "react";
import Order from "../Order/Order";
import { postService } from "../../ServiceApi/service";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [active, setActive] = useState(false);
  const [setDisabled] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const navigateToThankPage = () => {
    navigate("/thanks");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "address":
        setAddress(value);
        break;

      case "message":
        setMessage(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postService(cart, name, email, address, number, message);
    reset();
    localStorage.clear();
    navigateToThankPage();
  };

  const reset = () => {
    setName("");
    setEmail("");
    setAddress("");
    setNumber("");
    setMessage("");
  };

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (cart) {
      setCart(cart);
    }
  }, []);
  const cartTotalAll = cart.reduce(
    (totalAll, product) =>
      totalAll + product.product.new_price * product.quantity,
    0
  );

  const discount = cart.reduce(
    (totalAll, product) =>
      totalAll +
      (product.product.old_price - product.product.new_price) *
        product.quantity,
    0
  );

  function deleteProduct(id) {
    setCart((cart) => cart.filter((product) => id !== product.product.id));
  }

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: value,
          };
        }
        return product;
      });
    });
  };

  const order = cart.map((product) => {
    return (
      <CartItem
        product={product}
        key={product.product.id}
        deleteProduct={deleteProduct}
        changeValue={changeValue}
      />
    );
  });

  return (
    <>
      <section className="cart">
        <div className="container">
          <div className="cart-envelop">{order}</div>
          <div className="cart__cost-wrapper">
            <p className="cart__costLegend">Total Cost</p>
            <p className="cart__cost">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(cartTotalAll)}
            </p>
            <p className="cart__discountLegend">Discount</p>
            <p className="cart__discount">
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(discount)}
            </p>
          </div>

          {cart.length === 0 ? (
            <button
              className="button button__cart"
              type="button"
              onClick={() => {
                setDisabled(true);
              }}
              disabled={true}
            >
              To order
              <div className="button__iconWrapper">
                <svg className="button__svg" width="13" height="13">
                  <use
                    className="button__icon"
                    href="images/icons/symbol-defs.svg#icon-arrow-right2"
                  ></use>
                </svg>
              </div>
            </button>
          ) : (
            <button
              className={active ? "active" : "button button__cart"}
              type="button"
              onClick={() => {
                handleClick();
                setActive(true);
              }}
            >
              To order
              <div className="button__iconWrapper">
                <svg className="button__svg" width="13" height="13">
                  <use
                    className="button__icon"
                    href="images/icons/symbol-defs.svg#icon-arrow-right2"
                  ></use>
                </svg>
              </div>
            </button>
          )}

          {isShown && (
            <Order
              onSubmit={handleSubmit}
              onChange={handleChange}
              name={name}
              email={email}
              message={message}
              number={number}
              address={address}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
