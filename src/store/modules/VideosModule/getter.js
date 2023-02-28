const getters =  {
    getVideo(state) {
        return state.video
    },
    getFilterVideos(state) {
      if(state.searchValue !== null) {
        return state.videos.filter((video) => video.title.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
      }else{
        return state.videos
      }
    }
  }

export default getters