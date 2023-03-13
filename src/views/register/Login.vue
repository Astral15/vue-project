
<script setup>
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const store = useStore()
const router = useRouter()

const submit = async () => {
  const data = {
    email: email.value,
    password: password.value
  }

  try {
    const response = await axios.post('https://items.magischer.de/api/auth/login', data)
    if (response.data.status) {
      router.push({ name: '../Home.vue' })
    } else {
      router.push({ name: '../Home.vue', params: 'error' })
    }
  } catch (error) {

  }
}
</script>

<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <form @submit.prevent="submit">
      <div class="mb-6">
        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
        <input type="text" id="default-input"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>
      <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password:</label>
        <input type="text" id="small-input"
          class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      </div>
      <RouterLink to="/">
        <div class="text-center">
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
        </div>
      </RouterLink>

    </form>
  </div>
  <RouterView />
</template>
  
 