import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);

    const placeOrder = (order) => {
        setOrders((prev) => [...prev, order]);
    };

    return (
        <OrderContext.Provider
            value={{
                orders,
                placeOrder,
            }}
        >
            {children}
        </OrderContext.Provider>
    );
};

export const useOrder = () => useContext(OrderContext);