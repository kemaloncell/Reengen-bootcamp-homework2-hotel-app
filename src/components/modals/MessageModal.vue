<template>
  <div class="container d-flex justify-content-center">
    <div id="exampleModalCenter" class="modal fade mainBody" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border-0">
          <div class="modal-body p-0">
            <div class="complate-card border-0 p-sm-2 p-2 justify-content-center">
              <div class="complate-card-header pb-0 bg-white border-0">
                <div class="row">
                  <div class="col ml-auto">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                </div>
                <p class="font-weight-bold mb-2">Your payment has been made successfully</p>
                <p class="text-muted">
                  Thank you for choosing us <b>{{ customerName }}</b>
                </p>
              </div>
              <div class="complate-card-body px-sm-4 mb-2 pt-1 pb-0">
                <div class="row no-gutters">
                  <div class="col-auto"><button type="button" @click="closeForm" class="btn btn-success px-4" data-dismiss="modal">Okey</button></div>
                  <div class="col-auto"><button type="button" class="btn btn-light text-muted" data-dismiss="modal">Cancel</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageModal',
  props: ['customerName'],
  methods: {
    closeForm() {
      window.location.href = '/';
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap');

.mainBody {
  font-family: 'Rubik', sans-serif;
  background: #eee;
}

.complate-card {
  border-radius: 12px;
  width: calc(500px + 10 * ((100vw - 320px) / 680));
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.8);
}

.complate-card-header {
  border-radius: 12px !important;
}

.complate-modal-body .btn-danger {
  border-radius: 11px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
}

.btn-light {
  background: transparent !important;
  border: 0px !important;
}

.btn-light:hover {
  border-color: #fff !important;
}

.btn-light:active {
  border-color: #fff !important;
}

span {
  font-size: 30px !important;
}

.complate-modal-content {
  background: transparent !important;
}

@media (max-width: 526px) {
  .complate-card {
    width: unset;
  }
}
</style>
