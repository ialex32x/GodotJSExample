import { PackedStringArray, Variant } from "godot";
import { createClassBinder } from "godot.annotations";
import BotStatsBase from "./bot_stats_base";

const bind = createClassBinder();

@bind()
export default class BotStats extends BotStatsBase {
  @bind.export(Variant.Type.TYPE_INT)
  accessor health = 0;

  @bind.export(Variant.Type.TYPE_PACKED_STRING_ARRAY)
  accessor strings = new PackedStringArray();

  //TODO how to keep the similar style of the gdscript: BotStats.new(xxx)
}
