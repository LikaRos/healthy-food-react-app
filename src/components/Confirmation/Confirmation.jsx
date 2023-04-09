import "./style.scss";

const Confirmation = () => {
  return (
    <>
      <header
        className="thank-you-header"
        style={{
          backgroundImage: `url(/images/products/thank-you-bg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundSize: "cover",
        }}
      >
        <h1>Thank you for your order</h1>
        <div className="thank-you-header__bg-wrapper"></div>
      </header>
    </>
  );
};

export default Confirmation;
