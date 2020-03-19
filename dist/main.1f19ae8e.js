// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU",
    PLAY: "PLAY"
  },
  IMAGE: {
    LOGO: "logo.png",
    PLAY: "play_button.png",
    TITLE: "forestnight.png",
    POTION: "potion.png",
    BACKGROUND: "forestday.png"
  },
  GAME: {
    PLAYER_HEALTH: 100,
    PLAYER_DMG: 10
  },
  AUDIO: {
    TITLE: "shuinvy-childhood.mp3"
  }
};
exports.CST = CST;
},{}],"src/CharacterSprite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterSprite = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CharacterSprite = /*#__PURE__*/function (_Phaser$Physics$Arcad) {
  _inherits(CharacterSprite, _Phaser$Physics$Arcad);

  function CharacterSprite() {
    var _this;

    var scene = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Phaser.Scene;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : number;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : number;
    var texture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : string;
    var frame = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : string | number;

    _classCallCheck(this, CharacterSprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CharacterSprite).call(this, scene, x, y, texture, frame));
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));

    _this.setScale(2);

    scene.physics.world.enableBody(_assertThisInitialized(_this));

    _this.setImmovable(true); //this.hp = 10;


    return _this;
  }

  return CharacterSprite;
}(Phaser.Physics.Arcade.Sprite);

exports.CharacterSprite = CharacterSprite;
},{}],"src/Sprite.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Sprite = /*#__PURE__*/function (_Phaser$GameObjects$S) {
  _inherits(Sprite, _Phaser$GameObjects$S);

  function Sprite() {
    var _this;

    var scene = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Phaser.Scene;
    var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : number;
    var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : number;
    var texture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : string;
    var frame = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : number | string;

    _classCallCheck(this, Sprite);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sprite).call(this, scene, x, y, texture, frame));
    scene.sys.updateList.add(_assertThisInitialized(_this));
    scene.sys.displayList.add(_assertThisInitialized(_this));
    return _this;
  }

  return Sprite;
}(Phaser.GameObjects.Sprite);

exports.Sprite = Sprite;
},{}],"src/scenes/PlayScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayScene = void 0;

var _CST = require("../CST");

var _CharacterSprite = require("../CharacterSprite");

var _Sprite = require("../Sprite");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Player1;
var healthBar;
var Player2;
var healthBar2;

function damagePlayer(player) {
  player.health -= 10;
}

var PlayScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(PlayScene, _Phaser$Scene);

  function PlayScene() {
    _classCallCheck(this, PlayScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlayScene).call(this, {
      key: _CST.CST.SCENES.PLAY
    }));
  }

  _createClass(PlayScene, [{
    key: "init",
    value: function init(data) {
      console.log(data);
      console.log("THANX");
    }
  }, {
    key: "preload",
    value: function preload() {
      this.load.image("wiz1", "./assets.firewiz.png");
      this.load.image("wiz2", "./assets.iceopponent.png");
      this.load.image("terrain", "./assets/forestday.png");
      this.load.image("earth", "./assets/earth_card.png");
      this.load.image("air", "./assets/air_card.png");
      this.load.image("fire", "./assets/fire_card.png");
      this.load.image("water", "./assets/water_card.png");
      this.load.image('block', './assets/tiny2.png');
      this.load.image('green-bar', './assets/healthbar-green.png');
      this.load.image('red-bar', './assets/healthbar-red.png');
      this.load.image("text", "./assets/Choose-Your-Attack.png");
      this.load.once("loaderror", function (file) {
        console.log(file);
      });
      console.log("You've made it to preload");
    }
  }, {
    key: "create",
    value: function create() {
      this.add.image(0, 0, "terrain").setOrigin(0).setDepth(0);
      this.add.image(500, 740, "text").setDepth(1);
      var Player1 = this.add.sprite(225, 300, "wiz1").setDepth(1);
      Player1.setScale(0.75);
      Player1.health = 100;
      Player1.maxHealth = 100;
      var Player2 = this.add.sprite(750, 290, "wiz2").setDepth(1);
      Player2.setScale(0.75);
      Player2.health = 100;
      Player2.maxHealth = 100; //Load cards

      var Earth = this.add.sprite(90, 575, "earth").setDepth(1);
      Earth.setScale(0.70);
      var Air = this.add.sprite(300, 575, "air").setDepth(1);
      Air.setScale(0.70);
      var Fire = this.add.sprite(510, 575, "fire").setDepth(1);
      Fire.setScale(0.70);
      var Water = this.add.sprite(720, 575, "water").setDepth(1);
      Water.setScale(0.70);
      var Earth2 = this.add.sprite(910, 575, "earth").setDepth(1);
      Earth2.setScale(0.70); //Checkerboard transition

      var blocks = this.add.group({
        key: 'block',
        repeat: 300
      }).setDepth(1);
      Phaser.Actions.GridAlign(blocks.getChildren(), {
        width: 21,
        cellWidth: 60,
        cellHeight: 60,
        x: 0,
        y: 0
      });

      var _this = this;

      var i = 0;
      blocks.children.iterate(function (child) {
        _this.tweens.add({
          targets: child,
          scaleX: 0,
          scaleY: 0,
          alpha: 0,
          y: '+=64',
          angle: 180,
          ease: 'Power3',
          duration: 1000,
          delay: 1000 + i * 100
        });

        i++; //  Change the value 32 for different results

        if (i % 16 === 0) {
          i = 0;
        }
      }); // Create health bar

      var backgroundBar = this.add.image(110, 20, 'red-bar');
      backgroundBar.fixedToCamera = true;
      healthBar = this.add.sprite(110, 20, 'green-bar');
      healthBar.fixedToCamera = true; // add text label to left of bar

      var healthLabel = this.add.text(215, 20, 'Player 1', {
        fontSize: '20px',
        fill: '#ffffff'
      });
      this.add.text(250, 40, Player1.health, {
        fontSize: '20px',
        fill: '#ffffff'
      });
      healthLabel.fixedToCamera = true; // Scale the health to account for damage
      //healthBar.scale.setTo(Player1.health / Player1.maxHealth, 1);
      // Create opponenet health bar

      var backgroundBar2 = this.add.image(890, 20, 'red-bar');
      backgroundBar2.fixedToCamera = true;
      healthBar2 = this.add.sprite(890, 20, 'green-bar');
      healthBar2.fixedToCamera = true; // add text label to left of bar

      var healthLabel2 = this.add.text(690, 20, 'Player 2', {
        fontSize: '20px',
        fill: '#ffffff'
      });
      healthLabel2.fixedToCamera = true; // Scale the health to account for damage
      //healthBar2.scale.setTo(Player2.health / Player2.maxHealth, 1);

      /*
      Create the tint effect over each of the cards in a players hand.
      Also set cards to be interactive to be able to select them.
      */

      Earth.setInteractive();
      Air.setInteractive();
      Fire.setInteractive();
      Water.setInteractive();
      Earth2.setInteractive();
      Earth.on("pointerover", function () {
        Earth.setTint(0xff0000); // Turns red when mouse hovers over
      });
      Earth.on("pointerout", function () {
        Earth.clearTint(); // Changes text back to normal tint
      }); // Once card is clicked, deal damage

      Earth.on("pointerup", function () {
        damagePlayer(Player2);
        healthBar2.scaleX = Player2.health / Player2.maxHealth;
      });
      Air.on("pointerover", function () {
        Air.setTint(0xff0000); // Turns red when mouse hovers over
      });
      Air.on("pointerout", function () {
        Air.clearTint(); // Changes text back to normal tint
      }); // Once card is clicked, deal damage

      Air.on("pointerup", function () {
        damagePlayer(Player2);
        healthBar2.scaleX = Player2.health / Player2.maxHealth;
      });
      Fire.on("pointerover", function () {
        Fire.setTint(0xff0000); // Turns red when mouse hovers over
      });
      Fire.on("pointerout", function () {
        Fire.clearTint(); // Changes text back to normal tint
      }); // Once card is clicked, deal damage

      Fire.on("pointerup", function () {
        damagePlayer(Player2);
        healthBar2.scaleX = Player2.health / Player2.maxHealth;
      });
      Water.on("pointerover", function () {
        Water.setTint(0xff0000); // Turns red when mouse hovers over
      });
      Water.on("pointerout", function () {
        Water.clearTint(); // Changes text back to normal tint
      }); // Once card is clicked, deal damage

      Water.on("pointerup", function () {
        damagePlayer(Player2);
        healthBar2.scaleX = Player2.health / Player2.maxHealth;
      });
      Earth2.on("pointerover", function () {
        Earth2.setTint(0xff0000); // Turns red when mouse hovers over
      });
      Earth2.on("pointerout", function () {
        Earth2.clearTint(); // Changes text back to normal tint
      }); // Once card is clicked, deal damage

      Earth2.on("pointerup", function () {
        damagePlayer(Player2);
        healthBar2.scaleX = Player2.health / Player2.maxHealth;
      });
    }
  }, {
    key: "update",
    value: function update() {} // healthBar.scale.setTo(Player1.health / player.maxHealth, 1);
    //function damage(Player2.health) {
    //   return (Player2.health - 10);
    // }

  }]);

  return PlayScene;
}(Phaser.Scene);

