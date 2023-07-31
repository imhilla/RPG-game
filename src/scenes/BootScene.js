import 'phaser';
//import logoImg from "../assets/logo.png";
import tiles from '../assets/map/spritesheet.png'
import map from '../assets/map/map.json'
import player from '../assets/RPG_assets.png'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    // map tiles
    this.load.image('tiles', tiles);

    // map in json format
    this.load.tilemapTiledJSON('map', map);

    // our two characters
    this.load.spritesheet('player', player, { frameWidth: 16, frameHeight: 16 });
  }

  create() {
    // start the WorldScene
    this.scene.start('WorldScene');
  }
};

// import 'phaser';
// import logoImg from "../assets/logo.png";
 
// export default class BootScene extends Phaser.Scene {
//   constructor () {
//     super('Boot');
//   }
 
//   preload () {
//     this.load.image('logo', logoImg);
//   }
 
//   create () {
//     this.scene.start('Preloader');
//   }
// };