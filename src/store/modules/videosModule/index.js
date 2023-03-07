import mutations from "./mutation"
import getters from "./getters"
import actions from "./actions"

const videos = {
  namespaced: true,
  state() {
        return {
            searchValue: null,
            videos: [
              { 
                id: 1,
                title: 'Video 1',
                channel: 'Channel 1',
                views: '10K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 2,
                title: 'Video 2',
                channel: 'Channel 2',
                views: '20K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {                
                id: 3,
                title: 'Video 3',
                channel: 'Channel 3',
                views: '200K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 4,
                title: 'Video 4',
                channel: 'Channel 4',
                views: '205K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 5,
                title: 'Video 5',
                channel: 'Channel 5',
                views: '10K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 6,
                title: 'Video 6',
                channel: 'Channel 6',
                views: '10K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 7,
                title: 'Video 7',
                channel: 'Channel 7',
                views: '10K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 8,
                title: 'Video 8',
                channel: 'Channel 8',
                views: '10K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 9,
                title: 'Video 9',
                channel: 'Channel 9',
                views: '10K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 10,
                title: 'Video 10',
                channel: 'Channel 10',
                views: '10K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 11,
                title: 'Video 11',
                channel: 'Channel 11',
                views: '10K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
              {
                id: 12,
                title: 'Video 12',
                channel: 'Channel 12',
                views: '10K',
                thumbnail: 'https://i.ytimg.com/vi/NZ08Epp4vD4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLCBVxLTI29AgtAzr8WK9ZH6TUmptg',
                src: "https://www.youtube.com/watch?v=NZ08Epp4vD4"
      
              },
            ],
        }
    },
    getters,
    actions,
    mutations,
}

export default videos