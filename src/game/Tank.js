// eslint-disable-next-line
import Phaser from 'phaser';

class Tank extends Phaser.Sprite {
  constructor(game, name, x, y, frame) {
    super(game, x, y, 'tank', frame);
    this.game = game;
    this.name = name;
    this.angle = 0;
    this.color = 'blue';
    this.create();
  }
  create() {
    this.anchor.setTo(0.5, 0.5);
    this.turret = new Phaser.Sprite(this.game, 0, 0, 'turret');
    this.turret.anchor.setTo(0.5, 0.9);
    this.addChild(this.turret);
  }
  update() {
    this.turret.angle += 2;
  }
}

export default Tank;
