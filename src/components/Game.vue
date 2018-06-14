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

const grassPath = require('@/assets/images/environment/grass.png');
const tankPath = require('@/assets/images/tanks/tankBlue.png');
const turretPath = require('@/assets/images/tanks/barrelBlue.png');

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
    preload(phaser) {
      phaser.game.load.image('grass', grassPath);
      phaser.game.load.image('tank', tankPath);
      phaser.game.load.image('turret', turretPath);
    },
    create(phaser) {
      const grass = phaser.game.add.tileSprite(0, 0, 800, 600, 'grass');
      grass.fixedToCamera = true;

      const tank = phaser.game.add.sprite(0, 0, 'tank');
      tank.anchor.setTo(0.5, 0.5);
      tank.x = 300;
      tank.y = 300;

      const turret = phaser.game.add.sprite(0, 0, 'turret');
      turret.anchor.setTo(0.5, 0.9);
      turret.x = tank.x;
      turret.y = tank.y;
    },
    // eslint-disable-next-line
    update(phaser) {
    },
  },
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
