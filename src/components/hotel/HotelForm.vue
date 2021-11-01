<template>
  <div>
    <div class="container countPeople"></div>
    <div class="container register">
      <div class="row">
        <div class="col-md-3 register-left">
          <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          <h3>Welcome</h3>
          <p>Let's fill in the blanks to complete the process!</p>
        </div>
        <div class="col-md-9 register-right">
          <div class="tab-content">
            <div class="tab-pane fade show active">
              <h3 class="register-heading">{{ peopleCount }}. Person</h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <!-- Name--->
                  <div class="form-group">
                    <input type="text" ref="refInput" @input="$v.name.$touch()" v-model.trim="name" :class="{ 'is-invalid': $v.name.$error }" class="form-control" placeholder="First Name *" />
                    <small v-if="!$v.name.required && $v.name.$anyDirty" class="form-text text-danger">This field is required</small>
                  </div>
                  <!-- Surname--->
                  <div class="form-group">
                    <input type="text" @blur="$v.surname.$touch()" :class="{ 'is-invalid': $v.surname.$error }" v-model.trim="surname" class="form-control" placeholder="Last Name *" value="" />
                    <small v-if="!$v.surname.required && $v.surname.$anyDirty" class="form-text text-danger">This field is required</small>
                  </div>
                  <!-- Age--->
                  <div class="form-group">
                    <input type="number" @blur="$v.age.$touch()" :class="{ 'is-invalid': $v.age.$error }" v-model.trim="age" class="form-control" placeholder="Age" />
                    <small v-if="!$v.age.required && $v.age.$anyDirty" class="form-text text-danger">This field is required</small>
                    <small v-if="!$v.age.between && $v.age.$anyDirty" class="form-text text-danger">Must be a minimum of 6 age</small>
                  </div>
                  <!-- Identity--->
                  <div class="form-group">
                    <input type="number" @blur="$v.Identity.$touch()" :class="{ 'is-invalid': $v.Identity.$error }" v-model.trim="Identity" class="form-control" placeholder="12385454582" />
                    <small v-if="!$v.Identity.required && $v.Identity.$anyDirty" class="form-text text-danger">This field is required</small>
                    <small v-if="!$v.Identity.format && $v.Identity.$anyDirty" class="form-text text-danger"> TC No is not at expected form</small>
                  </div>
                  <!-- Gender--->
                  <div class="form-group">
                    <select @blur="$v.selectedGender.$touch()" :class="{ 'is-invalid': $v.selectedGender.$error }" v-model.trim="selectedGender" class="form-control">
                      <option>Man</option>
                      <option>Woman</option>
                      form.
                    </select>
                    <small v-if="!$v.selectedGender.required && $v.selectedGender.$anyDirty" class="form-text text-danger">This field is required</small>
                  </div>
                </div>
                <!-- Email--->
                <div class="col-md-6">
                  <div class="form-group">
                    <input type="email" @blur="$v.email.$touch()" :class="{ 'is-invalid': $v.email.$error }" v-model.trim="email" class="form-control" placeholder="name@example.com" />
                    <small v-if="!$v.email.required && $v.email.$anyDirty" class="form-text text-danger">This field is required</small>
                    <small v-if="!$v.email.email && $v.email.$anyDirty" class="form-text text-danger">Please enter the valid email</small>
                  </div>
                  <!-- Phone--->
                  <div class="form-group">
                    <input type="text" @blur="$v.phone.$touch()" :class="{ 'is-invalid': $v.phone.$error }" v-model.trim="phone" class="form-control" placeholder="Your Phone *" />
                    <small class="form-text text-secondary">Exp: 5554443322</small>
                    <small v-if="(!$v.phone.phone || !$v.phone.minLength || !$v.phone.maxLength) && $v.phone.$anyDirty" class="form-text text-danger">Phone is not at expected form</small>
                  </div>

                  <div class="form-group">
                    <input type="text" @blur="$v.hes.$touch()" :class="{ 'is-invalid': $v.hes.$error }" v-model.trim="hes" class="form-control" placeholder="Hes Code*" value="" />
                    <small class="form-text text-secondary">Exp: AA11-1111-A1</small>
                    <small v-if="!$v.hes.required && $v.hes.$anyDirty" class="form-text text-danger">This field is required</small>
                    <small v-if="!$v.hes.format && $v.hes.$anyDirty" class="form-text text-danger">HES Code is not at expected form</small>
                  </div>
                  <button @click="toggleToItemEditForm()" type="submit" class="btnRegister">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PaymentModal @nameWasEditted="customerName = $event" :customerName="customerName" />

    <MessageModal :customerName="customerName" />
  </div>
</template>

<script>
import { hotelMixin } from '../../hotelMixin';
import PaymentModal from '../modals/PaymentModal.vue';
import MessageModal from '../modals/MessageModal.vue';
export default {
  name: 'HotelForm',
  components: {
    PaymentModal,
    MessageModal,
  },
  mixins: [hotelMixin],
  props: ['peopleCount'],
  data() {
    return {
      customerName: '',
    };
  },
};
</script>

<style scoped>
.countPeople {
  margin-top: 150px;
  font-size: 25px;
  font-weight: 500;
  border-bottom: 2px solid rgb(139, 139, 247);
}

.register {
  background: -webkit-linear-gradient(left, #3931af, #00c6ff);
  margin-top: 3%;
  padding: 3%;
}
.register-left {
  text-align: center;
  color: #fff;
  margin-top: 4%;
}
.register-left input {
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  width: 60%;
  background: #f8f9fa;
  font-weight: bold;
  color: #383d41;
  margin-top: 30%;
  margin-bottom: 3%;
  cursor: pointer;
}
.register-right {
  background: #f8f9fa;
  border-top-left-radius: 10% 50%;
  border-bottom-left-radius: 10% 50%;
}
.register-left img {
  margin-top: 15%;
  margin-bottom: 5%;
  width: 25%;
  -webkit-animation: mover 2s infinite alternate;
  animation: mover 1s infinite alternate;
}
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
.register-left p {
  font-weight: lighter;
  padding: 12%;
  margin-top: -9%;
}
.register .register-form {
  padding: 10%;
  margin-top: 10%;
}
.btnRegister {
  float: right;
  margin-top: 10%;
  border: none;
  border-radius: 1.5rem;
  padding: 2%;
  background: #0062cc;
  color: #fff;
  font-weight: 600;
  width: 50%;
  cursor: pointer;
}

.register .nav-tabs {
  margin-top: 3%;
  border: none;
  background: #0062cc;
  border-radius: 1.5rem;
  width: 28%;
  float: right;
}
.register .nav-tabs .nav-link {
  padding: 2%;
  height: 34px;
  font-weight: 600;
  color: #fff;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover {
  border: none;
}
.register .nav-tabs .nav-link.active {
  width: 100px;
  color: #0062cc;
  border: 2px solid #0062cc;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.register-heading {
  text-align: center;
  margin-top: 8%;
  margin-bottom: -15%;
  color: #495057;
}
</style>
