<template>
  <div>
  	<img v-bind:src="profile.photo" class="ui small circular image">
    <h4>Name:</h4> {{ profile.name | upper }}
    <h4>Description:</h4> {{ profile.description}}
  </div>
</template>

<script>
  export default {
    props: ['profile'],
  };
</script>
