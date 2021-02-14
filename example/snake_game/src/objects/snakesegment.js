"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeSegment = void 0;
var canvas_js_1 = require("../ux/canvas.js");
var board_js_1 = require("../ux/board.js");
var SnakeSegment = /** @class */ (function () {
    function SnakeSegment(position) {
        this.color_index = 0;
        this.position = position;
    }
    SnakeSegment.prototype.color = function () {
        var colors = [
            '#FF0000',
            '#FF9966',
            '#FFFA66',
            '#66FF66',
            '#66FFFD',
            '#6699FF',
            '#7966FF',
            '#F366FF',
        ];
        this.color_index++;
        if (this.color_index > colors.length) {
            this.color_index = 0;
        }
        return colors[this.color_index];
    };
    SnakeSegment.prototype.draw = function () {
        var boardX = this.position.X * board_js_1.Board.block_size;
        var boardY = this.position.Y * board_js_1.Board.block_size;
        var size = board_js_1.Board.block_size;
        canvas_js_1.Canvas.fill_rect(boardX, boardY, size, size, this.color());
    };
    SnakeSegment.prototype.handle_collision = function (snake) {
        snake.die();
    };
    return SnakeSegment;
}());
exports.SnakeSegment = SnakeSegment;
