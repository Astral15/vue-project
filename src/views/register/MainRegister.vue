<script setup>

import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

const router = useRouter()

const register = (state) => {
    router.push({ name: 'Register' , params:'1' })
    console.log("vmushaob")
}
</script>

<template>
    <button @click="register">
        <img class="logo" src="/src/assets/logos/registration.svg" alt="menu" width="25" height="25" />
    </button>
    <RouterLink :to="{ name: 'Register', params: {userId: 1}}">Register</RouterLink>
    <RouterLink :to="{ name: 'Login', params: {userId: 1}}">Login</RouterLink>
    <RouterView />
</template>