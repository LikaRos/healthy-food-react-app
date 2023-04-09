import Stars from "../Stars/Stars";
import "./style.scss";

const GalleryItem = ({ product, selectProduct }) => {
  const { title, old_price, new_price, image, category } = product;

  return (
    <>
      <li className="gallery-item">
        <button
          onClick={() => {
            selectProduct(product);
          }}
        >
          <p className="gallery-item__category">{category}</p>
          <img
            className="gallery-item__image"
            src={`/images/products/${image}`}
            alt={title}
          />
          <div className="gallery-item__div">
            <h3 className="gallery-item__name">{title}</h3>
            <div className="gallery-item__wrapper">
              <div className="gallery-item__price-wrapper">
                <p className="gallery-item__old-price">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(old_price)}
                </p>
                <p className="gallery-item__new-price">
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(new_price)}
                </p>
              </div>
              <Stars />
            </div>
          </div>
        </button>
      </li>
    </>
  );
};

export default GalleryItem;
