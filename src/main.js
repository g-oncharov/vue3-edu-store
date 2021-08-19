import { createApp } from "vue";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./styles.css";
import ProductList from "./Components/ProductList";
import CartButton from "./Components/Cart/CartButton";
import CartModal from "./Components/Cart/CartModal";

const app = createApp({
    data:()=> ({
        cartProducts:[],
    }),
    computed:{
        totalAmount(){
            let result = this.cartProducts.reduce((total,{amount})=>total + amount, 0)
            if (result < 0) {
                result = 0;
            }
            return result;
        },
        totalPrice(){
            return this.cartProducts.reduce((total,{price,amount})=>total + (amount * price), 0 );
        },

    },
    methods: {
        addToCart(product){
            this.cartProducts.push({...product,amount: 1});
        },
        isInCart(id){
            return !!this.cartProducts.find((item)=> item.id ===id);
        },
        removeProduct(index){
            this.cartProducts.splice(index,1);
        },
        addMore(index){
            const product = this.cartProducts[index];
            this.cartProducts.splice(index,1 ,{...product,amount:product.amount+1})
        },
        removeOne(index){
            const product = this.cartProducts[index];
            if (product.amount > 0) {
                this.cartProducts.splice(index,1 ,{...product,amount:product.amount-1})
            }
        }
    },
});

app.component("product-list",ProductList);
app.component("cart-button",CartButton);
app.component("cart-modal",CartModal);
app.mount("#app");