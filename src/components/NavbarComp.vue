<template>
  <div class="bg-black py-5">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/">
        <img src="../assets/logo.png" alt="">
      </router-link>
      <router-link to="/favourites">
        <div class="flex items-center text-white">
          <i class="fa-regular fa-heart"></i>
          <p class="ml-3">Избранное</p>
        </div>
      </router-link>     
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComp',
}
</script>
