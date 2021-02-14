"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coin = void 0;
var index_js_1 = require("../ux/index.js");
var Coin = /** @class */ (function () {
    function Coin(value) {
        this.value = value;
        this.index = Coin.coins_index;
        ++Coin.coins_index;
        ++Coin.coins_active;
    }
    Coin.create_random = function () {
        return new Coin(Coin.values[Math.floor(Math.random() * Coin.values.length)]);
    };
    Coin.prototype.handle_collision = function (snake) {
        snake.points += this.value;
        snake.max_length += 8;
        this.destroy();
    };
    Coin.prototype.draw = function () {
        if (!this.position) {
            return;
        }
        var x = this.position.X * index_js_1.Board.block_size + index_js_1.Board.block_size / 2;
        var y = this.position.Y * index_js_1.Board.block_size + index_js_1.Board.block_size / 2;
        var r = index_js_1.Board.block_size / 2 - 1;
        index_js_1.Canvas.context.beginPath();
        index_js_1.Canvas.context.arc(x, y, r, 0, 2 * Math.PI, false);
        index_js_1.Canvas.context.strokeStyle = '#FFFF00';
        index_js_1.Canvas.context.fillStyle = '#CCCC00';
        index_js_1.Canvas.context.stroke();
        index_js_1.Canvas.context.fill();
    };
    Coin.prototype.destroy = function () {
        index_js_1.Board.remove_object_at(this.position);
        delete Coin.instances[this.index];
        --Coin.coins_active;
    };
    Coin.values = [200, 600, 800, 1000, 2000];
    Coin.instances = {};
    Coin.coins_index = 0;
    Coin.coins_active = 0;
    return Coin;
}());
exports.Coin = Coin;
