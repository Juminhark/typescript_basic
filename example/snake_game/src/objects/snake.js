"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
var index_js_1 = require("../types/index.js");
var snakesegment_js_1 = require("./snakesegment.js");
var index_js_2 = require("../ux/index.js");
var game_js_1 = require("../game.js");
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(position) {
        var _this = _super.call(this, position) || this;
        _this.jump_distance = 8;
        _this.skip_next_turn = false;
        _this.hit_detected = false;
        _this.is_alive = false;
        _this.speed = index_js_1.Speed.NORMAL;
        _this.direction = index_js_1.Direction.NONE;
        _this.hi_score = 0;
        _this.points = 0;
        _this.lives = 9000001;
        _this.segments = [];
        _this.max_length = Snake.default_length;
        _this.position = position;
        _this.segments[0] = _this;
        _this.is_alive = true;
        index_js_2.Board.place_object(_this, position);
        return _this;
    }
    Snake.prototype.jump = function () {
        var position = index_js_1.Position.copy(this.position);
        switch (this.direction) {
            case index_js_1.Direction.UP:
                position.Y -= this.jump_distance;
                break;
            case index_js_1.Direction.DOWN:
                position.Y += this.jump_distance;
                break;
            case index_js_1.Direction.LEFT:
                position.X -= this.jump_distance;
                break;
            case index_js_1.Direction.RIGHT:
                position.X += this.jump_distance;
                break;
        }
        this.update_board(position);
    };
    Snake.prototype.on_hit_screen_edge = function (edge) {
        switch (edge) {
            // TODO: Implement various edge functions
            case index_js_1.ScreenEdge.NORTH:
            case index_js_1.ScreenEdge.SOUTH:
            case index_js_1.ScreenEdge.EAST:
            case index_js_1.ScreenEdge.WEST:
        }
    };
    Snake.prototype.die = function () {
        this.hit_detected = true;
        this.hi_score = this.points > this.hi_score ? this.points : this.hi_score;
        game_js_1.Game.hi_score =
            this.hi_score > game_js_1.Game.hi_score ? this.hi_score : game_js_1.Game.hi_score;
        if (this.lives == 0) {
            this.is_alive = false;
            return game_js_1.Game.reset();
        }
        this.lives -= 1;
        this.destroy();
        this.position = new index_js_1.Position(0, 0);
        this.direction = index_js_1.Direction.NONE;
    };
    Snake.prototype.set_speed = function (speed) {
        this.speed = speed;
        this.skip_next_turn = speed === index_js_1.Speed.SLOW;
    };
    Snake.prototype.process_turn = function () {
        // Don't process if dead
        if (!this.is_alive) {
            return;
        }
        // Skip every other clock tick unless moving fast
        if (this.speed != index_js_1.Speed.FAST && game_js_1.Game.clock.tick == index_js_1.ClockTick.ODD) {
            return;
        }
        // Skip 3 clock ticks if moving slow
        if (this.speed == index_js_1.Speed.SLOW && game_js_1.Game.clock.tick == index_js_1.ClockTick.EVEN) {
            this.skip_next_turn = !this.skip_next_turn;
            if (this.skip_next_turn) {
                return;
            }
        }
        this.hit_detected = false;
        var is_moving = true;
        var pos = index_js_1.Position.copy(this.position);
        switch (this.direction) {
            case index_js_1.Direction.UP:
                pos.Y -= 1;
                break;
            case index_js_1.Direction.DOWN:
                pos.Y += 1;
                break;
            case index_js_1.Direction.LEFT:
                pos.X -= 1;
                break;
            case index_js_1.Direction.RIGHT:
                pos.X += 1;
                break;
            case index_js_1.Direction.NONE:
                is_moving = false;
        }
        if (is_moving) {
            if (pos.X < 0) {
                pos.X = index_js_2.Board.width - 1;
                // this.onHitScreenEdge(ScreenEdge.WEST)
            }
            else if (pos.Y < 0) {
                pos.Y = index_js_2.Board.height - 1;
                // this.onHitScreenEdge(ScreenEdge.NORTH)
            }
            else if (pos.X == index_js_2.Board.width) {
                pos.X = 0;
                // this.onHitScreenEdge(ScreenEdge.SOUTH)
            }
            else if (pos.Y == index_js_2.Board.height) {
                pos.Y = 0;
                // this.onHitScreenEdge(ScreenEdge.SOUTH)
            }
            if (index_js_2.Board.grid[pos.X][pos.Y]) {
                var object = index_js_2.Board.grid[pos.X][pos.Y];
                object.handle_collision(this);
            }
        }
        if (!this.is_alive) {
            this.destroy();
        }
        else if (!this.hit_detected) {
            this.update_board(pos);
        }
    };
    Snake.prototype.update_board = function (pos) {
        var lastPosition = index_js_1.Position.copy(this.position);
        for (var i = 0, ii = this.segments.length; i != ii; i++) {
            var segment = this.segments[i];
            var newPosition = i == 0 ? pos : lastPosition;
            lastPosition = segment.position;
            index_js_2.Board.move_object(segment, newPosition);
        }
        if (this.segments.length <= this.max_length) {
            var newSegment = new snakesegment_js_1.SnakeSegment(lastPosition);
            this.segments.push(newSegment);
            index_js_2.Board.place_object(newSegment, lastPosition);
        }
    };
    Snake.prototype.destroy = function () {
        for (var i = 0, ii = this.segments.length; i != ii; i++) {
            index_js_2.Board.remove_object_at(this.segments[i].position);
        }
        this.segments = [this];
        this.max_length = Snake.default_length;
    };
    Snake.default_length = 48;
    return Snake;
}(snakesegment_js_1.SnakeSegment));
exports.Snake = Snake;
