import Stars from "../Stars/Stars";
import "./style.scss";
import "./../GalleryItem/style.scss";
import Count from "../Count/Count";
import ButtonAdd from "../ButtonAdd/ButtonAdd";
import ButtonSelect from "../ButtonSelect/ButtonSelect";
import ButtonClose from "../ButtonClose/ButtonClose";
import { useState } from "react";
import STORAGE_KEY from "../../utils/constants";

const ModalOrder = ({ product, onClose }) => {
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState(product.count);

  const handleChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case "quantity":
        setQuantity(value);
        if (value < 0) {
          alert("Minimal quantity:", 1);
        }
        break;

      default:
        return;
    }
  };

  const onAddtoCart = () => {
    const obj = {
      product,
      quantity,
    };

    let products = JSON.parse(localStorage.getItem(STORAGE_KEY));
    products = products ? products : [];

    products.push(obj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  };

  const increase = (quantity) => {
    setQuantity(quantity + 1);
  };

  const decrease = (quantity) => {
    setQuantity(quantity - 1);
    if (quantity <= 1) {
      setQuantity(1);
    }
  };

  return (
    <>
      <section className="modal-order">
        <div className="modal-order__container container">
          <div className="modal-order__wrapper">
            <ButtonClose onClose={onClose} />
            <div className="gallery-item">
              <p className="gallery-item__category">{product.category}</p>
              <img
                className="modal-order__image"
                src={`/images/products/${product.image}`}
                alt={product.title}
              />
            </div>
            <div className="modal-order__textWrapper">
              <h3 className="gallery-item__name">{product.title}</h3>
              <Stars />
              <div className="gallery-item__price-wrapper">
                <p className="gallery-item__old-price">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.old_price)}
                </p>
                <p className="gallery-item__new-price">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.new_price)}
                </p>
              </div>
              <p className="modal-order__shortDescription">
                {product.description}
              </p>
              <div className="modal-order__countWrapper">
                <Count
                  product={product}
                  quantity={quantity}
                  increase={increase}
                  decrease={decrease}
                  changeValue={handleChange}
                />
                <ButtonAdd onChange={onAddtoCart} />
              </div>
            </div>
          </div>
          <div className="modal-order__buttonWrapper">
            <ButtonSelect setType={setType} type={type} />
          </div>
          {type === "info" ? (
            <p className="modal-order__description">
              {product.additional_info}
            </p>
          ) : (
            <p className="modal-order__description">{product.description}</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ModalOrder;
