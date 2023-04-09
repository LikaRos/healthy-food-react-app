import Stars from "../Stars/Stars";
import "./style.scss";

const Products = () => {
  const PRODUCTS = [
    {
      category: "Vegetable",
      image: "cauliflower.png",
      title: "Cauliflower",
      old_price: "$20.00",
      new_price: "$11.00",
      id: 1,
    },
    {
      category: "Vegetable",
      image: "marrow.png",
      title: "Marrow",
      old_price: "$20.00",
      new_price: "$12.00",
      id: 2,
    },
    {
      category: "Vegetable",
      image: "onion.png",
      title: "Onion",
      old_price: "$20.00",
      new_price: "$17.00",
      id: 3,
    },
    {
      category: "Vegetable",
      image: "cabbage.png",
      title: "Cabbage",
      old_price: "$20.00",
      new_price: "$17.00",
      id: 4,
    },
  ];

  return (
    <>
      <section className="products-section">
        <div className="container">
          <p className="accent">Offer</p>
          <h2>We offer organic for you</h2>

          <ul className="gallery">
            {PRODUCTS.map((product) => (
              <li className="gallery-item" key={product.id}>
                <p className="gallery-item__category">{product.category}</p>
                <img
                  className="gallery-item__image"
                  src={`images/products/${product.image}`}
                  alt={product.title}
                />
                <div className="gallery-item__div">
                  <h3 className="gallery-item__name">{product.title}</h3>
                  <div className="gallery-item__wrapper">
                    <div className="gallery-item__price-wrapper">
                      <p className="gallery-item__old-price">
                        {product.old_price}
                      </p>
                      <p className="gallery-item__new-price">
                        {product.new_price}
                      </p>
                    </div>
                    <div className="gallery-item__stars-wrapper">
                      <Stars />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Products;
