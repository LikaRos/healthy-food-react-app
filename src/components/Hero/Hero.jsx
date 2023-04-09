import "./style.scss";

const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="hero"
        style={{
          backgroundImage: `url(/images/products/banner.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container container-narrow">
          <div className="hero__content">
            <p className="accent">100% Natural Food</p>
            <h1>Choose the best healthier way of life</h1>
            <button className="button button-inverse">
              Explore Now
              <div className="button__iconWrapper">
                <svg className="button__svg" width="13" height="13">
                  <use
                    className="button__icon"
                    href="images/icons/symbol-defs.svg#icon-arrow-right2"
                  ></use>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
