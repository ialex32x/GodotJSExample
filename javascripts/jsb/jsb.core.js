"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signal = signal;
exports.export_ = export_;
exports.export_enum = export_enum;
exports.export_flags = export_flags;
exports.onready = onready;
exports.tool = tool;
exports.icon = icon;
exports.$wait = $wait;
const godot_1 = require("godot");
const jsb = __importStar(require("godot-jsb"));
/**
 *
 */
function signal() {
    return function (target, key) {
        jsb.internal.add_script_signal(target, key);
    };
}
function export_(type, details) {
    return function (target, key) {
        let ebd = { name: key, type: type, hint: godot_1.PropertyHint.PROPERTY_HINT_NONE, hint_string: "" };
        if (typeof details === "object") {
            if (typeof details.hint === "number")
                ebd.hint = details.hint;
            if (typeof details.hint_string === "string")
                ebd.hint_string = details.hint_string;
        }
        jsb.internal.add_script_property(target, ebd);
    };
}
/**
 * NOTE only int value enums are allowed
 */
function export_enum(enum_type) {
    return function (target, key) {
        let enum_vs = [];
        for (let c in enum_type) {
            const v = enum_type[c];
            if (typeof v === "string") {
                enum_vs.push(v + ":" + c);
            }
        }
        let ebd = { name: key, type: godot_1.Variant.Type.TYPE_INT, hint: godot_1.PropertyHint.PROPERTY_HINT_ENUM, hint_string: enum_vs.join(",") };
        jsb.internal.add_script_property(target, ebd);
    };
}
/**
 * NOTE only int value enums are allowed
 */
function export_flags(enum_type) {
    return function (target, key) {
        let enum_vs = [];
        for (let c in enum_type) {
            const v = enum_type[c];
            if (typeof v === "string" && enum_type[v] != 0) {
                enum_vs.push(v + ":" + c);
            }
        }
        let ebd = { name: key, type: godot_1.Variant.Type.TYPE_INT, hint: godot_1.PropertyHint.PROPERTY_HINT_FLAGS, hint_string: enum_vs.join(",") };
        jsb.internal.add_script_property(target, ebd);
    };
}
/**
 * auto initialized on ready (before _ready called)
 * @param evaluator for now, only string is accepted
 */
function onready(evaluator) {
    return function (target, key) {
        let ebd = { name: key, evaluator: evaluator };
        jsb.internal.add_script_ready(target, ebd);
    };
}
function tool() {
    return function (target) {
        jsb.internal.add_script_tool(target);
    };
}
function icon(path) {
    return function (target) {
        jsb.internal.add_script_icon(target, path);
    };
}
function $wait(signal) {
    return new Promise(resolve => {
        let fn = null;
        fn = jsb.callable(function () {
            signal.disconnect(fn);
            if (arguments.length == 0) {
                resolve(undefined);
                return;
            }
            if (arguments.length == 1) {
                resolve(arguments[0]);
                return;
            }
            // return as javascript array if more than one 
            resolve(Array.from(arguments));
            jsb.internal.notify_microtasks_run();
        });
        signal.connect(fn, 0);
    });
}
//# sourceMappingURL=jsb.core.js.map