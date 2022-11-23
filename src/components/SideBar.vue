<template>
  <div class="col-span-2">
    <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
    <div
      v-if="sideBarOpened"
      class="relative z-40 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75"></div>

      <div class="fixed inset-0 z-40 flex">
        <div
          class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4"
        >
          <div class="absolute top-0 right-0 -mr-14 p-1">
            <button
              type="button"
              @click="toggleSideBar"
              class="flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none"
            >
              <!-- Heroicon name: outline/x-mark -->
              <svg
                class="h-6 w-6 text-white"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span class="sr-only">Close sidebar</span>
            </button>
          </div>

          <div class="flex flex-shrink-0 items-center px-4">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600"
              alt="Easywire"
            />
          </div>
          <div class="mt-5 h-0 flex-1 overflow-y-auto">
            <nav class="flex h-full flex-col">
              <div class="space-y-1">
                <!-- Current: "bg-purple-50 border-purple-600 text-purple-600", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                <router-link
                  to="/profile"
                  class="border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
                  exact-active-class="bg-purple-50 border-purple-600 text-purple-600 group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
                >
                  <!-- Heroicon name: outline/home -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  Profile
                </router-link>
                <router-link
                  to="/payments"
                  class="border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
                  exact-active-class="bg-purple-50 border-purple-600 text-purple-600 group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
                >
                  <!-- Heroicon name: outline/home -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>

                  Payments
                </router-link>
              </div>
            </nav>
          </div>
        </div>

        <div class="w-14 flex-shrink-0" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <nav
        class="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-gray-50 pt-5 pb-4"
      >
        <div class="flex flex-shrink-0 items-center px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=600"
            alt="Easywire"
          />
        </div>
        <div class="mt-5 flex-grow">
          <div class="space-y-1">
            <!-- Current: "bg-purple-50 border-purple-600 text-purple-600", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
            <router-link
              to="/profile"
              class="border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
              exact-active-class="bg-purple-50 border-purple-600 text-purple-600 group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
            >
              <!-- Heroicon name: outline/home -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              Profile
            </router-link>
            <router-link
              to="/payments"
              class="border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50 group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
              exact-active-class="bg-purple-50 border-purple-600 text-purple-600 group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
            >
              <!-- Heroicon name: outline/home -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                />
              </svg>

              Payments
            </router-link>
          </div>
        </div>
      </nav>
    </div>

    <!-- Content area -->
    <div class="md:pl-64">
      <div class="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
        <div
          class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white"
        >
          <button
            type="button"
            v-if="!sideBarOpened"
            @click="toggleSideBar"
            class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden"
          >
            <span class="sr-only">Open sidebar</span>
            <!-- Heroicon name: outline/bars-3-bottom-left -->
            <svg
              class="h-6 w-6"
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
  data() {
    return {
      sideBarOpened: false,
    };
  },
  methods: {
    toggleSideBar() {
      this.sideBarOpened = !this.sideBarOpened;
    },
  },
});
</script>

<style scoped></style>
