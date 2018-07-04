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
    this.speed = 0;

    this.angle = game.rnd.angle();
    game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.immovable = true;
    this.body.collideWorldBounds = true;
    this.body.bounce.setTo(1, 1);
  }
  create() {
    this.anchor.setTo(0.5, 0.5);
    this.turret = new Phaser.Sprite(this.game, 0, 0, 'turret');
    this.turret.anchor.setTo(0.5, 0.9);
    // this.turret.angle = 90;
    this.addChild(this.turret);
  }
  update() {
    this.updateLabelPosition();
    if (this.speed > 0) {
      this.speed -= 4;
    }
    if (this.speed > 0) {
      this.game.physics.arcade.velocityFromAngle(this.angle - 90 , this.speed, this.body.velocity);
    }
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
  forward(speed = 100) {
    this.speed = speed;
  }
  turnLeft(speed = 4) {
    this.angle -= speed;
  }
  turnRight(speed = 4) {
    this.angle += speed;
  }
}

export default Tank;
