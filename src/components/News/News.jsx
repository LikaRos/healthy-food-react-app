import "./style.scss";
const News = () => {
  const news = [
    {
      name: " By Rachi Card",
      header: "The Benefits of Vitamin D & How to Get It",
      image: "news1.jpg",
      text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      id: 1,
      alt: "cabbage",
    },
    {
      name: "By Rachi Card",
      header: "Our Favourite Summertime Tommeto",
      image: "news2.jpg",
      text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
      id: 2,
      alt: "tomato",
    },
  ];
  const listItems = news.map((item) => (
    <div key={item.id} className="news">
      <img src={`images/products/${item.image}`} alt={item.alt} />
      <div className="news__date">
        <div>
          <p>25</p>
          <p>Nov</p>
        </div>
      </div>
      <div className="news__content">
        <p className="news__author">
          <img src="images/icons/author.svg" alt="author" />
          {item.name}
        </p>
        <h5>{item.header}</h5>
        <p>
          <small>{item.text}</small>
        </p>
        <button className="button button-inverse">
          Read more
          <div className="button__iconWrapper">
            <svg className="button__svg" width="13" height="13">
              <use
                className="button__icon"
                href="svg/symbol-defs.svg#icon-arrow-right2"
              ></use>
            </svg>
          </div>
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <section id="news" className="container news-section">
        <div className="news-section__header">
          <div>
            <p className="accent">News</p>
            <h2>Discover weekly content about organic food, & more</h2>
          </div>
          <div>
            <button className="button button-white">
              More news
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

        <div className="news-section__content">{listItems}</div>

        <div
          className="subscribe-form"
          style={{
            backgroundImage: `url(/images/products/subscribe-bg.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2>Subscribe to our Newsletter</h2>
          <div className="subscribe-form__input-wrapper">
            <input type="text" placeholder="Your Email Address" />
            <button className="button">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
