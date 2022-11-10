import React from "react";

function Modal({
  isModalOpen,
  setIsModalOpen,
  activeImage,
  setActiveImage,
  images,
  changeImage,
  buttonChangeImage,
}) {
  return (
    <section className={`${isModalOpen ? "modal active-modal" : "modal"}`}>
      <div className="modal__container">
        <div className="modal__main">
          <img
            className="modal__main--close"
            src="images/icon-close.svg"
            onClick={() => setIsModalOpen(false)}
          ></img>
          <img className="modal__main--center" src={activeImage}></img>
          <div className="modal__main--left">
            <img
              name="les"
              onClick={buttonChangeImage}
              src="images/icon-previous.svg"
            ></img>
          </div>
          <div className="modal__main--right">
            <img
              name="next"
              onClick={buttonChangeImage}
              src="images/icon-next.svg"
            ></img>
          </div>
        </div>
        <div className="modal__under">
          {images.map((image, index) => {
            return (
              <div className="modal__under__images">
                <img
                  className={`${activeImage === image.image ? "active" : ""}`}
                  src={image.imageThumbnail}
                  onClick={() => changeImage(index)}
                  key={index}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Modal;
