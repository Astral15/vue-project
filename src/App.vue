  
<script setup>
</script>

<template>
    <RouterView />
</template>
  
<style>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

h1 {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
}

input[type="text"] {
    height: 32px;
    width: 500px;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 0 10px;
    font-size: 14px;
    margin: 0 10px;
}

button {
    height: 32px;
    background-color: #f00;
    color: #fff;
    border: none;
    border-radius: 2px;
    padding: 0 10px;
    font-size: 14px;
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}

nav li {
    margin: 0 10px;
}

nav a {
    color: #333;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    padding: 10px;
    border-radius: 2px;
}

nav a:hover {
    background-color: #f0f0f0;
}

.video-container {
    margin: 20px;
}

video {
    width: 100%;
}

h2 {
    font-size: 18px;
    font-weight: 500;
    margin: 10px 0 5px;
}

p {
    font-size: 14px;
    margin: 0;
}

#app {
    display: flex;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
}
.main {
  padding: 16px;
}
</style>