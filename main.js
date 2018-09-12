var gameRatio = window.innerWidth/window.innerHeight;
var gameWidth = 1536;
var gameHeight = 2048;

var game = new Phaser.Game(gameWidth, gameHeight, Phaser.CANVAS);

game.state.add('load', orionRescue.load);
game.state.add('mainmenu', orionRescue.mainmenu);
game.state.add('normastate', orionRescue.normastate);
game.state.add('state1', orionRescue.state1);
game.state.start('load');
