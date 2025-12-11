declare module "godot" {
  interface ResourceTypes {
    "res://snake/snake_body.tscn": PackedScene<
      Sprite2D<SceneNodes["snake/snake_body.tscn"]>
    >;
  }
}
