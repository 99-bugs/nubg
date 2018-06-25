// eslint-disable-next-line
import Phaser from 'phaser';
import Main from './states/Main';

class Game extends Phaser.Game {
  constructor() {
    super({
      render: Phaser.AUTO,
      parent: 'gameScreen',
      width: '100',
      height: '100',
    });
    this.state.add('Main', Main, false);
    this.state.start('Main');
  }
}

export default Game;
