import React, { useEffect } from "react";
import Modal from "./Modal";

function Hero({ setAmount, amount, images, addItemToCard }) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [imageChanger, setImageChanger] = React.useState(0);
  const [activeImage, setActiveImage] = React.useState(
    images[imageChanger].image
  );

  const itemAmount = (e) => {
    if (e.target.name === "inc") {
      setAmount(amount + 1);
    } else if (e.target.name === "dec") {
      amount ? setAmount(amount - 1) : setAmount(0);
    }
  };

  const modalContainer = (e) => {
    if (window.innerWidth < 1440) {
      e.preventDefault();
    } else {
      setIsModalOpen(!isModalOpen);
      console.log(e.target.src);
    }
  };

  const changeImage = (index) => {
    setActiveImage(images[index].image);
  };

  const buttonChangeImage = (e) => {
    if (e.target.name === "les") {
      imageChanger <= 0
        ? setImageChanger(3)
        : setImageChanger(imageChanger - 1);
    } else if (e.target.name === "next") {
      imageChanger >= 3
        ? setImageChanger(0)
        : setImageChanger(imageChanger + 1);
    }
  };
  useEffect(() => {
    setActiveImage(images[imageChanger].image);
  }, [imageChanger]);
  return (
    <>
      <section className="container">
        <div className="container__image" onClick={(e) => modalContainer(e)}>
          <img src={activeImage}></img>
          <div className="left">
            <img
              name="les"
              onClick={buttonChangeImage}
              src="images/icon-previous.svg"
            ></img>
          </div>
          <div className="right">
            <img
              name="next"
              onClick={buttonChangeImage}
              src="images/icon-next.svg"
            ></img>
          </div>
        </div>
        <article className="product">
          <div className="product__information">
            <p className="company">sneaker company</p>
            <h1>fall limited edition sneakers</h1>
            <p className="company-item">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outersole, they'll withstand everything
              the weather can offer.
            </p>
          </div>
          <div className="product__price">
            <h3>$125.00</h3>
            <p className="sale">50%</p>
            <h4>$250.00</h4>
          </div>
          <div className="product__quantity">
            <div className="product__quantity__elements">
              <img
                src="images/icon-minus.svg"
                name="dec"
                onClick={itemAmount}
              ></img>
              <p>{amount}</p>
              <img
                src="images/icon-plus.svg"
                name="inc"
                onClick={itemAmount}
              ></img>
            </div>
          </div>
          <div className="btn">
            <button className="btn__cart" onClick={addItemToCard}>
              <img src="images/icon-cart.svg"></img>Add to cart
            </button>
          </div>
        </article>
        <div className="thumbnails">
          {images.map((image, index) => {
            return (
              <div className="thumbnails__image">
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
      </section>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        changeImage={changeImage}
        images={images}
        buttonChangeImage={buttonChangeImage}
      />
    </>
  );
}

export default Hero;
