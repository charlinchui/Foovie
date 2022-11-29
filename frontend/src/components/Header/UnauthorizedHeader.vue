<template>
  <header class="Header--un">
    <FoovieLogo class="Header__logo Header__logo--un" />
    <div class="Header__actions">
      <router-link v-if="routePath !== signInRoute" class="btn btn--primary" :to="signInRoute">
        Sign in
      </router-link>
    </div>
  </header>
</template>

<script>
  import FoovieLogo from '../../assets/images/Foovie.svg';
  import { routes } from '../../helpers/constants';

  export default {
    name: 'UnauthorizedHeader',
    data() {
      return {
        signInRoute: routes.signIn,
      };
    },
    computed: {
      routePath() {
        return this.$route.path;
      },
    },
    components: {
      FoovieLogo,
    },
  };
</script>

<style lang="scss">
  @import "./Header.scss";
</style>
