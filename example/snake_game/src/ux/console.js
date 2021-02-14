"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Console = void 0;
var game_js_1 = require("../game.js");
var Console = /** @class */ (function () {
    function Console() {
    }
    Console.init = function () {
        Console.buttons.start = document.querySelector('#start');
        Console.buttons.pause = document.querySelector('#pause');
        Console.buttons.reset = document.querySelector('#reset');
        Console.buttons.start.onclick = function () {
            game_js_1.Game.start();
        };
        Console.buttons.pause.onclick = function () {
            game_js_1.Game.pause();
        };
        Console.buttons.reset.onclick = function () {
            game_js_1.Game.reset();
        };
    };
    Console.buttons = {
        start: null,
        pause: null,
        reset: null,
    };
    return Console;
}());
exports.Console = Console;
