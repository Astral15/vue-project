<script setup>
import axios from 'axios'
import { ref , onMounted } from 'vue'

const users = ref([])
const apiUrl = "https://items.magischer.de/api/users"

function getUsers() {
    axios.get(apiUrl).then(response => users.value = response.data)
}
onMounted(() => {
    getUsers()
})

</script>

<template>
    <div>
        <h1>Users</h1>
        <ul>
            <li v-for="user in users" :key="user.index">{{ user.name }}</li>
        </ul>
    </div>
    <RouterView />
</template>