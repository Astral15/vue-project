import VideoModules from '../modules/videosModule/index'

const VideoPlugin = (store) => {
    store.registerModule('videos' , VideoModules)
}

export default VideoPlugin