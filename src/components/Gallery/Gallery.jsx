import { useEffect, useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";
import "./style.scss";
import Button from "../Button/Button";
import { service } from "../../ServiceApi/service";
import Modal from "../Modal/Modal";
import Title from "../Title/Title";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [textContent, setTextContent] = useState("Load more");
  const [selectedItem, setSelectedItem] = useState(null);
  const PER_PAGE = 8;

  useEffect(() => {
    fetchProducts(1);
  }, []);

  const handleLoadMore = () => {
    if (textContent === "Load more") {
      setPage(page + 1);
      fetchProducts(page + 1);
    } else if (textContent === "Hide All") {
      setPage(1);
      setGallery((gallery) => gallery.slice(0, PER_PAGE));
      setTextContent("Load more");
    }
  };

  const onCloseModal = () => {
    selectedItem(null);
  };

  const selectProduct = (selectedItem) => {
    setSelectedItem(selectedItem);
  };

  const products = gallery.map((product) => {
    return (
      <GalleryItem
        product={product}
        key={product.id}
        selectProduct={selectProduct}
      />
    );
  });

  function fetchProducts(currentPage) {
    service(currentPage)
      .then(({ data }) => {
        setGallery((gallery) => [...gallery, ...data]);
        if (data.length < PER_PAGE) {
          setTextContent("Hide All");
        }
      })
      .catch((err) => {
        console.log("Something is wrong!");
      });
  }

  return (
    <>
      <section id="shop" className="container categories">
        <Title />
        <ul className="gallery">{products}</ul>
        <Button textContent={textContent} handlerClick={handleLoadMore} />
        <Modal
          product={selectedItem}
          setProduct={setSelectedItem}
          onClose={onCloseModal}
        />
      </section>
    </>
  );
};

export default Gallery;