exports.PlayScene = PlayScene;
},{"../CST":"src/CST.js","../CharacterSprite":"src/CharacterSprite.js","../Sprite":"src/Sprite.js"}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;

var _CST = require("../CST");

var _PlayScene = require("./PlayScene");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);

  function MenuScene() {
    _classCallCheck(this, MenuScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuScene).call(this, {
      key: _CST.CST.SCENES.MENU
    }));
  }

  _createClass(MenuScene, [{
    key: "init",
    value: function init(data) {
      console.log(data);
      console.log("I GOT IT");
    }
  }, {
    key: "create",
    value: function create() {
      var _this = this;

      //Creating the menu screen, create images
      this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 3, "logo").setDepth(1);
      this.add.image(0, 0, "title_bg").setOrigin(0).setDepth(0);
      var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, "play_button").setDepth(1); //create sprites (if using pixel art, remove sharpen)

      var hovering = this.add.image(50, 50, "potion").setDepth(1);
      hovering.setScale(1 / 15);
      hovering.setVisible(false);
      /* 
          PointerEvents:
              pointerover - hovering
              pointerout - not hovering
              pointerup - click and release
              pointerdown - just click
      */

      playButton.setInteractive();
      playButton.on("pointerover", function () {
        hovering.setVisible(true);
        hovering.x = playButton.x - playButton.width;
        hovering.y = playButton.y;
        playButton.setTint(0xff0000); // Turns red when mouse hovers over
      });
      playButton.on("pointerout", function () {
        hovering.setVisible(false);
        playButton.clearTint(); // Changes text back to white
      }); // Once 'play' is clicked, begin PlayScene

      playButton.on("pointerup", function () {
        _this.scene.start(_CST.CST.SCENES.PLAY, "hi from MenuScreen");
      });
    }
  }]);

  return MenuScene;
}(Phaser.Scene);

exports.MenuScene = MenuScene;
},{"../CST":"src/CST.js","./PlayScene":"src/scenes/PlayScene.js"}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;

var _CST = require("../CST");

var _MenuScene = require("./MenuScene");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);

  function LoadScene() {
    _classCallCheck(this, LoadScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoadScene).call(this, {
      key: _CST.CST.SCENES.LOAD
    }));
  }

  _createClass(LoadScene, [{
    key: "init",
    value: function init() {}
  }, {
    key: "preload",
    value: function preload() {
      var _this = this;

      // Load images, spritesheet, and sound
      this.load.image("terrain", "./assets/image/forestday.png");
      this.load.image("title_bg", "./assets/forestnight.png");
      this.load.image("play_button", "./assets/play_button.png");
      this.load.image("logo", "./assets/text_logo.png");
      this.load.image("potion", "./assets/potionred04.png");
      this.load.image("wiz1", "./assets/firewiz.png");
      this.load.image("wiz2", "./assets/iceopponent.png"); //   this.load.image("earth", "./assets/earth_card.png")
      //   this.load.image("air", "./assets/air_card.png")
      //   this.load.image("fire", "./assets/fire_card.png")
      //   this.load.image("water", "./assets/water_card.png")
      // Create Loading Bar

      var loadingBar = this.add.graphics({
        fillStyle: {
          color: 0xffffff //white

        }
      });
      /*
      Loader events:
          complete - when done loading everything
          progress - loader number progress in decimal
      */

      this.load.on("progress", function (percent) {
        loadingBar.fillRect(0, _this.game.renderer.height / 2, _this.game.renderer.width * percent, 50);
        console.log(percent);
      });
      this.load.on("complete", function () {//      console.log("done")
      });
    }
  }, {
    key: "create",
    value: function create() {
      // this.scene.add(CST.SCENES.MENU, MenuScene, false)
      this.scene.start(_CST.CST.SCENES.MENU, "hello from LoadScene");
    }
  }]);

  return LoadScene;
}(Phaser.Scene);

exports.LoadScene = LoadScene;
},{"../CST":"src/CST.js","./MenuScene":"src/scenes/MenuScene.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");

var _MenuScene = require("./scenes/MenuScene");

var _PlayScene = require("./scenes/PlayScene");

/** @type {import("../typings/phaser")} */
var game = new Phaser.Game({
  width: 1000,
  height: 700,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene, _PlayScene.PlayScene],
  render: {
    pixelArt: true
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js","./scenes/PlayScene":"src/scenes/PlayScene.js"}],"../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62323" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../usr/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map