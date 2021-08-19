<template>
  <table v-if="(totalAmount > 0)" class="table cart-table">
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col" class="text-center">Quantity</th>
      <th scope="col" class="text-center">Price</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <cart-product-item
        v-for="(product, index) in products"
        :index="index"
        :key="product.id"
        :name="product.name"
        :amount="product.amount"
        :price="product.price"
        :image="product.image"
    />
    </tbody>
    <tfoot>
    <tr class="fw-bold px-4">
      <td class="text-end">
        Total:
      </td>
      <td class="text-center">{{ totalAmount }}</td>
      <td class="text-end">${{ totalPrice }}</td>
    </tr>
    </tfoot>
  </table>
  <p v-else class="cart-empty">Ваша корзина пуста</p>
</template>


<script>
import CartProductItem from "./CartProductItem";

export default {
  name: "CartProductList",
  components: {
    CartProductItem
  },
  computed: {
    products() {
      return this.$root.cartProducts;
    },
    totalAmount() {
      return this.$root.totalAmount;
    },
    totalPrice() {
      return this.$root.totalPrice;
    }
  },
}
</script>

<style>
  .cart-empty {
    text-align: center;
    font-size: 30px;
  }
</style>