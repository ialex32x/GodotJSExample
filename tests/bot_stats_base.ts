import { Resource, Variant } from "godot";
import { createClassBinder } from "godot.annotations";

const bind = createClassBinder();

@bind()
export default class BotStatsBase extends Resource {
  @bind.export(Variant.Type.TYPE_INT)
  accessor legs = 0;
}
