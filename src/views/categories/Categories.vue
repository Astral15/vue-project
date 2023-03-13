<script setup>
import axios from 'axios'
import { ref , onMounted } from 'vue'

const categories = ref([])
const apiUrl = "https://items.magischer.de/api/categories"

function getCategories() {
    axios.get(apiUrl).then(response => categories.value = response.data)
}
onMounted(() => {
    getCategories()
})

</script>

<template>
    <div>
        <h1>Categories</h1>
        <ul>
            <li v-for="categorie in categories" :key="categorie.index">{{ categorie.name }}</li>
        </ul>
    </div>
    <RouterView />
</template>