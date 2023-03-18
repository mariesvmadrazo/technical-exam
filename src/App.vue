<template>
  <NavBar />
  <AnnouncementList />
</template>

<script>
import NavBar from './components/NavBar.vue'
import AnnouncementList from './components/AnnouncementList.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    AnnouncementList
  }
}
</script>

<style>
html {
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
