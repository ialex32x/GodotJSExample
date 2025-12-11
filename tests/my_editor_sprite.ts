import { Engine, PackedStringArray, Sprite2D, Variant } from "godot";
import { createClassBinder } from "godot.annotations";

const bind = createClassBinder();

// see example code in GDScript/C# at:
// https://docs.godotengine.org/en/stable/tutorials/plugins/running_code_in_the_editor.html#doc-running-code-in-the-editor

@bind()
@bind.icon("res://icon/affiliate.svg")
@bind.tool()
export default class MyEditorSprite extends Sprite2D {
  /**
   * get/set property for `export` (both must be defined)
   */
  @bind.export(Variant.Type.TYPE_FLOAT)
  accessor speed: number = 0;

  /**
   * plain field for `export`
   */
  @bind.export(Variant.Type.TYPE_INT)
  accessor unused_int = 0;

  private _clockwise = false;

  _ready() {
    this._clockwise = Engine.is_editor_hint();
  }

  _process(delta: number) {
    const step = Math.PI * delta * (this._clockwise ? this.speed : -this.speed);
    // this.set_rotation(this.get_rotation() + step);
    this.rotation = (this.rotation + step) % (Math.PI * 2);
  }

  _get_configuration_warnings() {
    let warnings = new PackedStringArray();
    if (this.speed >= -0.01 && this.speed < 0.01) {
      warnings.append("speed is too low");
    }
    return warnings;
  }
}
