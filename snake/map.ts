import { Node2D } from "godot";
import { createClassBinder } from "godot.annotations";

const bind = createClassBinder();

@bind()
export default class Map extends Node2D {
  width: number = 0;
  height: number = 0;

  _ready() {}
}
