"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const constants_1 = require("./constants");
const kSnakeBodyAssetPath = "res://snake/snake_body.tscn";
const kCoinAssetPath = "res://snake/coin.tscn";
const kWallAssetPath = "res://snake/wall.tscn";
var GameState;
(function (GameState) {
    GameState[GameState["Playing"] = 0] = "Playing";
    GameState[GameState["Paused"] = 1] = "Paused";
    GameState[GameState["Ended"] = 2] = "Ended";
})(GameState || (GameState = {}));
class Snake extends godot_1.Node2D {
    constructor() {
        super(...arguments);
        this._next_dir = constants_1.SnakeDirection.RIGHT;
        this._move = 0;
        this._speed = 128;
        this._bodies = [];
        this._state = GameState.Playing;
    }
    _ready() {
        this._coin = this.instantiate_asset(kCoinAssetPath);
        this.restart();
    }
    add_snake_body(x, y) {
        const body = this.instantiate_asset(kSnakeBodyAssetPath);
        this._bodies.push(body);
        body.x = x;
        body.y = y;
        body.update_position();
        return body;
    }
    instantiate_asset(path) {
        console.log(godot_1.PackedScene);
        const scene = godot_1.ResourceLoader.load(path, "", godot_1.ResourceLoader.CacheMode.CACHE_MODE_REUSE);
        if (scene) {
            const node = scene.instantiate(godot_1.PackedScene.GenEditState.GEN_EDIT_STATE_DISABLED);
            this.add_child(node, false, godot_1.Node.InternalMode.INTERNAL_MODE_DISABLED);
            node.set_scale(new godot_1.Vector2(0.25, 0.25));
            return node;
        }
    }
    check_body(x, y) {
        for (let body of this._bodies) {
            if (body.x == x && body.y == y) {
                return true;
            }
        }
        return false;
    }
    set_coin_location() {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let rx = x;
        let ry = y;
        while (true) {
            if (this.check_body(x, y)) {
                if (x < constants_1.kWidth - 1) {
                    ++x;
                }
                else {
                    x = 0;
                    if (y < constants_1.kHeight - 1) {
                        ++y;
                    }
                    else {
                        y = 0;
                    }
                }
                if (x == rx && y == ry) {
                    console.log("no space");
                    return;
                }
                continue;
            }
            this._coin.x = x;
            this._coin.y = y;
            this._coin.update_position();
            console.log(`spawn coin at ${this._coin.x}, ${this._coin.y}`);
            break;
        }
    }
    check_wall(x, y) {
        if (x < 0 || x >= constants_1.kWidth)
            return true;
        if (y < 0 || y >= constants_1.kHeight)
            return true;
        //TODO 
        return false;
    }
    set_head_location(x, y, delta_mode) {
        const len = this._bodies.length;
        if (len == 0)
            return;
        let head = this._bodies[0];
        let mx = head.x;
        let my = head.y;
        if (delta_mode) {
            head.x = x + mx;
            head.y = y + my;
        }
        else {
            head.x = x;
            head.y = y;
        }
        if (this.check_wall(head.x, head.y)) {
            this._state = GameState.Ended;
            return;
        }
        const eat = head.x == this._coin.x && head.y == this._coin.y;
        head.update_position();
        for (let i = 1; i < len; i++) {
            const body = this._bodies[i];
            const lx = body.x;
            const ly = body.y;
            body.x = mx;
            body.y = my;
            body.update_position();
            mx = lx;
            my = ly;
        }
        if (eat) {
            this.add_snake_body(mx, my);
            this.set_coin_location();
        }
    }
    restart() {
        for (let body of this._bodies) {
            body.queue_free();
        }
        this._bodies.splice(0);
        this.add_snake_body(5, 5);
        this.add_snake_body(5, 4);
        this.add_snake_body(5, 3);
        this._next_dir = constants_1.SnakeDirection.DOWN;
        this._move = 0;
        // this._speed 
        this.set_coin_location();
        this._state = GameState.Playing;
    }
    _process(dt) {
        switch (this._state) {
            case GameState.Ended: {
                if (godot_1.Input.is_action_just_pressed("confirm", true)) {
                    this.restart();
                }
                return;
            }
            case GameState.Playing: {
                if (godot_1.Input.is_action_pressed("right", true)) {
                    if (this._next_dir != constants_1.SnakeDirection.LEFT) {
                        this._next_dir = constants_1.SnakeDirection.RIGHT;
                    }
                }
                else if (godot_1.Input.is_action_pressed("left", true)) {
                    if (this._next_dir != constants_1.SnakeDirection.RIGHT) {
                        this._next_dir = constants_1.SnakeDirection.LEFT;
                    }
                }
                else if (godot_1.Input.is_action_pressed("up", true)) {
                    if (this._next_dir != constants_1.SnakeDirection.DOWN) {
                        this._next_dir = constants_1.SnakeDirection.UP;
                    }
                }
                else if (godot_1.Input.is_action_pressed("down", true)) {
                    if (this._next_dir != constants_1.SnakeDirection.UP) {
                        this._next_dir = constants_1.SnakeDirection.DOWN;
                    }
                }
                else if (godot_1.Input.is_action_just_pressed("confirm", true)) {
                    this._state = GameState.Paused;
                    return;
                }
                const step = dt * this._speed;
                this._move += step;
                if (this._move >= constants_1.kBlockSize) {
                    this._move -= constants_1.kBlockSize;
                    switch (this._next_dir) {
                        case constants_1.SnakeDirection.RIGHT:
                            this.set_head_location(1, 0, true);
                            break;
                        case constants_1.SnakeDirection.LEFT:
                            this.set_head_location(-1, 0, true);
                            break;
                        case constants_1.SnakeDirection.UP:
                            this.set_head_location(0, -1, true);
                            break;
                        default:
                            this.set_head_location(0, 1, true);
                            break;
                    }
                }
                return;
            }
            default: {
                if (godot_1.Input.is_action_just_pressed("confirm", true)) {
                    this._state = GameState.Playing;
                }
                return;
            }
        }
    }
}
exports.default = Snake;
//# sourceMappingURL=snake.js.map