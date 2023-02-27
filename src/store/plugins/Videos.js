import VideoModules from '../modules/VideosModule/index'

const VideoPlugin = () => {
    store.registerModule('videos' , VideoModules)
}

export default VideoPlugin