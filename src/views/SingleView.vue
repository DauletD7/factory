<template>
    <div class="singleBlock relative" v-bind:style="{ 'background-image': 'linear-gradient(rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .5) 100%), url(' + $route.params.item.urls.regular + ')'}" >
        <div class="container mx-auto">
            <div class="flex justify-between py-10">
                <div class="flex items-center">
                    <img class="mr-5 rounded-lg" :src="$route.params.item.user.profile_image.medium" alt="">
                    <div class="md:text-white single-content">
                        <p class="md:text-3xl text-lg">{{$route.params.item.user.name}}</p>
                        <p class="text-gray-500 md:text-white" v-if="$route.params.item.user.instagram_username != null">
                            {{$route.params.item.user.instagram_username}}
                        </p>
                        <p class="text-gray-500 md:text-white" v-if="$route.params.item.user.twitter_username != null">
                            {{$route.params.item.user.twitter_username}}
                        </p>
                    </div>
                </div>
                <div class="flex items-center">
                    <div @click="sendData()" class="bg-white p-3 mr-5 rounded-lg">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <a :href="$route.params.item.urls.regular" download="">
                        <div class="flex items-center bg-mainBtn py-3 px-5">
                            <img class="mr-2" src="../assets/icon.png" alt="">
                            <p>Downloand</p>
                        </div>
                    </a>               
                </div>
            </div>
            <img class="w-full rounded-2xl single-b"
            :src="$route.params.item.urls.regular" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'SingleView',

    methods: {
        async sendData(){
            await axios.post(`http://localhost:3001/catalog`, {title: this.$route.params.item.urls.regular});
        }        
    }
}
</script>

