<template>
  <div class="bg-indigo-50 shadow-xl">
    <nav class="grid grid-cols-6 content-center h-20">
      <div class="col-start-2">
        <router-link to="/">
          <h1 class="text-3xl text-black">Website Name(HOME)</h1>
        </router-link>
      </div>
      <div class="flex col-start-4 gap-10">
        <router-link to="/collections">
          <h2 class="text-2xl">Collections</h2>
        </router-link>
        <router-link to="/market">
          <h2 class="text-2xl">Market</h2>
        </router-link>
      </div>
      <div class="col-start-6 text-end pr-10">
        <h2 class="text-xl">Login/Create</h2>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped>

</style>