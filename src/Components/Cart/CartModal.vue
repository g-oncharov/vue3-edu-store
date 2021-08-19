<template>
  <div class="modal fade" id="cartModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="cartModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalTitle">
            Shopping Cart ({{totalAmount}} Items)
          </h5>
          <button type="button" class="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close" @click="removeEmptyOrders"></button>
        </div>
        <div class="modal-body p-4">
          <!-- CartProductsList component -->
          <cart-product-list></cart-product-list>
          <!-- CartBillingForm component -->
          <cart-building-form></cart-building-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CartProductList from "./CartProductList";
  import CartBuildingForm from "./CartBuildingForm";
export default {
  name: "CartModal",
  components: {CartProductList,CartBuildingForm},
  computed: {
    totalAmount() {
      return this.$root.totalAmount;
    }
  },
  methods: {
    removeEmptyOrders(){
      let products = [];
      for (let product in this.$root.cartProducts) {
        if (this.$root.cartProducts.hasOwnProperty(product) && this.$root.cartProducts[product].amount === 0) {
          products.push(product)
        }
      }
      products.forEach((element) => {
          this.$root.removeProduct(element);
       })
    },
  }
}
</script>