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

export default{
  name: 'game',
  props: {
    width: Number,
    height: Number,
  },
  mounted() {
    const self = this;
    if (this.game == null) {
      this.game = new Phaser.Game(this.width, this.height, Phaser.AUTO, this.$el, {
        preload: function preload() {
          self.preload(this);
        },
        create: function create() {
          self.create(this);
        },
        update: function update() {
          self.update(this);
        },
      });
    }
  },
  methods: {
    // preload () {
    // },
    // create (phaser) {
    // },
    // update (phaser) {
    // },
  },
  data() {
    return {
      game: null,
    };
  },
};
</script>

<style scoped>

div#gameScreen>canvas{
  margin: auto;
}
</style>
