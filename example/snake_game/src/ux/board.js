"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var position_js_1 = require("../types/position.js");
var canvas_js_1 = require("./canvas.js");
var Board = /** @class */ (function () {
    function Board() {
    }
    Board.place_object = function (object, position) {
        Board.grid[position.X][position.Y] = object;
        object.position = position_js_1.Position.copy(position);
    };
    Board.remove_object_at = function (position) {
        Board.grid[position.X][position.Y] = null;
    };
    Board.move_object = function (object, newPosition) {
        Board.remove_object_at(object.position);
        Board.place_object(object, newPosition);
    };
    Board.place_at_random = function (object) {
        var position = Board.generate_random_position();
        Board.place_object(object, position);
    };
    Board.move_to_random = function (object) {
        var position = Board.generate_random_position();
        Board.move_object(object, position);
    };
    Board.generate_random_position = function () {
        var position;
        while (!position) {
            var x = Math.floor(Math.random() * Board.width);
            var y = Math.floor(Math.random() * Board.height);
            if (!Board.grid[x][y]) {
                return new position_js_1.Position(x, y);
            }
        }
    };
    Board.init = function () {
        Board.height = canvas_js_1.Canvas.height / Board.block_size;
        Board.width = canvas_js_1.Canvas.width / Board.block_size;
        Board.grid = new Array(Board.width);
        for (var i = 0, ii = Board.width; i != ii; ++i) {
            Board.grid[i] = new Array(Board.height);
        }
    };
    Board.draw = function () {
        canvas_js_1.Canvas.fill(Board.bg_color);
        for (var cx = 0; cx < Board.width; cx++) {
            for (var cy = 0; cy < Board.height; cy++) {
                if (Board.grid[cx][cy]) {
                    Board.grid[cx][cy].draw();
                }
            }
        }
    };
    Board.bg_color = '#000A1F';
    Board.grid_color = '#001F5C';
    Board.block_size = 8;
    Board.height = 0;
    Board.width = 0;
    return Board;
}());
exports.Board = Board;
