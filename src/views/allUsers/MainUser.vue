<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>

<RouterLink :to="{ name: 'AllUsers', params: {userId: 1}}">All user</RouterLink>
<RouterLink :to="{ name: 'User', params: {userId: 1}}">your user</RouterLink>
<RouterView />
</template>