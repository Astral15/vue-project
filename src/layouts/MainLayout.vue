<script setup>
import Sidebar from '../components/Sidebar.vue';
import Header from '../components/Header.vue';
import MainContent from '../components/MainContent.vue';
import MainRegister from '../views/register/MainRegister.vue'
import MainUser from '../views/allUsers/MainUser.vue';
import Categories from '../views/categories/Categories.vue';
</script>

<template>
<div class="container flex flex-col mx-auto space-y-4">
    <div>
        <Sidebar />
        <main>
            <Header />
            <RouterView />
            <MainContent />
            <MainRegister />
            <MainUser />
            <Categories />
        </main>
    </div>
</div>
</template>