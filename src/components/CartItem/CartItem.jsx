const CartItem = ({ deleteProduct, product, changeValue }) => {
  return (
    <>
      <div className="cart-flex__item" key={product.product.id}>
        <div className="cart-productImage">
          <img
            className="cart__image"
            src={`images/products/${product.product.image}`}
            alt={product.product.title}
          />
        </div>
        <h3 className="gallery__name">{product.product.title}</h3>
        <div className="gallery_prices">
          <p className="gallery-item__old-price">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.product.old_price)}
          </p>
          <p className="gallery-item__new-price">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.product.new_price)}
          </p>
        </div>
        <div className="count__box count__box--cart">
          <div className="count__box-wrapper">
            <p className="count__legend count__legend--cart">Quantity:</p>
            <input
              onChange={(e) => {
                changeValue(product.product.id, +e.target.value);
              }}
              type="number"
              className="count__input"
              min={product.product.count}
              max="100"
              name="quantity"
              value={product.quantity}
            />
          </div>
        </div>
        <button
          onClick={() => {
            deleteProduct(product.product.id);
          }}
          type="button"
          className="button button__close"
        >
          <svg className="button__svg--close" width="20" height="30">
            <use
              className="button__icon"
              href="images/icons/symbol-defs.svg#icon-cancel"
            ></use>
          </svg>
        </button>
      </div>
    </>
  );
};

export default CartItem;
