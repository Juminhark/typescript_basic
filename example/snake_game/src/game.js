"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var index_js_1 = require("./types/index.js");
var index_js_2 = require("./objects/index.js");
var index_js_3 = require("./ux/index.js");
var GameDifficulty;
(function (GameDifficulty) {
    GameDifficulty[GameDifficulty["EASY"] = 300] = "EASY";
    GameDifficulty[GameDifficulty["MEDIUM"] = 150] = "MEDIUM";
    GameDifficulty[GameDifficulty["DIFFICULT"] = 50] = "DIFFICULT";
})(GameDifficulty || (GameDifficulty = {}));
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.init = function () {
        index_js_3.Canvas.init(document.querySelector('canvas'));
        var body = document.querySelector('body');
        body.onkeyup = index_js_3.Controls.on_key_up;
        Game.ready();
    };
    Game.ready = function () {
        index_js_3.Console.init();
        index_js_3.Board.init();
        index_js_3.Board.draw();
        index_js_3.GUI.init();
        index_js_3.GUI.draw();
        Game.player_one = new index_js_2.Snake({ X: 0, Y: 0 });
        Game.player_one.direction = index_js_1.Direction.RIGHT;
        Game.clock = new index_js_1.Timer(GameDifficulty.DIFFICULT, 0, Game.on_clock_tick);
    };
    Game.start = function () {
        if (Game.is_running) {
            return;
        }
        if (Game.clock.is_paused) {
            return Game.pause();
        }
        Game.is_running = true;
        Game.clock.start();
    };
    Game.pause = function () {
        if (Game.clock.is_paused) {
            Game.is_running = true;
            return Game.clock.resume();
        }
        Game.clock.pause();
        Game.is_running = false;
        index_js_3.GUI.draw();
    };
    Game.reset = function () {
        Game.clock && Game.clock.stop();
        Game.is_running = false;
        Game.ready();
    };
    Game.on_clock_tick = function () {
        index_js_3.Controls.process_input();
        Game.player_one.process_turn();
        if (Game.clock.tick == index_js_1.ClockTick.EVEN) {
            // TODO: Move this to item randomizer class
            Game.coinCounter += 1;
            if (Game.coinCounter >= 2) {
                Game.coinCounter = 0;
                if (!Math.floor(Math.random() + 0.5)) {
                    var probability = (index_js_2.Coin.coins_active + 0.5) / 5;
                    if (!Math.floor(Math.random() + probability)) {
                        if (!Math.floor(Math.random() + 0.8)) {
                            var coin = index_js_2.Coin.create_random();
                            index_js_3.Board.place_at_random(coin);
                        }
                        else {
                            if (!Math.floor(Math.random() + 0.5)) {
                                var slowPlayer = new index_js_2.SlowPlayer();
                                index_js_3.Board.place_at_random(slowPlayer);
                            }
                            else {
                                var fastPlayer = new index_js_2.FastPlayer();
                                index_js_3.Board.place_at_random(fastPlayer);
                            }
                        }
                    }
                }
            }
        }
        index_js_3.Board.draw();
        index_js_3.GUI.draw();
    };
    Game.hi_score = 0;
    Game.is_running = false;
    // TODO: Move this to item randomizer class
    Game.coinCounter = 0;
    return Game;
}());
exports.Game = Game;
Game.init();
