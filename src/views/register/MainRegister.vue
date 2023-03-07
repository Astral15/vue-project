<script setup>

import { RouterLink } from 'vue-router'

const register = (state) => {
    console.log("vmushaob")
}
</script>

<template>
    <button @click="register">
        <img class="logo" src="/src/assets/logos/registration.svg" alt="menu" width="25" height="25" />
    </button>
    <RouterLink :to="{ name: 'Register', params: {userId: 1}}">register</RouterLink>
    <RouterLink :to="{ name: 'Update', params: {userId: 1}}">update</RouterLink>
    <RouterView />
</template>