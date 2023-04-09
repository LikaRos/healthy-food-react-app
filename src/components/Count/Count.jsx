import "./style.scss";

const Count = ({ product, quantity, increase, decrease, changeValue }) => {
  return (
    <>
      <div className="count">
        <div className="count__box">
          <p className="count__legend">Quantity:</p>

          <input
            onChange={changeValue}
            type="number"
            className="count__input"
            min={product.count}
            max="100"
            name="quantity"
            value={quantity}
          />
        </div>
        <div className="count__controls">
          <button
            type="button"
            className="count__up"
            onClick={() => {
              increase(quantity);
            }}
          >
            <img src="images/icons/icon-up.svg" alt="Increase" />
          </button>
          <button
            type="button"
            className="count__down"
            onClick={() => {
              decrease(quantity);
            }}
          >
            <img src="images/icons/icon-down.svg" alt="Decrease" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Count;
