import { Signal, Sprite2D, Variant, Vector2 } from "godot";
import { createClassBinder } from "godot.annotations";

const bind = createClassBinder();

@bind()
export default class Arrow extends Sprite2D {
  private _pos!: Vector2;

  @bind.signal()
  accessor die!: Signal;

  @bind.export(Variant.Type.TYPE_FLOAT)
  accessor speed = 0;

  _ready() {
    // for the arrows placed in editor
    this._pos = this.position;
  }

  init_position(pos: Vector2) {
    this._pos = pos;
    this.position = this._pos;
  }

  _process(dt: number) {
    this._pos.x -= dt * this.speed;

    if (this._pos.x < -32) {
      this.die.emit();
      this.queue_free();
      return;
    }

    this.position = this._pos;
  }
}
