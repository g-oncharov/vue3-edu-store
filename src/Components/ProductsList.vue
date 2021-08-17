<template>
  <!-- ProductsList component -->
  <div class="container">
    <div class="card my-5 shadow">
      <div class="card-body">
        <div class="row">
          <!-- Product component -->
          <product
              v-for="product in products"
              :key="product.id"
              :name="product.name"
              :title="product.title"
              :price="product.price"
              :image="product.image"
              @add-to-cart="addToCart(product)">
          </product>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";

export default {
  name: "ProductsList",
  components: {Product},
  data: () => ({
    products: [],
  }),
  mounted() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      const response = await fetch("http://localhost:3000/products");
      this.products = await response.json();
    },
    addToCart(product) {
      this.$root.addToCart(product)
    }
  }
}
</script>