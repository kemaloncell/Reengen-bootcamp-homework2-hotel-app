<template>
  <div>
    <HotelForm v-for="(data, i) in peopleCount * 1" :peopleCount="data" :key="i" @submitted="submitForm()"> </HotelForm>
    <div class="d-flex justify-content-center">
      <button :disabled="isButtonDisabled" data-toggle="modal" data-target="#exampleModalLong" class="btnConfirm mb-5">go to pay</button>
    </div>
  </div>
</template>

<script>
import HotelForm from './HotelForm.vue';
export default {
  name: 'Reservation',
  components: {
    HotelForm,
  },
  data() {
    return {
      peopleCount: 0,
      isButtonDisabled: true,
      clickCount: 0,
    };
  },
  methods: {
    submitForm() {
      this.clickCount += 1;
      if (this.clickCount == this.peopleCount) {
        this.isButtonDisabled = false;
      }
    },
  },
  created() {
    this.peopleCount = this.$route.query.data;
    console.log(this.peopleCount);
  },
};
</script>

<style scoped>
.btnConfirm {
  margin-top: 2%;
  border: none;
  border-radius: 1.5rem;
  padding: 1%;
  background: #0062cc;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  width: 50%;
  cursor: pointer;
}
.btnConfirm:hover {
  opacity: 0.8;
}
</style>
