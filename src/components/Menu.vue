<template>
  <div class="ui menu">
    <router-link to="/" class="item" active-class="active" exact>Home</router-link>  
    <div class="right menu">
      <router-link to="/profile" v-if="currentUser" class="item" active-class="active">Profile</router-link>
      <div v-if="currentUser" v-on:click="signOut" class="link item">Sign Out</div>
      <router-link v-else to="/signin" class="item" active-class="active">SignIn</router-link>  
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    data() {
      return {
        currentUser: null,
      };
    },
    created() {
      firebase.auth().onAuthStateChanged((user) => {
        this.currentUser = user;
      });
    },
    methods: {
      signOut() {
        firebase.auth().signOut();
        this.$router.push('/');
      },
    },
  };
</script>