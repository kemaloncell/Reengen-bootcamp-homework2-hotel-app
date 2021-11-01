<template>
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card p-3">
            <div class="row justify-content-center">
              <div class="col-12">
                <h2 class="heading text-center">Payment Dialog</h2>
              </div>
            </div>
            <form onsubmit="event.preventDefault()" class="form-card">
              <div class="row justify-content-center mb-4 radio-group">
                <div class="col-sm-3 col-5">
                  <div class="radio mx-auto" data-value="dk"><img class="fit-image" src="https://i.imgur.com/5TqiRQV.jpg" width="105px" height="55px" /></div>
                </div>
                <div class="col-sm-3 col-5">
                  <div class="radio mx-auto" data-value="visa"><img class="fit-image" src="https://i.imgur.com/OdxcctP.jpg" width="105px" height="55px" /></div>
                </div>
                <div class="col-sm-3 col-5">
                  <div class="radio mx-auto" data-value="master"><img class="fit-image" src="https://i.imgur.com/WIAP9Ku.jpg" width="105px" height="55px" /></div>
                </div>
                <div class="col-sm-3 col-5">
                  <div class="radio mx-auto" data-value="paypal"><img class="fit-image" src="https://i.imgur.com/cMk1MtK.jpg" width="105px" height="55px" /></div>
                </div>
                <br />
              </div>

              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="input-group"><input type="text" ref="input" v-model="inputCustomerName" name="Name" placeholder="John Doe" required /> <label>Name</label></div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="input-group"><input type="text" name="card-no" placeholder="0000 0000 0000 0000" minlength="19" maxlength="19" required /> <label>Card Number</label></div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-12">
                  <div class="row">
                    <div class="col-6">
                      <div class="input-group"><input type="text" name="expdate" placeholder="MM/YY" minlength="5" maxlength="5" required /> <label>Expiry Date</label></div>
                    </div>
                    <div class="col-6">
                      <div class="input-group"><input type="password" placeholder="..." minlength="3" maxlength="3" required /> <label>CVV</label></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-12">
                  <input
                    data-toggle="modal"
                    @click="changedName(inputCustomerName)"
                    data-target="#exampleModalCenter"
                    :disabled="!$refs.input || $refs.input.dataset.defVal == $refs.input.value"
                    type="submit"
                    value="Complate"
                    class="btn btn-pay placeicon"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentModal',
  props: ['customerName'],
  data() {
    return {
      inputCustomerName: '',
    };
  },
  methods: {
    changedName(inputCustomerName) {
      this.customerName = inputCustomerName;
      this.$emit('nameWasEditted', this.customerName);
    },
    mounted() {
      this.$refs.input.dataset.defVal = this.$refs.input.value;
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px !important;
  margin-top: 60px;
  margin-bottom: 60px;
}

.form-card {
  margin-left: 20px;
  margin-right: 20px;
}

.form-card input,
.form-card textarea {
  padding: 10px 15px 5px 15px;
  border: none;
  border: 1px solid lightgrey;
  border-radius: 6px;
  margin-bottom: 25px;
  margin-top: 2px;
  width: 100%;
  box-sizing: border-box;
  font-family: arial;
  color: #2c3e50;
  font-size: 14px;
  letter-spacing: 1px;
}

.form-card input:focus,
.form-card textarea:focus {
  -moz-box-shadow: 0px 0px 0px 1.5px skyblue !important;
  -webkit-box-shadow: 0px 0px 0px 1.5px skyblue !important;
  box-shadow: 0px 0px 0px 1.5px skyblue !important;
  font-weight: bold;
  border: 1px solid #304ffe;
  outline-width: 0;
}

.input-group {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.input-group input {
  position: relative;
  height: 80px;
  margin-left: 1px;
  margin-right: 1px;
  border-radius: 6px;
  padding-top: 30px;
  padding-left: 25px;
}

.input-group label {
  position: absolute;
  height: 24px;
  background: none;
  border-radius: 6px;
  line-height: 48px;
  font-size: 15px;
  color: gray;
  width: 100%;
  font-weight: 100;
  padding-left: 25px;
}

input:focus + label {
  color: #304ffe;
}

.btn-pay {
  background-color: #304ffe;
  height: 60px;
  color: #ffffff !important;
  font-weight: bold;
}

.btn-pay:hover {
  background-color: #3f51b5;
}

.fit-image {
  width: 100%;
  object-fit: cover;
}

img {
  border-radius: 5px;
}
</style>
