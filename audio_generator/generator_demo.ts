import { AudioStreamGenerator, AudioStreamGeneratorPlayback, AudioStreamPlayer, Node, Vector2 } from "godot";
import { onready } from "../jsb/jsb.core";

const zzfxm = require("libs/zzfxm");

// https://keithclark.github.io/ZzFXM/
// Song data for "I am back". Original song by Sky.
const song = zzfxm.default(...[[[1.8,0,72,,,.2,,4,-2,6,50,.15,,6],[,0,655,,,.09,3,1.65,,,,,.02,3.8,-.1,,.2],[1.2,0,23,,,.2,3,4,,,3,.9,.05],[1.5,0,740,,,.15,2,.2,-.1,-.15,9,.02,,.1,.12,,.06]],[[[3,-1,13,13,13,8,13,,,,,,,,,,,,11,11,11,6,11,,,,,,,,,,,,10,10,10,6,10,,,,,,,,,6,8,10,8,8,8,5,13,,8,8,8,5,13,,,,,,],[,1,25,,25,,,,,,,,,,,,,25,25,,25,,,,,,,25,,,25,,25,25,25,,25,,,,,,,,,,,25,25,25,25,,25,,,,,,,,,,,,,,],[2,-1,13,,25,,13,13,25,13,,13,25,13,13,13,25,,13,,25,,13,13,25,13,,13,25,13,13,13,,,13,,25,,13,13,25,13,,13,25,13,13,13,25,,13,,25,,13,13,25,13,,13,25,13,13,13,25,,]],[[3,-1,13,13,13,8,13,,,,,,,,,,,,11,11,11,6,11,,,,,,,,,,,,10,10,10,6,10,,,,,,,,,6,8,10,8,8,8,5,13,,8,8,8,5,13,8,8,8,5,13],[2,-1,13,,25,,13,13,25,13,,13,25,13,13,13,25,27,11,,23,,11,11,23,11,,11,23,11,11,11,23,22,18,,30,,18,18,30,18,,18,30,18,18,18,30,22,13,,25,,13,13,25,13,,13,25,13,13,13,25,,],[,1,25,,25,,,,,,,,,,,,,25,25,,25,,,,,,,,,,,,,,25,,25,,,,,,,,,,,25,25,25,25,,25,,,,,,,,,,,,,,],[1,1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13,13,13,13,13,13,13,13]],[[3,-1,13,13,13,8,13,,13,15,17,17,15,13,20,20,18,17,18,,,,17,,15,,,,17,,18,,22,22,22,,18,,,,25,25,25,,22,,,18,20,22,20,,,,,,,,,,,,,,,,],[2,-1,13,,25,,13,13,25,13,,13,25,13,13,13,25,27,11,,23,,11,11,23,11,,11,23,11,11,11,23,22,18,,30,,18,18,30,18,,18,30,18,18,18,30,22,13,,25,,13,13,25,13,,13,25,13,13,13,25,,],[,1,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,],[1,1,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,13,,13]],[[3,-1,13,,25,,13,13,25,13,,13,25,13,13,13,25,,11,,23,,11,11,23,11,,11,23,11,11,11,23,,10,,22,,10,10,22,10,,10,22,10,10,6,8,10,20,25,20,20,25,20,,20,25,20,20,20,25,,20,,],[2,-1,13,,25,,13,13,25,13,,13,25,13,13,13,25,,13,,25,,13,13,25,13,,13,25,13,13,13,25,,13,,25,,13,13,25,13,,13,25,13,13,13,25,,13,,25,,13,13,25,13,,13,25,13,13,13,25,,],[,1,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,],[1,1,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,13,,13]],[[3,-1,13,,,,,,8,,17,15,13,,17,15,13,,15,,,,10,13,15,10,13,15,10,13,15,10,13,15,12,,,,,,8,15,,,,,17,15,13,8,13,,,,,,10,8,,20,20,20,20,20,20,20],[2,-1,13,,25,,13,13,25,13,,13,25,13,13,13,25,,15,,27,,15,15,27,15,,15,27,15,15,15,27,32,20,,32,,20,20,32,20,,20,32,20,20,20,32,,13,,25,,13,13,25,20,,20,32,20,20,20,32,,],[,1,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,],[1,1,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,13,,13]],[[3,-1,13,,,,,,8,,17,,,,18,17,15,,18,,,,13,,,,10,,,,6,,,,8,12,15,12,20,,8,12,15,12,20,,22,20,15,,13,,,,,,10,,8,,,,,8,20,8],[2,-1,13,,25,25,13,,25,25,13,,25,25,13,,25,25,15,,27,27,15,,27,27,15,,27,27,15,,27,27,20,,32,32,20,,32,32,20,,32,32,20,,32,32,13,,25,25,13,,25,25,20,,32,32,20,,32,34],[,1,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,],[1,1,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,13,,13]],[[3,-1,13,,,,,,8,,17,,,,18,17,15,,18,,,,13,,,,10,,,,6,,,,8,12,15,12,20,,8,12,15,12,20,,22,20,15,,13,,,,,,10,,8,,,,,8,20,8],[,1,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,],[1,1,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,13,,13]],[[,1,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,,,25,25,,25,25,,,,,,25,,,,25,,,25,,,,25,25,25,25,25],[1,1,,,,,13,,,,,,,,13,,,,,,,,13,,,,,,,,13,,13,,,,,,13,,,,,,,,13,,,,,,,,13,13,,13,,13,13,13,13,13,13,13]]],[0,1,2,2,3,3,2,2,4,4,5,6,6,7,2,2,3]]);

/**
 * Audio Generator Demo (TypeScript version)
 *  This is a demo showing how one can generate and play audio samples from TypeScript.  
 * 
 * @link https://godotengine.org/asset-library/asset/526
 */
export default class AudioGeneratorDemo extends Node {
    @onready("Player")
    player!: AudioStreamPlayer;

    private playback!: AudioStreamGeneratorPlayback;
    private cached_frame = new Vector2();
    private frame_index = 0;

    //BUG dont know why this crashs v8
    // private xxx = zzfx.generate();

    _ready(): void {
        console.log("song samples", song[0].length);
        // this.buffer = zzfx.generate(1.74,.05,598,.09,.26,.41,0,.24,0,0,-46,.07,.17,0,0,0,.09,.42,.28,.06);
        (<AudioStreamGenerator>this.player.stream).mix_rate = zzfxm.zzfxR;
        this.player.play();
        this.playback = <AudioStreamGeneratorPlayback>this.player.get_stream_playback();
    }

    _process(delta: number): void {
        let to_fill = this.playback.get_frames_available();
        while (to_fill > 0) {
            this.frame_index = (this.frame_index + 1) % song[0].length;
            this.cached_frame.x = song[0][this.frame_index];
            this.cached_frame.y = song[1][this.frame_index];
            this.playback.push_frame(this.cached_frame); // Audio frames are stereo.
            --to_fill;
        }
    }
}