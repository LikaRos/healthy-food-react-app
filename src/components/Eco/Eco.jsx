import "./style.scss";

const Eco = () => {
  return (
    <>
      <section
        className="eco-section"
        style={{
          backgroundImage: `url(/images/products/eco-bg.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
        }}
      >
        <div className="container">
          <div className="eco-section__content">
            <p className="accent">Eco Friendly</p>
            <h2>Econis is a Friendly Organic Store</h2>
            <ul className="eco-section__list">
              <li>
                <h5>Start with Our Company First</h5>
                <p>
                  <small>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </small>
                </p>
              </li>
              <li>
                <h5>Learn How to Grow Yourself</h5>
                <p>
                  <small>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </small>
                </p>
              </li>
              <li>
                <h5>Farming Strategies of Today</h5>
                <p>
                  <small>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </small>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Eco;
