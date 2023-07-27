import { Container, Row, Col, Image } from 'react-bootstrap';
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Image roundedCircle fluid src={productData.img} width={120} height={120} />
                    </Col>
                    <Col>
                        <h3>{productData.title}</h3>
                        <p>${ (productData.price).toFixed(2) }</p>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <button className="text-white bg-black hover:opacity-90 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-black dark:hover:opacity-90" onClick={() => cart.removeOneFromCart(id)} >-</button>
                            </Col>
                            <Col>
                                <p className="mt-1">Qty: {quantity}</p>
                            </Col>
                            <Col>
                                <button className="text-white bg-black hover:opacity-90 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-black dark:hover:opacity-90" onClick={() => cart.addOneToCart(id)} >+</button>
                            </Col>
                        </Row>
                        <div className="text-center">
                            <button className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 no-underline" onClick={() => cart.deleteFromCart(id)}>Remove</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
        </>
    )
}

export default CartProduct;