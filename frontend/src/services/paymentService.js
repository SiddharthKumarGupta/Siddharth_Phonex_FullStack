import api from "./api";

export const createOrder = async () => {
    const res = await api.post("orders/create/");
    return res.data;
};

export const createCODPayment = async (orderId) => {
    const res = await api.post("payments/create/", {
        order_id: orderId,
    });

    return res.data;
};

export const createRazorpayOrder = async (orderId) => {
    const res = await api.post("payments/create-order/", {
        order_id: orderId,
    });

    return res.data;
};

export const verifyPayment = async (data) => {
    const res = await api.post("payments/verify/", data);
    return res.data;
};