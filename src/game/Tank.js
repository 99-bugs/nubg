// eslint-disable-next-line
import Phaser from 'phaser';

const TEXT_OFFSET = 10;

class Tank extends Phaser.Sprite {
  constructor(game, name, x, y, frame) {
    super(game, x, y, 'tank', frame);
    this.game = game;
    this.name = name;
    this.angle = 0;
    this.color = 'blue';
    this.create();
    this.scale.setTo(0.5);
    this.displayName(this.name);
  }
  create() {
    this.anchor.setTo(0.5, 0.5);
    this.turret = new Phaser.Sprite(this.game, 0, 0, 'turret');
    this.turret.anchor.setTo(0.5, 0.9);
    this.addChild(this.turret);
  }
  update() {
    this.updateLabelPosition();
  }
  displayName(name) {
    this.label = new Phaser.Text(
      this.game,
      this.x,
      this.y,
      name,
      { font: '24px Arial', fill: '#ffffff', align: 'center' });
    this.updateLabelPosition();
    this.label.anchor.set(0.5);
    this.game.add.existing(this.label);
  }
  updateLabelPosition() {
    this.label.x = this.x;
    this.label.y = this.y - this.height - TEXT_OFFSET;
  }
}

export default Tank;
