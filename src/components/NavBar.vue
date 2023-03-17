<template>
  <nav class="flex items-center justify-between flex-wrap bg-darkGray p-5">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img class="w-24 my-auto" src="../assets/sprout-logo.png" />
      <span class="text-4xl tracking-tight ml-2 text-lightGray">| HR</span>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="flex justify-end text-md lg:flex-grow">
        <a
          href="#"
          class="block mt-4 lg:inline-block lg:mt-0 text-lightGray hover:text-white mr-6"
          v-for="navBarItem in navBarItems"
          :key="`nav-bar-${navBarItem.name}`"
        >
          {{ navBarItem.name }}
          <font-awesome-icon icon="fa-caret-down" v-if="navBarItem.dropdown">
          </font-awesome-icon>
        </a>
      </div>
      <div class="text-lightGray mr-6">
        <input class="bg-darkGray outline-none border-b-2 text-center text-lightGray border-lightGray" placeholder="employee search" />
        <font-awesome-icon class="text-xl" icon="fa-search"></font-awesome-icon>
      </div>
      <div class="text-lightGray mr-6">
        <font-awesome-icon class="text-2xl" icon="fa-bell"></font-awesome-icon>
      </div>
      <div class="flex justify-center items-center">
        <div class="rounded-full w-6 h-6 bg-lightGray"></div>
        <a
          href="#"
          class="inline-block text-sm pl-4 pr-1 py-2 leading-none text-lightBlue mt-4 lg:mt-0"
          >Admin</a
        >
        <font-awesome-icon class="text-lightBlue" icon="fa-caret-down"></font-awesome-icon>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navBarItems: [
        {
          name: "My Requests",
          dropdown: true,
        },
        {
          name: "My Team",
          dropdown: true,
        },
        {
          name: "Company",
          dropdown: true,
        },
        {
          name: "Administration Tools",
          dropdown: true,
        },
        {
          name: "Maintenance",
          dropdown: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
