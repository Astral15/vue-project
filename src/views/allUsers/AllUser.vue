<script setup>
import axios from 'axios'
import { ref } from 'vue'

const users = ref([])

axios.get('https://items.magischer.de/api/users')
    .then(response => {
        users.value = response.data
    })
</script>

<template>
    <div>
        <h1>Users</h1>
        <ul>
            <li v-for="user in users" :key="user.id">{{ user }}</li>
        </ul>
    </div>
    <RouterView />
</template>
  
 
  