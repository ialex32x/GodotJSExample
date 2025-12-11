import { EditorScript, Time, Vector3 } from "godot";
import { createClassBinder } from "godot.annotations";
import BotStats from "./bot_stats";

const bind = createClassBinder();

@bind()
@bind.tool()
export default class MyEditorScript1 extends EditorScript {
  _run() {
    {
      let b = new BotStats();
      console.log("BotStats.health:", b.health);
    }

    const s = Time.get_ticks_msec();
    for (let i = 0; i < 100000; ++i) {
      let x = new Vector3();
    }
    const d = Time.get_ticks_msec() - s;
    console.log("my editor script run", d);
  }
}
