"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GUI = void 0;
var game_js_1 = require("../game.js");
var GUI = /** @class */ (function () {
    function GUI() {
    }
    GUI.init = function () {
        GUI.header = document.querySelector('header');
        GUI.score = document.querySelector('#score');
        GUI.lives = document.querySelector('#lives');
        GUI.build = document.querySelector('#build');
    };
    GUI.draw = function () {
        GUI.lives.innerText = game_js_1.Game.is_running
            ? 'Lives: ' + game_js_1.Game.player_one.lives
            : 'Press Start';
        GUI.score.innerText = game_js_1.Game.is_running
            ? 'Score: ' + game_js_1.Game.player_one.points
            : 'Hi Score: ' + game_js_1.Game.hi_score;
    };
    return GUI;
}());
exports.GUI = GUI;
