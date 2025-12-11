declare module "godot" {
  interface SceneNodes {
    "jumpybird/jumpybird_main.tscn": {
      scene: Node2D<{
        sky: TextureRect<{}>;
        cloud: TextureRect<{}>;
        skyline: TextureRect<{}>;
        bird: Sprite2D<{
          Area2D: Area2D<{
            CollisionShape2D: CollisionShape2D<{}>;
          }>;
        }>;
      }>;
      UI: Control<{
        Label: Label<{}>;
      }>;
    };
  }
}
