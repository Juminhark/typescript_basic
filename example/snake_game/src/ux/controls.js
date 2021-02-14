"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
var index_js_1 = require("../types/index.js");
var game_js_1 = require("../game.js");
var Controls = /** @class */ (function () {
    function Controls() {
    }
    Controls.process_input = function () {
        if (!Controls.last_key) {
            return;
        }
        switch (Controls.last_key) {
            case index_js_1.GameKey.UP:
                if (game_js_1.Game.player_one.direction != index_js_1.Direction.DOWN) {
                    game_js_1.Game.player_one.direction = index_js_1.Direction.UP;
                }
                break;
            case index_js_1.GameKey.DOWN:
                if (game_js_1.Game.player_one.direction != index_js_1.Direction.UP) {
                    game_js_1.Game.player_one.direction = index_js_1.Direction.DOWN;
                }
                break;
            case index_js_1.GameKey.LEFT:
                if (game_js_1.Game.player_one.direction != index_js_1.Direction.RIGHT) {
                    game_js_1.Game.player_one.direction = index_js_1.Direction.LEFT;
                }
                break;
            case index_js_1.GameKey.RIGHT:
                if (game_js_1.Game.player_one.direction != index_js_1.Direction.LEFT) {
                    game_js_1.Game.player_one.direction = index_js_1.Direction.RIGHT;
                }
                break;
            case index_js_1.GameKey.SPACEBAR:
                game_js_1.Game.player_one.jump();
        }
        Controls.last_key = null;
    };
    Controls.last_key = null;
    Controls.on_key_up = function (ev) {
        Controls.last_key = ev.keyCode;
    };
    return Controls;
}());
exports.Controls = Controls;
