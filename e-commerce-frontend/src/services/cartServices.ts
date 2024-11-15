import api from "./api";

export const addToCart = async (productId: number) => {
  try {
    const response = await api.post("/cart", { productId });
    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar produto ao carrinho:", error);
    throw error;
  }
};

export const getCart = async () => {
  try {
    const response = await api.get("/cart");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar carrinho:", error);
    throw error;
  }
};
