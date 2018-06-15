// eslint-disable-next-line
import Phaser from 'phaser';
import Main from './states/Main';

class Game extends Phaser.Game {
  constructor() {
    super(800, 600, Phaser.AUTO, 'gameArea');
    this.state.add('Main', Main, false);

    this.state.start('Main');
  }
}

export default Game;
