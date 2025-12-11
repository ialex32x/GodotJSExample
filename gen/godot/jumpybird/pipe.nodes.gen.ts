declare module "godot" {
  interface SceneNodes {
    "jumpybird/pipe.tscn": {
      body: TextureRect<{
        Area2D: Area2D<{
          CollisionShape2D: CollisionShape2D<{}>;
        }>;
      }>;
      head: TextureRect<{
        Area2D: Area2D<{
          CollisionShape2D: CollisionShape2D<{}>;
        }>;
      }>;
    };
  }
}
