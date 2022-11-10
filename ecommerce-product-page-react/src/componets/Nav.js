import React from "react";

function Nav({ amount, isCartEmpty, setIsCartEmpty }) {
  const [sidebar, setSidebar] = React.useState(false);
  const [cart, setCart] = React.useState(false);

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__container__utils">
          <img
            src="images/icon-menu.svg"
            onClick={() => setSidebar(true)}
          ></img>
          <img src="images/logo.svg"></img>
          <img src="images/icon-cart.svg" onClick={() => setCart(!cart)}></img>
          <img src="images/image-avatar.png" className="user"></img>
          <div className="amount-container">
            <p>3</p>
          </div>
        </div>

        <div
          className={`${
            sidebar
              ? "nav__container__elements desktop sidebar"
              : "nav__container__elements desktop"
          }`}
        >
          <img
            className="close-menu"
            src="images/icon-close.svg"
            onClick={() => setSidebar(false)}
          ></img>
          <p>Collections</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div
          className={`${sidebar ? "aside-black sidebar" : "aside-black"}`}
        ></div>
      </div>
      <hr></hr>
      <div className={`${cart ? "checkout cart" : "checkout"}`}>
        {isCartEmpty === true && (
          <>
            <p>Cart</p>
            <hr></hr>
            <p className="empty">Your cart is currently empty</p>
          </>
        )}
        {isCartEmpty === false && (
          <>
            <p>Cart</p>
            <hr></hr>
            <div className="checkout__components">
              <div className="checkout__components--image">
                <img src="images/image-product-1-thumbnail.jpg"></img>
              </div>
              <div className="checkout__components--desc">
                <p>autum limited edition</p>
                <p>
                  $125.00 x {amount}{" "}
                  <span className="bold">{`$${amount * 125}.00`}</span>
                </p>
              </div>
              <div
                className="checkout__components--delete"
                onClick={() => setIsCartEmpty(true)}
              >
                <button>
                  <img src="images/icon-delete.svg" />
                </button>
              </div>
            </div>
            <div className="checkout-btn">
              <button>Checkout</button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
