const getters =  {
    getFilterVideos(state) {
      if(state.searchValue !== null) {
        return state.videos.filter((video) => video.title.toLowerCase().includes(state.searchValue.trim().toLowerCase()))
      }else{
        return state.videos
      }
    },
    getVideoById: (state) => (id) => {
      return state.videos.find(video => video.id === +id)
    }
  }

export default getters