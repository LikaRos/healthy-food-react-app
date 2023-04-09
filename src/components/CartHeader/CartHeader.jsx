import "./style.scss";
const CartHeader = () => {
  return (
    <>
      <header
        className="cart-header"
        style={{
          backgroundImage: `url(/images/products/cart-bg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundSize: "cover",
        }}
      >
        <h1>Cart</h1>
      </header>
    </>
  );
};

export default CartHeader;
