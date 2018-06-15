<template>
  <div id='gameScreen'></div>
</template>

<script>
/* eslint-disable no-unused-vars */
import 'pixi';
import 'p2';
// eslint-disable-next-line
import Phaser from 'phaser';
/* eslint-enable no-unused-vars */

import Game from '@/game/Game';

export default{
  name: 'game',
  props: {
    width: Number,
    height: Number,
  },
  mounted() {
    if (this.game == null) {
      this.game = new Game();
    }
  },
  methods: { },
  data() {
    return {
      game: null,
    };
  },
};
</script>

<style>

div#gameScreen>canvas{
  margin: auto;
}
</style>
