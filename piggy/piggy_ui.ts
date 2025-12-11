import { Control, Label } from "godot";
import { createClassBinder } from "godot.annotations";

const bind = createClassBinder();

@bind()
export default class PiggyUI extends Control {
  @bind.onready("debug_info/position_label")
  position_label!: Label;

  set_debug_position(x: number, y: number) {
    this.position_label.text = `X:${x} Y:${y}`;
  }

  _ready(): void {
    console.log("piggy ui");
  }
}
