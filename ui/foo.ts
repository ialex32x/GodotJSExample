import { createClassBinder } from "godot.annotations";
import FooBase from "./foo_base";

const bind = createClassBinder();

@bind()
@bind.tool()
export default class Foo extends FooBase {}
