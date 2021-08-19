<template>
  <h5>Billing details</h5>
  <form @submit.prevent="placeOrder" class="row g-3 mb-3">
    <div class="col-md-6">
      <label for="firstName" class="form-label">First Name</label>
      <input v-model="firstName" type="text" :class="{ 'form-control': true, 'is-invalid': !firstNameValid}"  id="firstName" placeholder="First Name">
    </div>
    <div class="col-md-6">
      <label for="lastName" class="form-label">Last Name</label>
      <input v-model="lastName" type="text" :class="{ 'form-control': true, 'is-invalid': !lastNameValid}" id="lastName" placeholder="Last Name">
    </div>
    <div class="col-12">
      <label for="city" class="form-label">City</label>
      <input v-model="city" type="text" :class="{ 'form-control': true, 'is-invalid': !cityValid}" id="city" placeholder="City">
    </div>
    <div class="col-12">
      <label for="address" class="form-label">Address</label>
      <input v-model="address" type="text" :class="{ 'form-control': true, 'is-invalid': !addressValid}" id="address" placeholder="Address">
    </div>
    <div class="col-md-6">
      <label for="email" class="form-label">Email Address</label>
      <input v-model="email" type="email" :class="{ 'form-control': true, 'is-invalid': !emailValid}" id="email" placeholder="Email Address">
    </div>
    <div class="col-md-6">
      <label for="phone" class="form-label">Phone</label>
      <input v-model="phone" type="text" :class="{ 'form-control': true, 'is-invalid': !phoneValid}" id="phone" placeholder="+38(099) 999-99-99">
    </div>
    <div class="col-md-12 d-flex justify-content-end">
      <div class="modal-footer">
        <button type="submit" class="btn btn-success">Place Order</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "CartBuildingForm",
  data:() =>({
    firstName: "",
    lastName: "",
    city: "",
    address: "",
    email: "",
    phone: "",
    firstNameValid: true,
    lastNameValid: true,
    cityValid: true,
    addressValid: true,
    emailValid: true,
    phoneValid: true
  }),
  watch:{
    firstName(newValue){
      this.firstNameValid = !(newValue.length < 2 || newValue.length > 16);
    },
    lastName(newValue){
      this.lastNameValid = !(newValue.length < 2 || newValue.length > 16);
    },
    city(newValue){
      this.cityValid = !(newValue.length < 2 || newValue.length > 25);
    },
    address(newValue){
      this.addressValid = !(newValue.length < 5 || newValue.length > 30);
    },
    email(newValue){
      this.emailValid = !(newValue.length < 7 || newValue.length > 50);
    },
    phone(newValue){
      this.phoneValid = !(newValue.length < 4 || newValue.length > 18);
    }
  },


  methods:{
    placeOrder(){
      if (
          this.firstNameValid
          && this.lastNameValid
          && this.cityValid
          && this.addressValid
          && this.emailValid
          && this.phoneValid
          && this.firstName
          && this.lastName
          && this.city
          && this.address
          && this.email
          && this.phone
      ) {
        console.log("FirstName: ", this.firstName);
        console.log("LastName: ", this.lastName);
        console.log("City: ", this.city);
        console.log("Address: ", this.address);
        console.log("Email: ", this.email);
        console.log("Phone: ", this.phone);

        for (let product of this.$root.cartProducts) {
          console.log(product);
        }

        this.firstName="";
        this.lastName="";
        this.city="";
        this.address="";
        this.email="";
        this.phone="";

        let products = [];
        for (let product in this.$root.cartProducts) {
          if (this.$root.cartProducts.hasOwnProperty(product)) {
            products.push(product)
          }
        }
        products.forEach((element) => {
          this.$root.removeProduct(element);
        })

      }
    }
  }
}
</script>