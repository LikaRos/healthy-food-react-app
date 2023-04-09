import About from "../../components/About/About";
import Announcement from "../../components/Announcement/Announcement";
import Eco from "../../components/Eco/Eco";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import Offer from "../../components/Offer/Offer";
import Products from "../../components/Products/Products";
import Testimonial from "../../components/Testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Offer />
      <About />
      <Gallery />
      <Testimonial />
      <Products />
      <Eco />
      <Announcement />
      <News />
      <Footer />
    </>
  );
};

export default HomePage;
