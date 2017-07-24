<template>
  <div id="app">
    <top-menu></top-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import topMenu from './components/Menu';

export default {
  components: {
    topMenu,
  },
};
</script>
