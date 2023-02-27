  
<script>
export default {
  name: 'MainContent',
  data() {
    return {
      videos: [
        {
          title: 'Video 1',
          channel: 'Channel 1',
          views: '10K',
          thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
          src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
        },
        {
          title: 'Video 2',
          channel: 'Channel 2',
          views: '20K',
          thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
          src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
        },
        {
          title: 'Video 3',
          channel: 'Channel 3',
          views: '200K',
          thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
          src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
        },
        {
          title: 'Video 4',
          channel: 'Channel 4',
          views: '205K',
          thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
          src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
        },
      ],
    };
  },
  methods: {
    playVideo(src) {
      location.href = src;
    }
  }
};
</script>

<template>
  <div class="video-list">
    <div class="video" v-for="(video, index) in videos" :key="index">
      <img :src="video.thumbnail" @click="playVideo(video.src)" :alt="video.title" class="thumbnail">
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
  