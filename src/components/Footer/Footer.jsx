import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <footer className="container footer">
        <div className="footer__left">
          <h4>Contact Us</h4>
          <div>
            <p>
              <small>
                <b>Email</b>
              </small>
            </p>
            <p>
              <a href="mailto:needhelp@Organia.com">
                <small>needhelp@Organia.com</small>
              </a>
            </p>
          </div>

          <div>
            <p>
              <small>
                <b>Phone</b>
              </small>
            </p>
            <p>
              <a href="tel:666 888 888">
                <small>666 888 888</small>
              </a>
            </p>
          </div>

          <div>
            <p>
              <small>
                <b>Address</b>
              </small>
            </p>
            <address>
              <small>88 road, borklyn street, USA</small>
            </address>
          </div>
        </div>
        <div className="footer__center">
          <div className="logo">
            <img src="images/products/logo.png" alt="logo" />
            <p>Organic</p>
          </div>
          <p className="footer__content">
            <small>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </small>
          </p>
          <ul className="links">
            <li>
              <Link
                to="/#"
                className="links__insta"
                style={{ backgroundImage: `url(/images/icons/insta.svg)` }}
              ></Link>
            </li>
            <li>
              <Link
                to="/#"
                className="links__fb"
                style={{ backgroundImage: `url(/images/icons/fb.svg)` }}
              ></Link>
            </li>
            <li>
              <Link
                to="/#"
                className="links__twitter"
                style={{ backgroundImage: `url(/images/icons/twiter.svg)` }}
              ></Link>
            </li>
            <li>
              <Link
                to="/#"
                className="links__pinterest"
                style={{ backgroundImage: `url(/images/icons/pintrest.svg)` }}
              ></Link>
            </li>
          </ul>
        </div>
        <div className="footer__right">
          <h4>Utility Pages</h4>
          <ul>
            <li>
              <small>
                <Link to="/#">Style Guide</Link>
              </small>
            </li>
            <li>
              <small>
                <Link to="/#">Password Protected</Link>
              </small>
            </li>
            <li>
              <small>
                <Link to="/#">Licences</Link>
              </small>
            </li>
            <li>
              <small>
                <Link to="/#">Changelog</Link>
              </small>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
