<script setup>

</script>

<template>
    <div>
    Enter your name: 
    <input type="text" v-model="searchValue" class="search-bar" placeholder="Search">
    </div>
    <div>
    Enter your surname:
    <input type="text" v-model="searchValue" class="search-bar" placeholder="Search">
    </div>
    <div>
    Enter your email:
    <input type="text" v-model="searchValue" class="search-bar" placeholder="Search">
    </div>
    <RouterView />
</template>