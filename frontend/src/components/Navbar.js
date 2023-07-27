import { Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const checkout = async () => {
    await fetch(`${process.env.SERVER_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        if(response.ok) return response.json();
        return response.json().then(json => Promise.reject(json))
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url); // Forwarding user to Stripe
        }
      });
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-md">
        <div className="container flex items-center justify-between mx-auto">
          <a href="/" className="flex items-center no-underline">
            <span className="self-center text-2xl whitespace-nowrap text-black">
              Ecommerce Store
            </span>
          </a>
          <button
            type="button"
            onClick={handleShow}
            className="text-white bg-black hover:opacity-80 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0"
          >
            Cart ({productsCount} items)
          </button>
        </div>
      </nav>
      <Modal show={show} fullscreen="lg-down" onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}

              <h1>
                <span style={{ fontWeight: 600 }}>
                  Subtotal ({productsCount} items):{" "}
                </span>
                ${cart.getTotalCost().toFixed(2)}
              </h1>

              <button className="text-white bg-black hover:opacity-90 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-black dark:hover:opacity-90" onClick={checkout}>
                Purchase items!
              </button>
            </>
          ) : (
            <h1>There are no items in your cart!</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
