import "./style.scss";

const ButtonOrder = () => {
  return (
    <>
      <button type="button" className="button button__cart">
        To order
        <div className="button__iconWrapper">
          <svg className="button__svg" width="13" height="13">
            <use
              className="button__icon"
              href="images/icons/symbol-defs.svg#icon-arrow-right2"
            ></use>
          </svg>
        </div>
      </button>
    </>
  );
};

export default ButtonOrder;
