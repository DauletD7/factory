<template>
    <div class="singleBlock" 
    v-bind:style="{ 'background-image': 'url(' + $route.params.item.urls.regular + ')', 'background-size': '100%' }">
        <div class="container mx-auto">
            <div class="flex justify-between py-10">
                <div class="flex items-center">
                    <img class="mr-5 rounded-lg" :src="$route.params.item.user.profile_image.medium" alt="">
                    <div>
                        <p class="text-3xl">{{$route.params.item.user.name}}</p>
                        <p v-if="$route.params.item.user.instagram_username != null">
                            {{$route.params.item.user.instagram_username}}
                        </p>
                        <p v-if="$route.params.item.user.twitter_username != null">
                            {{$route.params.item.user.twitter_username}}
                        </p>
                    </div>
                </div>
            </div>
            <img class="w-full rounded-2xl single-b"
            :src="$route.params.item.urls.regular" alt="">
        </div>
    </div>
</template>
<style scoped>
  .single-b{
    margin-bottom: -400px;
  }
</style>
<script>
export default {
    name: 'SingleView',
}
</script>

