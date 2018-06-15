// eslint-disable-next-line
import Phaser from 'phaser';
import Tank from '@/game/Tank';

const grassPath = require('@/assets/images/environment/grass.png');
const tankPath = require('@/assets/images/tanks/tankBlue.png');
const turretPath = require('@/assets/images/tanks/barrelBlue.png');

class Main extends Phaser.State {
  preload() {
    this.game.load.image('grass', grassPath);
    this.game.load.image('tank', tankPath);
    this.game.load.image('turret', turretPath);
  }
  create() {
    this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'grass');
    this.fixedToCamera = true;
    this.tank = new Tank(this.game, 'test', 100, 100);
    this.game.add.existing(this.tank);
  }
  update() {
    this.tank.angle += 1;
  }
}

export default Main;
