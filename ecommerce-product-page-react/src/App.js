import React from "react";
import logo from "./logo.svg";
import Nav from "./componets/Nav";
import Hero from "./componets/Hero";

const images = [
  {
    image: "images/image-product-1.jpg",
    imageThumbnail: "images/image-product-1-thumbnail.jpg",
  },
  {
    image: "images/image-product-2.jpg",
    imageThumbnail: "images/image-product-2-thumbnail.jpg",
  },
  {
    image: "images/image-product-3.jpg",
    imageThumbnail: "images/image-product-3-thumbnail.jpg",
  },
  {
    image: "images/image-product-4.jpg",
    imageThumbnail: "images/image-product-4-thumbnail.jpg",
  },
];
function App() {
  const [amount, setAmount] = React.useState(0);
  const [isCartEmpty, setIsCartEmpty] = React.useState(true);
  const addItemToCard = () => {
    if (amount === 0) {
      setIsCartEmpty(true);
      alert("Can't add 0 items to cart");
    } else setIsCartEmpty(false);
  };

  return (
    <>
      <Nav
        amount={amount}
        isCartEmpty={isCartEmpty}
        setIsCartEmpty={setIsCartEmpty}
      />
      <Hero
        setAmount={setAmount}
        amount={amount}
        images={images}
        addItemToCard={addItemToCard}
      />
    </>
  );
}

export default App;
