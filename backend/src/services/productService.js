import API from "./api";

export const getProducts = async () => {
    const response = await API.get("products/");
    return response.data;
};

export const getProductBySlug = async (slug) => {
    const response = await API.get(
        `products/${slug}/`
    );

    return response.data;
};