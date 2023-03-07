<script setup>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import VideosLayout from '../layouts/VideosLayout.vue'

const route = useRoute()

const store = useStore()

// const videoContent = store.getters['videos/getVideoById'](route.params.id)

</script>

<template>
    <VideosLayout>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NZ08Epp4vD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </VideosLayout>
</template>