<template>
  <div class="col-md-6 col-lg-4 py-3">
    <div class="card py-3">
      <img class="card-img-top" :src="image" :alt="name">
      <div class="card-body">
        <h5 class="card-title">
          {{name}}
        </h5>
        <p class="card-subtitle mt-2 mb-3">
          {{category}}
        </p>
        <h5 class="fs-3 text-success">
          ${{price}}
        </h5>
        <p class="mt-3">
          Stock:
          <strong v-if="isAvailable" class="text-success">Available</strong>
          <strong v-else class="text-dander">Sold Out</strong>
        </p>
        <button
            @click="addToCart"
            :disabled="!isAvailable || isInCart"
            :class="`btn ${(isAvailable  && !isInCart) ? 'btn-success' : 'btn-secondary'} w-100 shadow-none`"
            >
          {{ !isInCart ? 'Add to cart' : 'Added'}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props:{
    name:{
      type:String,
      isRequired:true,
    },
    category:{
      type:String,
    },
    price:{
      type:Number,
    },
    image:{
      type:String,
    },
    isAvailable:{
      type:Boolean,
    },
    id: {
      type: Number
    }
  },
  methods:{
    addToCart(){
      this.$emit('add-to-cart');
    },
  },
  computed:{
    isInCart(){
      return this.$root.isInCart(this.id);
    }
  }
}
</script>