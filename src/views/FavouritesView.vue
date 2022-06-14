<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-wrap my-10 justify-between">
        <div class="w-1/5" v-for="item of addedProducts" :key="item.id">
          <img :src="item.title" alt="">
          <h1>dsdassa</h1>
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
    this.addedProducts();
  },
}
</script>