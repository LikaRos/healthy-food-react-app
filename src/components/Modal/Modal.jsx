import "./style.scss";
import "./../GalleryItem/style.scss";

import "./style.scss";
import ModalOrder from "../ModalOrder/ModalOrder";

const Modal = ({
  product,
  setProduct,
  onClose,
  increase,
  decrease,
  changeValue,
  quantity,
}) => {
  onClose = () => {
    setProduct(null);
  };

  return (
    <div className={product ? "modal active" : "modal"}>
      <div
        className="modal__content container"
        onClick={(e) => e.stopPropagation()}
      >
        {product && (
          <ModalOrder
            quantity={quantity}
            product={product}
            onClose={onClose}
            increase={increase}
            decrease={decrease}
            changeValue={changeValue}
          />
        )}
      </div>
    </div>
  );
};

export default Modal;
