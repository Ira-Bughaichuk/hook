import axios from "axios";

const productUrl = axios.create({ baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products' });

async function fetchProducts() {
    const {data} = await productUrl.get('');
    return data;
  // console.log(products.data);
}
export default fetchProducts;





export async function fetchProductById(id) {
    const {data} = await productUrl.get(`/${id}`);
    return data;
  // console.log(products.data);
}
