import Stars from "../Stars/Stars";
import "./style.scss";

const Testimonial = () => {
  return (
    <>
      <section
        className="testimonial-section"
        style={{
          backgroundImage: `url(/images/products/background.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <p className="accent">Testimonial</p>
          <h2>What our customers saying?</h2>
          <div className="testimonial">
            <img
              className="testimonial__photo"
              src="images/products/photo.jpg"
              alt="girl"
            />

            <div className="testimonial__rank">
              <Stars />
            </div>
            <button className="button">
              Load more
              <div className="button__iconWrapper">
                <svg className="button__svg" width="13" height="13">
                  <use
                    className="button__icon"
                    href="images/icons/symbol-defs.svg#icon-arrow-right2"
                  ></use>
                </svg>
              </div>
            </button>
            <p>
              <small>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </small>
            </p>
            <p className="testimonial__name">Sara Taylor</p>
            <p>
              <small className="testimonial__role">Consumer</small>
            </p>
            <ul className="dots">
              <li></li>
              <li className="dots-active"></li>
              <li></li>
            </ul>
          </div>
          <div className="testimonial-section__summary">
            <div className="summary">
              <div className="summary__content">
                <p className="summary__value">100%</p>
                <p>
                  <small>Organic</small>
                </p>
              </div>
            </div>
            <div className="summary">
              <div className="summary__content">
                <p className="summary__value">285</p>
                <p>
                  <small>Active Products</small>
                </p>
              </div>
            </div>
            <div className="summary">
              <div className="summary__content">
                <p className="summary__value">350+</p>
                <p>
                  <small>Organic Orchads</small>
                </p>
              </div>
            </div>
            <div className="summary">
              <div className="summary__content">
                <p className="summary__value">25+</p>
                <p>
                  <small>Year of Farming</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
