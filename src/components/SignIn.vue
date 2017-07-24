<template>
  <div class="ui segment">
    <h2 class="ui header">SignIn</h2>
    <form action="" class="ui form">
      <center>  
      <div class="field six wide">
        <label>Username </label>
        <input type="text">
      </div>
      <div class="field six wide">
        <label>Password </label>
        <input type="text">
      </div>
      <div class="field">
        <div class="ui button">SignIn</div>
        <label>Or</label>
      </div>
      <div class="field">
        <div v-on:click="signIn" class="ui google plus button"><i class="google plus icon"></i>SignIn With Google +</div>
      </div>
      </center>
    </form>
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    beforeRouteEnter(to, from, next) {
      const cancel = firebase.auth().onAuthStateChanged((user) => {
        cancel();
        if (user) {
          next(to.query.redirect || '/');
          return;
        }
        next();
      });
    },
    methods: {
      signIn() {
        firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
          this.$router.replace(this.$route.query.redirect || '/');
        });
      },
    },
  };
</script>