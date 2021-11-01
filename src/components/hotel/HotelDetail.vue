<template>
  <div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td bgcolor="#1746e0" align="center">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
            <tr>
              <td align="center" valign="top" style="padding: 40px 10px 40px 10px"></td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td bgcolor="#1746e0" align="center" style="padding: 0px 10px 0px 10px">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
            <tr>
              <td class="cardGreeting" bgcolor="#ffffff" align="center" valign="top">
                <h1 style="font-size: 48px; font-weight: 400; margin: 2">Welcome!</h1>
                <img src=" https://img.icons8.com/clouds/100/000000/handshake.png" width="125" height="120" style="display: block; border: 0px" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td bgcolor="#e1e1e1" align="center" style="padding: 0px 10px 0px 10px">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px">
            <tr>
              <td class="cardDesc">
                <p>Thank you for choosing us, first of all, how many people will you be?</p>
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td class="cardSelect">
                      <div class="form-group row">
                        <label for="colFormLabelLg" class="col-sm-2 col-form-label col-form-label-lg">Choose</label>
                        <div class="col-sm-8">
                          <input type="number" min="1" @change="changePersonCount(numberOfPeople)" v-model="numberOfPeople" class="form-control form-control-lg" id="colFormLabelLg" placeholder="number of people?" />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px">
                      <table border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td>
                            <button @click="peopleCount(numberOfPeople)" class="cardBtn">Confirm Reservation</button>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td class="cardText">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi, sint sequi, ratione delectus praesentium reprehenderit error ea voluptate nihil non?</p>
              </td>
            </tr>
            <tr>
              <td class="cardTeam">
                <p>
                  Cheers,<br /><b>{{ hotelData.title }}</b> Team
                </p>
                <p>
                  From <b>{{ hotelData.location }}</b>
                </p>
                <p>
                  Price <b>${{ totalPrice == 0 ? hotelData.price : totalPrice }}</b>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HotelDetail',

  data() {
    return {
      hotelData: [],
      numberOfPeople: 1,
      totalPrice: 0,
      id: this.$route.params.id,
    };
  },
  methods: {
    peopleCount(numberOfPeople) {
      this.$router.push({ path: `/hotel/${this.id}/reservation`, query: { data: numberOfPeople } });
    },
    changePersonCount(numberOfPeople) {
      this.totalPrice = this.hotelData.price * numberOfPeople;
    },
  },
  created() {
    this.hotelData = this.$route.query.data;
  },
};
</script>

<style scoped>
@media screen {
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
  }
}

/* CLIENT-SPECIFIC STYLES */
body,
table,
td,
a {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

table,
td {
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
}

img {
  -ms-interpolation-mode: bicubic;
}

/* RESET STYLES */
img {
  border: 0;
  height: auto;
  line-height: 100%;
  outline: none;
  text-decoration: none;
}

table {
  border-collapse: collapse !important;
}

body {
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
}

/* iOS BLUE LINKS */
a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
}

/* MOBILE STYLES */
@media screen and (max-width: 600px) {
  h1 {
    font-size: 32px !important;
    line-height: 32px !important;
  }
}

/* ANDROID CENTER FIX */
div[style*='margin: 16px 0;'] {
  margin: 0 !important;
}
.cardDesc {
  padding: 20px 30px 40px 30px;
  color: #666666;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  background-color: #fff;
}
.cardGreeting {
  padding: 40px 20px 20px 20px;
  border-radius: 4px 4px 0px 0px;
  color: #111111;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 4px;
  line-height: 48px;
}
.cardTeam {
  padding: 0px 30px 40px 30px;
  border-radius: 0px 0px 4px 4px;
  color: #666666;
  margin-top: 20px;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  background-color: #fff;
}
.cardText {
  padding: 0px 30px 0px 30px;
  color: #666666;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  background-color: #fff;
}
.cardBtn {
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
  color: #ffffff;
  text-decoration: none;
  color: #ffffff;
  text-decoration: none;
  padding: 15px 25px;
  border-radius: 2px;
  border: 1px solid #1746e0;
  display: inline-block;
  border-radius: 3px;
  background-color: #1746e0;
}
.cardSelect {
  font-size: 20px;
  font-family: Helvetica, Arial, sans-serif;
  color: #ffffff;
  display: flex;
  justify-content: center;
  background-color: #fff;
}
</style>
