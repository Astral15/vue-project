<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      logos: [
        { name: 'home', url: '../assets/logos/home.svg' },
        { name: 'library', url: '../assets/logos/library.svg' },
        { name: 'subscriptions', url: '../assets/logos/subscriptions.svg' },
        { name: 'help', url: '../assets/logos/help.svg' },
        { name: 'settings', url: '../assets/logos/settings.svg' },

      ]
    }
  }
}
</script>

<template>
  <div class="sidebar">
    <img class="logo" src="../assets/logos/YouTube.svg" width="125" height="125"/>
    <ul class="sidebar-list">
      <li v-for="logo in logos" :key="logo.name">
        <img :src="logo.url" :alt="logo.name" class="logo">
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  padding: 16px;
  background-color: #f5f5f5;
}

.sidebar-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-logo {
  height: 32px;
  margin-right: 8px;
}
</style>
