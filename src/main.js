import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import ProductList from "./Components/ProductsList";
import Product from "./Components/Product";
import CartButton from "./Components/Cart/CartButton";

const app = createApp({
    data: () =>({
        cartProducts: [],
    }),
    methods:{
        addToCart(product){
            console.log('products main')
            this.cartProducts.push(product)
        }
    }
});
app.component('cart-button', CartButton)
app.component('product-list', ProductList)
app.component('product', Product)
app.mount("#app");