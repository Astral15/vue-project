
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { ref } from 'vue'

    let toggledSidebar = ref(true)
    // const store = useStore()
    // let menuOn = computed(() => store.getters["menuModule/menu"])

    // const changeState = () => {
    //   toggledSidebar = !toggledSidebar
    //   console.log(toggledSidebar)
    // }

    const logos = [
      { name: 'home', url: '/src/assets/logos/home.svg' },
      { name: 'shortcut', url: '/src/assets/logos/appShortcut.svg' },
      { name: 'library', url: '/src/assets/logos/library.svg' },
      { name: 'subscriptions', url: '/src/assets/logos/subscriptions.svg' },
      { name: 'help', url: '/src/assets/logos/help.svg' },
      { name: 'settings', url: '/src/assets/logos/settings.svg' },
      { name: 'history', url: '/src/assets/logos/history.svg' },
      { name: 'favourite', url: '/src/assets/logos/favorite.svg' },
      { name: 'long out', url: '/src/assets/logos/logout.svg' },
    ]
    
</script>


<template>
  <div class="sidebar">
    <div class="header">
      <button @click="toggledSidebar = !toggledSidebar">
        <img class="logo" src="/src/assets/logos/menu.svg" alt="menu" width="25" height="25" />
      </button>
      <img class="logo" src="/src/assets/logos/YouTube.svg" alt="Youtube" width="125" height="125" />
    </div>
    <div class="sidebar-context">
      <ul class="sidebar-list" v-if="toggledSidebar == true">
        <li v-for="logo in logos" :key="logo.name">
          <div class="listElement">
            <div class="listElementDivToggled">
              <div class="listElementLogo">
                <img :src="logo.url" :alt="logo.name" class="logo">
              </div>
              <div class="listElementName">
                <span class="logo-name">{{ logo.name }}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <ul class="sidebar-list" v-if="toggledSidebar == false">
        <li v-for="logo in logos" :key="logo.name">
          <div class="closeElement">
            <div class="listElementDivClosed">
              <img :src="logo.url" :alt="logo.name" class="logo">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  display: block;
  height: 100%;
  width: 250px;
  padding: 10px;
  background-color: #f5f5f5;
}

.header {
  display: inline-flex;
  height: 50px;
}

.listElement {
  display: flex;
  width: auto;
  height: auto;
}

.listElementDivToggled {
  display: inline-flex;
  width: 250px;
  height: auto;
}

.closeElement {
  width: 20px;
}

.listElementDivClosed {
  display: inline-flex;
  width: auto;
}

.listElementLogo {
  color: black;
  width: 40px;
  height: 40px;
}

.listElementName {
  color: black;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
