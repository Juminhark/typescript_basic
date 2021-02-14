"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastPlayer = void 0;
var index_js_1 = require("../types/index.js");
var index_js_2 = require("../ux/index.js");
var FastPlayer = /** @class */ (function () {
    function FastPlayer() {
        this.color = '#3366FF';
        this.index = FastPlayer.items_index;
        ++FastPlayer.items_index;
        ++FastPlayer.items_active;
    }
    FastPlayer.prototype.handle_collision = function (snake) {
        snake.set_speed(index_js_1.Speed.FAST);
        this.destroy();
    };
    FastPlayer.prototype.draw = function () {
        if (!this.position) {
            return;
        }
        var x = this.position.X * index_js_2.Board.block_size + 2;
        var y = this.position.Y * index_js_2.Board.block_size + 2;
        var size = index_js_2.Board.block_size - 4;
        index_js_2.Canvas.draw_rect(x, y, size, size, this.color);
    };
    FastPlayer.prototype.destroy = function () {
        index_js_2.Board.remove_object_at(this.position);
        delete FastPlayer.instances[this.index];
        --FastPlayer.items_active;
    };
    FastPlayer.instances = {};
    FastPlayer.items_index = 0;
    FastPlayer.items_active = 0;
    return FastPlayer;
}());
exports.FastPlayer = FastPlayer;
