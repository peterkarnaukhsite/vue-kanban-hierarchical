<template>
  <div class="app">
    <div class="app__header">
      <h1 class="app__title">Kanban Board</h1>
      <p class="app__subtitle">vuejs based</p>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({ boards: (state) => state.boards }),
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
};
</script>

<style lang="scss">
.app {
  max-width: 1440px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;

  &__header {
    text-align: center;
  }

  &__title {
    font-weight: bold;
    font-size: 40px;
    color: #070c2c;
  }

  &__subtitle {
    margin-bottom: 1em;
    font-size: 20px;
  }
}
</style>
