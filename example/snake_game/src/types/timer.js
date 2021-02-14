"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = exports.ClockTick = exports.ClockType = void 0;
var ClockType;
(function (ClockType) {
    ClockType[ClockType["TIMED"] = 0] = "TIMED";
    ClockType[ClockType["INFINITE"] = 1] = "INFINITE";
})(ClockType = exports.ClockType || (exports.ClockType = {}));
var ClockTick;
(function (ClockTick) {
    ClockTick[ClockTick["EVEN"] = 0] = "EVEN";
    ClockTick[ClockTick["ODD"] = 1] = "ODD";
})(ClockTick = exports.ClockTick || (exports.ClockTick = {}));
var Timer = /** @class */ (function () {
    function Timer(interval, duration, handler) {
        var _this = this;
        this.tick = ClockTick.EVEN;
        this.handler = function () {
            console.log('No clock event');
        };
        this.on_elapsed = function () {
            if (_this.is_paused) {
                return;
            }
            _this.tick = _this.tick === ClockTick.EVEN ? ClockTick.ODD : ClockTick.EVEN;
            _this.handler();
            if (_this.type == ClockType.TIMED) {
                _this.stop();
            }
        };
        this.interval = interval;
        this.handler = handler;
        this.type = duration == 0 ? ClockType.INFINITE : ClockType.TIMED;
    }
    Timer.prototype.start = function () {
        this.is_running = true;
        this.handle =
            this.type == ClockType.INFINITE
                ? window.setInterval(this.on_elapsed.bind(this), this.interval)
                : window.setTimeout(this.on_elapsed.bind(this), this.interval);
    };
    Timer.prototype.stop = function () {
        this.is_running = false;
        return this.type == ClockType.INFINITE
            ? window.clearInterval(this.handle)
            : window.clearTimeout(this.handle);
    };
    Timer.prototype.pause = function () {
        this.is_paused = true;
    };
    Timer.prototype.resume = function () {
        this.is_paused = false;
    };
    return Timer;
}());
exports.Timer = Timer;
