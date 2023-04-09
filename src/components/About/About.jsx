import "./style.scss";
const About = () => {
  return (
    <>
      <section
        className="about"
        id="about"
        style={{
          backgroundImage: `url(/images/products/about.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="about__content">
            <p className="accent">About Us</p>
            <h2>We Believe in Working Accredited Farmers</h2>
            <p>
              <small>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </small>
            </p>

            <ul className="about__list">
              <li>
                <img src="images/products/icon1.png" alt="icon" />
                <div>
                  <h5>Organic Foods Only</h5>
                  <p>
                    <small>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </small>
                  </p>
                </div>
              </li>
              <li>
                <img src="images/products/icon2.png" alt="icon" />
                <div>
                  <h5>Quality Standards</h5>
                  <p>
                    <small>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum
                    </small>
                  </p>
                </div>
              </li>
            </ul>

            <button className="button">
              Shop now
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

export default About;
