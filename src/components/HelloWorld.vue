<template>
  <div>
    <main-menu></main-menu>
    <game-info></game-info>
    <game></game>
  </div>
</template>

<script>

import Game from './Game';
import MainMenu from './MainMenu';
import GameInfo from './GameInfo';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'NUBG - Not a Universal Battle Ground',
    };
  },
  components: {
    Game,
    MainMenu,
    GameInfo,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
