// eslint-disable-next-line
import Phaser from 'phaser';
import Tank from '@/game/Tank';

const mqtt = require('mqtt');

const grassPath = require('@/assets/images/environment/grass.png');
const tankPath = require('@/assets/images/tanks/tankBlue.png');
const turretPath = require('@/assets/images/tanks/barrelBlue.png');

class Main extends Phaser.State {
  preload() {
    this.game.load.image('grass', grassPath);
    this.game.load.image('tank', tankPath);
    this.game.load.image('turret', turretPath);
    this.mqtt = mqtt.connect('mqtt://mqtt.labict.be:1884');
    this.mqtt.subscribe('test/nubg/devgame/gamestate');
    this.gameState = {};
    this.stage.disableVisibilityChange = true;
    this.mqtt.on('message', (topic, payload) => {
      // console.log([topic, payload].join(": "));
      this.gameState = JSON.parse(payload);
    });
  }
  create() {
    this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'grass');
    this.fixedToCamera = true;
    // this.createTanks();
    this.tanks = {};
    this.keys = this.game.input.keyboard.createCursorKeys();
  }
  update() {
    if (this.gameState.tanks !== undefined) {
      this.gameState.tanks.forEach((tankState) => {
        if (this.tanks[tankState.id]) {
          this.tanks[tankState.id].update(tankState);
        } else {
          const tank = new Tank(
            this.game,
            tankState.name,
            tankState.location.x,
            tankState.location.y,
          );
          this.tanks[tankState.id] = tank;
          this.game.add.existing(tank);
        }
      });
    }

    const graphics = this.game.add.graphics(0, 0);

    graphics.lineStyle(2, 0x0000FF, 1);
    graphics.drawRect(0, 0, 1000, 500);

    // if (this.keys.up.isDown) {
    //   this.tanks[0].forward();
    // }
    // if (this.keys.down.isDown) {
    //   // do nothing, tanks don't drive backwards
    // }
    // if (this.keys.left.isDown) {
    //   this.tanks[0].turnLeft();
    // }
    // if (this.keys.right.isDown) {
    //   this.tanks[0].turnRight();
    // }


    // this.tanks.forEach((tank) => {
    //   tank.update();
    // });
  }
  // createTanks() {
  //   const tankNames = ['Sille', 'Nico', 'Diek', 'AtomCiLogic'];
  //   this.tanks = [];
  //   tankNames.forEach((name) => {
  //     const tank = new Tank(this.game, name, this.game.world.randomX, this.game.world.randomY);
  //     this.tanks.push(tank);
  //     this.game.add.existing(tank);
  //   });
  // }
}

export default Main;
