import "./style.scss";
const Offer = () => {
  const OFFERS = [
    {
      type: "offer-light",
      header: "Natural!!",
      image: "offer1.jpg",
      offerContent: "Get Garden Fresh Fruits",
      id: 1,
    },
    {
      type: "offer-dark",
      header: "Offer!!",
      image: "offer2.jpg",
      offerContent: "Get 10% off on Vegetables",
      id: 2,
    },
  ];
  return (
    <>
      <section className="container offers-section">
        {OFFERS.map((offer) => (
          <div className="offer {type}" offer={offer} key={offer.id}>
            <img src={`images/products/${offer.image}`} alt="offer" />
            <div className="offer__content">
              <p className="accent">{offer.header}</p>
              <p>{offer.offerContent}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Offer;
