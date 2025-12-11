declare module "godot" {
  interface ResourceTypes {
    "res://addons/my_example_plugin/my_example_dock.tscn": PackedScene<
      Control<SceneNodes["addons/my_example_plugin/my_example_dock.tscn"]>
    >;
  }
}
