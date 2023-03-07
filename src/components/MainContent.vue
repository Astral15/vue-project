  
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore()
const videos = computed(() => store.getters['videos/getFilterVideos'])

// const playVideo = function(src) {
//   location.href =src
// }

</script>

<template>
  <div class="video-list">
    <div class="video" v-for="video in videos" :key="video.index">
      <router-link :to="{name: 'Videos' , params: {id: video.id}}" >
        <img :src="video.thumbnail" :alt="video.title" class="thumbnail">
      </router-link>
      <div class="info">
        <h2 class="title">{{ video.title }}</h2>
        <p class="channel">{{ video.channel }}</p>
        <p class="views">{{ video.views }} views</p>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
.video-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.video {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 250px;
}

.thumbnail {
  width: 100%;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
}

.title {
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.channel {
  font-size: 14px;
  color: #777;
  margin: 5px 0 0;
}

.views {
  font-size: 14px;
  color: #777;
  margin: 5px 0 0;
}
</style>
  