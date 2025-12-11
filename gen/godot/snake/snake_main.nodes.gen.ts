declare module "godot" {
  interface SceneNodes {
    "snake/snake_main.tscn": {
      Control: Node2D<{}>;
      UI: Control<{
        VBoxContainer: VBoxContainer<{
          ScoreLabel: Label<{}>;
          StateLabel: Label<{}>;
          SpeedLabel: Label<{}>;
        }>;
        wall_right: TextureRect<{}>;
        wall_bottom: TextureRect<{}>;
        wall_top: TextureRect<{}>;
        wall_left: TextureRect<{}>;
      }>;
    };
  }
}
