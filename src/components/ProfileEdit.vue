<template>
  <div class="ui segment">
    <h3>Profile Edit</h3>
    <profile-form v-model="profile" v-on:save="save" v-on:cancel="back"></profile-form>
    {{ profile }}
  </div>
</template>

<script>
  import ProfileForm from './ProfileForm';
  import { Me } from '../services';

  export default {
    components: {
      ProfileForm,
    },
    data: () => ({
      profile: {
        name: '',
        description: '',
      },
    }),
    created() {
      Me.get()
      .then((data) => {
        this.profile = data;
      });
    },
    methods: {
      save() {
        Me.set(this.profile)
          .then(() => {
            this.back();
          });
      },
      back() {
        this.$router.push('/profile');
      },
    },
  };
</script>