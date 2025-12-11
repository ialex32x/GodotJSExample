import { Callable, Label, Node2D, randf, Variant, Vector2 } from "godot";
import TestNode from "../test_button";
import { createClassBinder } from "godot.annotations";

const bind = createClassBinder();

function seconds(secs: number) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(undefined);
    }, secs * 1000);
  });
}

@bind()
export default class MainUI extends Node2D {
  private _pc = 0;

  @bind.export(Variant.Type.TYPE_FLOAT)
  accessor speed = 200;

  async _ready() {
    const button = <TestNode>this.get_node("Control/Button");
    if (button) {
      button.test_signal.connect(Callable.create(this, this.on_test), 0);
    }

    let ticks = 5;
    for (let i = ticks; i > 0; i--) {
      (<Label>this.get_node("Control/Label")).text =
        `wait for ${i} seconds with await`;
      await seconds(1);
    }
    (<Label>this.get_node("Control/Label")).text = `${ticks} seconds passed`;
  }

  private on_test() {
    console.log(
      "test signal emitted",
      "randf:",
      randf(), // test utility function call
      "Vector2.from_angle:",
      Vector2.from_angle(10), // test builtin static function
      "Vector2.length:",
      new Vector2(1, 1).length(), // test builtin instance method
      "",
    );
    const label = <Label>this.get_node("Control/Label");
    if (label) {
      label.text = `hello ${this._pc++}`;
    } else {
      console.warn("Control/Label not found");
    }

    console.trace("trace test");
    console.debug("debug test");
    console.info("info test");
    console.log("log test");
    console.warn("warn test");
    console.error("error test");
  }
}
