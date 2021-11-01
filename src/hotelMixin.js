import { required, minLength, maxLength, email, between, numeric } from 'vuelidate/lib/validators';
export const hotelMixin = {
  data() {
    return {
      person: [],
      form: {
        name: null,
        surname: null,
        email: null,
        age: null,
        selectedGender: null,
        Identity: null,
        phone: null,
        hes: null,
      },
    };
  },

  validations: {
    form: {
      name: {
        required,
      },
      surname: {
        required,
      },
      email: {
        required,
        email,
      },
      age: {
        required,
        between: between(6, 120),
        numeric,
      },
      selectedGender: {
        required,
      },
      Identity: {
        required,
        format(val) {
          if (val === undefined || val === null || val.length !== 11) {
            return false;
          }
          return true;
        },
      },
      phone: {
        minLength: minLength(10),
        maxLength: maxLength(10),
        phone(val) {
          if (val && val[0] === '5') {
            return true;
          }
          return false;
        },
      },
      hes: {
        required,
        format(val) {
          if (val === undefined || val === null || val.length !== 12 || val.split('')[4] !== '-' || val.split('')[9] !== '-') {
            return false;
          }
          return true;
        },
      },
    },
  },
  methods: {
    toggleToItemEditForm() {
      this.$refs.refInput.focus();
    },
  },
};
