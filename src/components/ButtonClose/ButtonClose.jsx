import './style.scss';

const ButtonClose = ({onClose}) => {
   return ( 
      <>
       <button type="button" className="button button__close" onClick={()=>{onClose()}}>
              <svg className="button__svg--close" width="20" height="30">
                <use
                  className="button__icon"
                  href="images/icons/symbol-defs.svg#icon-cancel"
                ></use>
              </svg>
            </button>
      </>
    );
}
 
export default ButtonClose;