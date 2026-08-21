import { useCart } from "../context/CartContext";

const OrderSummary = () => {

    const { cartItems, totalPrice } = useCart();

    return (

        <div className="card shadow p-4">

            <h3>Order Summary</h3>

            <hr />

            {cartItems.map(item => (

                <div
                    key={item.id}
                    className="d-flex justify-content-between mb-3"
                >

                    <div>

                        <strong>{item.name}</strong>

                        <br />

                        Qty : {item.quantity}

                    </div>

                    <div>

                        ₹{item.price * item.quantity}

                    </div>

                </div>

            ))}

            <hr />

            <h4>

                Total : ₹{totalPrice}

            </h4>

        </div>

    );

};

export default OrderSummary;