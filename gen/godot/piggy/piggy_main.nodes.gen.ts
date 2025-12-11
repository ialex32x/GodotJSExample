declare module "godot" {
  interface SceneNodes {
    "piggy/piggy_main.tscn": {
      scene: Node2D<{
        background: Sprite2D<{}>;
        shooter: Sprite2D<{
          body: Area2D<{
            CollisionShape2D: CollisionShape2D<{}>;
          }>;
          roof: Area2D<{
            CollisionShape2D: CollisionShape2D<{}>;
          }>;
          shot_point: Marker2D<{}>;
        }>;
        arrow: Sprite2D<{
          Area2D: Area2D<{
            CollisionShape2D: CollisionShape2D<{}>;
          }>;
        }>;
        rope: Sprite2D<{}>;
        wolf1: Sprite2D<{
          Area2D: Area2D<{
            CollisionShape2D: CollisionShape2D<{}>;
          }>;
        }>;
        wolf2: Sprite2D<{
          Area2D: Area2D<{
            CollisionShape2D: CollisionShape2D<{}>;
          }>;
        }>;
        wolf3: Sprite2D<{
          Area2D: Area2D<{
            CollisionShape2D: CollisionShape2D<{}>;
          }>;
        }>;
      }>;
      ui: Control<{
        debug_info: VBoxContainer<{
          position_label: Label<{}>;
        }>;
      }>;
    };
  }
}
