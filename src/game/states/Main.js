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
    this.createTanks();
    this.keys = this.game.input.keyboard.createCursorKeys();
  }
  update() {
    if (this.keys.up.isDown) {
      this.tanks[0].y -= 1;
    }
    if (this.keys.down.isDown) {
      this.tanks[0].y += 1;
    }
    if (this.keys.left.isDown) {
      this.tanks[0].x -= 1;
    }
    if (this.keys.right.isDown) {
      this.tanks[0].x += 1;
    }


    this.tanks.forEach((tank) => {
      tank.update();
    });
  }
  createTanks() {
    const tankNames = ['Sille', 'Nico', 'Diek', 'AtomCiLogic'];
    this.tanks = [];
    tankNames.forEach((name) => {
      const tank = new Tank(this.game, name, this.game.world.randomX, this.game.world.randomY);
      this.tanks.push(tank);
      this.game.add.existing(tank);
    });
  }
}

export default Main;
