<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const searchValue = ref(null)

watch(searchValue, (value) => {
  store.dispatch('videos/NewVideos', value)
} )

function toggleSidebar() {
  emit('toggle-sidebar')
}
</script>

<template>
  <div class="header">
    <div id="search">
      <div class="search-bar-container">
        <button class="sidebar-toggle" @click.prevent="toggleSidebar">
          <i class="fas fa-bars"></i>
        </button>
        <input type="text" v-model="searchValue" class="search-bar" placeholder="Search">
        <button class="search-button">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div class="right">
      </div>
    </div>

  </div>
  <div class="search-container">
    <div class="title-container">
      <h1 class="title">All</h1>
      <h1 class="title">Music</h1>
      <h1 class="title">Live</h1>
      <h1 class="title">AI</h1>
      <h1 class="title">JavaScript</h1>
      <h1 class="title">Chess</h1>
      <h1 class="title">Java</h1>
      <h1 class="title">History</h1>
      <h1 class="title">Football</h1>
      <h1 class="title">Math</h1>
    </div>
  </div>
</template>
    
<style scoped>
.search-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
}

.title {
  font-size: 16px;
  font-weight: 500;
  margin-right: 20px;
  color: #606060;
  cursor: pointer;
}

.title:last-child {
  margin-right: 0;
}

.title:hover {
  color: #111;
}

.search-bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
}

.sidebar-toggle {
  width: 36px;
  height: 36px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.sidebar-toggle i {
  color: #111;
  font-size: 18px;
}

.search-bar {
  width: 240px;
  padding: 8px 12px;
  border: none;
  border-radius: 2px;
  font-size: 14px;
  color: #606060;
  background-color: #f0f0f0;
}

.search-bar:focus {
  outline: none;
  background-color: #fff;
  box-shadow: 0 0 0 2px #065fd4;
}

.search-button {
  width: 48px;
  height: 36px;
  background-color: #065fd4;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

.search-button i {
  color: #fff;
  font-size: 18px;
}

.header {
  display: inline-flex;
}

#search {
  margin-left: 200px;
}
</style>
  
