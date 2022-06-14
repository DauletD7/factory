<template>
  <div>
    <div class="container mx-auto">
      <p class="text-center my-10 font-semibold text-3xl">Избранное</p>
      <div class="grid gap-5 md:flex flex-wrap justify-center">
        <div class="md:w-1/3" v-for="item of addedProducts" :key="item.id">
          <img :src="item.title" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FavouritesView",
  computed: mapGetters(["addedProducts"]),
  methods: mapActions(["addProduct"]),
  async mounted() {
    this.addProduct();
  },
}
</script>