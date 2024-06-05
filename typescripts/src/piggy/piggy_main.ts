import { Node, Node2D, NodePath, PackedScene, ResourceLoader, ShaderMaterial, Sprite2D, Vector2 } from "godot";
import * as jsb from "godot-jsb";
import { onready_ } from "../jsb/jsb.core";
import Arrow from "./arrow";
import Shooter from "./shooter";

export default class PiggyMain extends Node {

    @onready_("scene")
    scene!: Node2D;

    @onready_("scene/shooter")
    shooter!: Shooter;

    @onready_("scene/rope")
    rope!: Sprite2D;

    private instantiate_asset(path: string) {
        console.log("loading asset", path);
        const scene = <PackedScene>ResourceLoader.load(path);
        if (scene) {
            const node = scene.instantiate();
            this.scene.add_child(node);
            console.log("instantiate asset", path);
            return node;
        }
        console.error("no such scene", path);
    }

    _ready() {
        console.log(this.scene);
        console.log(this.shooter);
        console.log(this.rope);

        this.shooter.shot.connect(jsb.callable(this, this.on_shooter_shot));
        this.shooter.moved.connect(jsb.callable(this, this.on_shooter_moved));
    }

    private on_shooter_moved(y: number) {
        let rope_y = this.rope.get_position().y;
        let scale = new Vector2(1, (y - rope_y) / 64);
        this.rope.set_scale(scale);
        let mat = <ShaderMaterial>this.rope.get_material();
        try {
            mat.set_shader_parameter("tiling", scale.y);
        } catch (e) { 
            console.error(e);
        }
    }

    private on_shooter_shot(pos: Vector2) {
        console.log("shot at", pos);

        let arrow = <Arrow>this.instantiate_asset("res://piggy/arrow.tscn");
        arrow.init_position(pos);
        arrow.die.connect(jsb.callable(this, this.on_arrow_die));
    }

    private on_arrow_die() {
        console.log("arrow fly out of screen");
    }
}