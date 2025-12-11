declare module "godot" {
  interface SceneNodes {
    "ui/foo_test.tscn": {
      Node2D: Node2D<{
        Sprite2D: Sprite2D<{}>;
        Node2D: Node2D<{
          Sprite2D: Sprite2D<{}>;
        }>;
      }>;
    };
  }
}
