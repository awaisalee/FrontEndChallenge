<template>
  <div class="col-span-10">
    <!-- Content area -->
    <div>
      <div class="mr-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
        <main class="flex-1">
          <div class="relative mx-auto max-w-4xl md:px-8 xl:px-0">
            <div class="pt-10 pb-16">
              <div class="px-4 sm:px-6 md:px-0">
                <div class="py-6">
                  <div class="mt-10">
                    <div class="space-y-1">
                      <h3 class="text-lg font-medium leading-6 text-gray-900">
                        Profile
                      </h3>
                    </div>
                    <div class="mt-6">
                      <div>
                        <div
                          v-if="showNameField"
                          class="py-4 sm:grid sm:grid-cols-3 sm:py-5 items-center"
                          @click="toggleNameField"
                        >
                          <div class="text-sm font-medium text-gray-500">
                            Name
                          </div>
                          <div
                            class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                          >
                            <span class="flex flex-grow">{{ name }}</span>
                            <span class="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                class="rounded-md bg-white font-medium text-purple-600 focus:ring-offset-2"
                              >
                                Edit
                              </button>
                            </span>
                          </div>
                        </div>
                        <div
                          v-else
                          class="sm:grid sm:grid-cols-3 sm:py-5 items-center"
                        >
                          <div>
                            <div class="text-sm font-medium text-gray-500">
                              Name
                            </div>
                          </div>
                          <div
                            class="flex text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                          >
                            <input
                              type="text"
                              name="name"
                              id="name"
                              v-model="name"
                              autocomplete="given-name"
                              class="py-3 pl-3 flex-grow block rounded-md border-gray-300 shadow-sm"
                            />
                            <span class="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                @click="toggleNameField"
                                class="rounded-md bg-white font-medium text-purple-600 focus:ring-offset-2"
                              >
                                Save
                              </button>
                            </span>
                          </div>
                        </div>
                        <div
                          v-if="showDobField"
                          class="py-4 sm:grid sm:grid-cols-3 sm:py-5 items-center sm:pt-5"
                        >
                          <div class="text-sm font-medium text-gray-500">
                            DOB
                          </div>
                          <div
                            class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                          >
                            <span class="flex flex-grow">{{ dob }}</span>
                            <span class="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                @click="toggleDobField"
                                class="rounded-md bg-white font-medium text-purple-600 focus:ring-offset-2"
                              >
                                Edit
                              </button>
                            </span>
                          </div>
                        </div>
                        <div
                          v-else
                          class="py-4 sm:grid sm:grid-cols-3 sm:py-5 items-center sm:pt-5"
                        >
                          <div class="text-sm font-medium text-gray-500">
                            DOB
                          </div>
                          <div
                            class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                          >
                            <span class="flex flex-grow">
                              <datepicker
                                :value="dob"
                                @selected="changeDobField"
                                format="MM/dd/yyyy"
                                inputClass="py-3 pl-3 flex-grow block rounded-md border-gray-300 shadow-sm"
                              />
                            </span>
                            <span class="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                @click="toggleDobField"
                                class="rounded-md bg-white font-medium text-purple-600 focus:ring-offset-2"
                              >
                                Save
                              </button>
                            </span>
                          </div>
                        </div>
                        <div
                          v-if="showGenderField"
                          class="py-4 sm:grid sm:grid-cols-3 sm:py-5 items-center"
                        >
                          <div class="text-sm font-medium text-gray-500">
                            Gender
                          </div>
                          <div
                            class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                          >
                            <span class="flex flex-grow">{{ gender }}</span>
                            <span class="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                @click="toggleGenderField"
                                class="rounded-md bg-white font-medium text-purple-600 focus:ring-offset-2"
                              >
                                Edit
                              </button>
                            </span>
                          </div>
                        </div>
                        <div
                          v-else
                          class="py-4 sm:grid sm:grid-cols-3 sm:py-5 items-center"
                        >
                          <div class="text-sm font-medium text-gray-500">
                            Gender
                          </div>
                          <div
                            class="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                          >
                            <select
                              v-model="gender"
                              id="gender"
                              name="gender"
                              autocomplete="gender-name"
                              class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Other">Other</option>
                            </select>
                            <span class="ml-4 flex-shrink-0">
                              <button
                                type="button"
                                @click="toggleGenderField"
                                class="rounded-md bg-white font-medium text-purple-600 focus:ring-offset-2"
                              >
                                Save
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Datepicker from "vuejs-datepicker";

export default defineComponent({
  name: "Profile",
  data() {
    return {
      name: "Awais",
      showNameField: true,
      dob: "07/12/1995",
      showDobField: true,
      gender: "Male",
      showGenderField: true,
    };
  },
  methods: {
    toggleNameField() {
      this.showNameField = !this.showNameField;
    },
    toggleDobField() {
      this.showDobField = !this.showDobField;
    },
    toggleGenderField() {
      this.showGenderField = !this.showGenderField;
    },
    changeDobField(date) {
      const newDate = new Date(date);
      this.dob = `${newDate.getMonth() + 1 < 10 ? "0" : ""}${
        newDate.getMonth() + 1
      }/${
        newDate.getDate() + 1 < 10 ? "0" : ""
      }${newDate.getDate()}/${newDate.getFullYear()}`;
    },
  },
  components: {
    Datepicker,
  },
});
</script>

<style scoped></style>
