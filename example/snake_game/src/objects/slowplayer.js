"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlowPlayer = void 0;
var index_js_1 = require("../types/index.js");
var index_js_2 = require("../ux/index.js");
var SlowPlayer = /** @class */ (function () {
    function SlowPlayer() {
        this.color = '#3366FF';
        this.index = SlowPlayer.items_index;
        ++SlowPlayer.items_index;
        ++SlowPlayer.items_active;
    }
    SlowPlayer.prototype.handle_collision = function (snake) {
        snake.set_speed(index_js_1.Speed.SLOW);
        this.destroy();
    };
    SlowPlayer.prototype.draw = function () {
        if (!this.position) {
            return;
        }
        var x = this.position.X * index_js_2.Board.block_size + 2;
        var y = this.position.Y * index_js_2.Board.block_size + 2;
        var size = index_js_2.Board.block_size - 4;
        index_js_2.Canvas.draw_rect(x, y, size, size, this.color);
    };
    SlowPlayer.prototype.destroy = function () {
        index_js_2.Board.remove_object_at(this.position);
        delete SlowPlayer.instances[this.index];
        --SlowPlayer.items_active;
    };
    SlowPlayer.instances = {};
    SlowPlayer.items_index = 0;
    SlowPlayer.items_active = 0;
    return SlowPlayer;
}());
exports.SlowPlayer = SlowPlayer;
