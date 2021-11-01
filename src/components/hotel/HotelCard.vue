<template>
  <div class="container-fluid px-4 py-5 mx-auto">
    <div class="row d-flex justify-content-center" v-for="(hotelItems, i) in hotels" :key="i">
      <div class="card border-0 w-50">
        <div class="row set-p justify-content-center">
          <div><img class="image active" :src="require(`../../assets/img/${hotelItems.img}`)" /></div>
          <div class="col-12">
            <div class="row px-3 mt-3">
              <h3 class="font-weight-bold">{{ hotelItems.title }}</h3>
            </div>
            <div class="row px-3 mb-2 mt-2 align-items-center">
              <i v-for="(rating, i) in hotelItems.rating" :key="i" class="fa fa-star star"></i>
              <span v-if="hotelItems.rating < 5"> <i v-for="(data, i) in 5 - hotelItems.rating" :key="i" class="fa fa-star notChecked"></i> </span>
            </div>
            <div class="row px-3"></div>
            <div class="row px-3">
              <p class="mb-4">{{ hotelItems.location }} &middot; 2.6 km from center</p>
            </div>
            <div class="line"></div>
            <div class="row px-3 mt-4">
              <h5 class="text-secondary mb-1">Sky Suite</h5>
            </div>
            <div class="row px-3 mb-4 justify-content-between">
              <h2 class="text-success mb-1 font-weight-bold">${{ hotelItems.price }}</h2>
              <button @click="navigatedToDetail(hotelItems.id)" class="btn-lg btn-primary">Choose</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import hotelJson from '../../assets/hotel.json';
export default {
  name: 'HotelCard',
  data() {
    return {
      hotels: hotelJson,
      id: this.$route.params.id,
    };
  },
  methods: {
    navigatedToDetail(id) {
      this.$router.push({ path: `hotel/${id}`, query: { data: this.hotels[id - 1] } });
    },
  },
};
</script>

<style scoped>
body {
  color: #000;
  overflow-x: hidden;
  height: 100%;
  background-color: #e1bee7;
  background-repeat: no-repeat;
}

.card {
  width: 590px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px blue;
  margin-top: 50px;
  margin-bottom: 50px;
}

.set-p {
  padding-left: 15px;
  padding-right: 15px;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: none;
}

.image.active {
  display: block;
}

.rating {
  background-color: #3d5afe;
  color: #fff;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.grade {
  font-size: 18px;
}

.line {
  height: 1px;
  background-color: #e0e0e0;
}

.text-sm {
  font-size: 14px;
}
.star {
  color: #fbc02d;
}
</style>
