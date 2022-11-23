<template>
  <div class="col-span-10">
    <div class="w-6/12 mx-auto container mt-52">
      <div class="w-full mx-auto mb-5">
        <span class="text-lg font-bold">Payment Section</span>
      </div>
      <form class="relative w-100 max-w-3xl" @submit.prevent="submit">
        <fieldset class="m-3 mt-0">
          <div
            class="border rounded border-transparent shadow-inner border-solid items-center"
          >
            <input
              id="name"
              v-model="name"
              type="text"
              placeholder="Card Holder Name"
              class="p-3 bg-transparent appearance-none outline-none border-none w-full"
              required=""
              maxlength="50"
              autocomplete="name"
            />
          </div>
        </fieldset>
        <fieldset>
          <div class="">
            <StripeElementCard
              :pk="pk"
              :ref="'stripeElement'"
              :style="{ width: '95%', marginLeft: '15px' }"
              :classes="{ 'mt-52': true }"
              :testMode="true"
              :tokenData="tokenData"
              :hidePostalCode="true"
              @token="tokenCreated"
            />
          </div>
        </fieldset>
        <button
          type="submit"
          class="block w-responsive mt-10 mx-3.5 mb-0 bg-indigo-700 shadow-xl rounded h-10 font-semibold text-white"
        >
          Submit
        </button>
      </form>
    </div>
    <div
      v-if="modalStatus"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"
          >
            <div>
              <div
                class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
              >
                <!-- Heroicon name: outline/check -->
                <svg
                  class="h-6 w-6 text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <div class="mt-3 text-center sm:mt-5">
                <h3
                  class="text-lg font-medium leading-6 text-gray-900"
                  id="modal-title"
                >
                  Payment successful
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500"></p>
                </div>
              </div>
            </div>
            <div class="mt-5 sm:mt-6">
              <button
                type="button"
                @click="closeModal"
                class="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
              >
                Go back to dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue, { defineComponent } from "vue";
import { StripeElementCard, StripePlugin } from "@vue-stripe/vue-stripe";

Vue.use(StripePlugin, {
  pk: process.env.VUE_APP_STRIPE_PK_TEST_KEY,
});

export default defineComponent({
  data() {
    return {
      pk: process.env.VUE_APP_STRIPE_PK_TEST_KEY,
      sk: process.env.VUE_APP_STRIPE_PAYMENT_TEST_KEY,
      name: "",
      modalStatus: false,
    };
  },
  computed: {
    tokenData() {
      return { name: this.name };
    },
  },
  components: {
    StripeElementCard,
  },
  methods: {
    submit() {
      this.$refs.stripeElement.submit();
    },
    closeModal() {
      this.modalStatus = false;
    },
    tokenCreated(token) {
      console.log(token);
      this.modalStatus = true;
    },
  },
});
</script>

<style scoped>
#stripe-element-errors {
  color: red;
  margin-top: 10px;
}
.w-responsive {
  width: calc(100% - 30px);
}
</style>
