import {
  Input,
  Marker2D,
  Signal,
  Signal1,
  Sprite2D,
  Variant,
  Vector2,
} from "godot";
import { createClassBinder } from "godot.annotations";
import PiggyUI from "./piggy_ui";

const bind = createClassBinder();

@bind()
export default class Shooter extends Sprite2D {
  @bind.export(Variant.Type.TYPE_FLOAT)
  accessor speed: number = 0;

  @bind.signal()
  accessor shot!: Signal<(vector: Vector2) => void>;

  @bind.signal()
  accessor moved!: Signal<(num: number) => void>;

  private _dirty = false;
  private _pos!: Vector2;

  _ready() {
    this._pos = this.position;
  }

  _process(dt: number) {
    if (Input.is_action_pressed("up")) {
      this._pos.y = Math.max(120, this._pos.y - dt * this.speed);
      this._dirty = true;
    } else if (Input.is_action_pressed("down")) {
      this._pos.y = Math.min(386, this._pos.y + dt * this.speed);
      this._dirty = true;
    }
    if (Input.is_action_just_pressed("confirm")) {
      this._shot();
    }

    if (this._dirty) {
      this._dirty = false;
      this.position = this._pos;
      this.moved.emit(this._pos.y);

      let ui = <PiggyUI>this.get_tree()?.current_scene?.get_node("ui");
      ui.set_debug_position(
        Math.floor(this.position.x),
        Math.floor(this.position.y),
      );
    }
  }

  private _shot() {
    let marker = <Marker2D>this.get_node("shot_point");
    this.shot.emit(marker.global_position);
  }
}
